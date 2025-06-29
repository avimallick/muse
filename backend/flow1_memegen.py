# flow1_memegen.py
import os
import json
import requests
from typing import List
from langchain.llms.base import LLM
from langchain.schema import ChatMessage
from langchain_core.outputs import LLMResult
from langgraph.graph import END, StateGraph
from langchain.prompts import PromptTemplate
from langchain_core.runnables import RunnableLambda
from langchain.vectorstores import Chroma
from langchain_mistralai.embeddings import MistralAIEmbeddings
from langchain.schema.runnable import Runnable
from langchain.memory import SimpleMemory
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.docstore.document import Document

# 1. Mistral API Wrapper
class ChatMistralAPI(LLM):
    def __init__(self, api_key: str, api_url: str):
        self.api_key = api_key
        self.api_url = api_url

    @property
    def _llm_type(self):
        return "mistral-api"

    def _call(self, prompt: str, stop=None, run_manager=None) -> str:
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        payload = {
            "model": "mistral-tiny",  # Replace with your specific model name if different
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.8
        }
        response = requests.post(self.api_url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()['choices'][0]['message']['content']

# 2. Load Trends from File + Apify
EMBED_MODEL = MistralAIEmbeddings(api_key=os.getenv("MISTRAL_API_KEY"))

APIFY_URL = "https://api.apify.com/v2/datasets/qpC2dJykxgb3cxl1Q/items?token=apify_api_9dIupucFhMS5fWvoIYJGTTgyTyl0F50pjmHK"

def fetch_live_meme_trends():
    try:
        response = requests.get(APIFY_URL)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Failed to fetch live trends: {e}")
        return []

def load_trend_docs():
    # Load local JSON
    with open("meme_trends.json") as f:
        base = json.load(f)

    # Load from Apify
    live = fetch_live_meme_trends()

    combined = base + live
    return [Document(page_content=trend["description"], metadata={"title": trend["title"]})
            for trend in combined if "description" in trend and "title" in trend]

VECTOR_DB = Chroma.from_documents(load_trend_docs(), embedding=EMBED_MODEL, persist_directory="./chroma")

# 3. Prompt Template
TEMPLATE = """
You're a meme marketing expert. Given a product, generate 3 meme ad ideas.
Each idea must include:
- 'idea': a short title
- 'audio_script': the funny narration
- 'video_prompt': visual description for the video
Use these meme trends: {context}

Product:
Name: {name}
Description: {description}

Respond with a JSON list of 3 items.
"""

PROMPT = PromptTemplate.from_template(TEMPLATE)

# 4. LangGraph Node
llm = ChatMistralAPI(api_key=os.getenv("MISTRAL_API_KEY"), api_url="https://api.mistral.ai/v1/chat/completions")

retriever = VECTOR_DB.as_retriever()

class InputState(dict):
    name: str
    description: str
    image_path: str

# Graph Node Logic
def node_meme_gen(state):
    docs = retriever.get_relevant_documents(state["description"])
    trends = "\n".join(d.page_content for d in docs)
    prompt = PROMPT.format(name=state["name"], description=state["description"], context=trends)
    raw = llm(prompt)
    try:
        return {"ideas": json.loads(raw)}
    except Exception:
        return {"ideas": [{"idea": "LLM failed", "audio_script": raw[:100], "video_prompt": "N/A"}]}

# LangGraph Flow
builder = StateGraph(InputState)
builder.add_node("meme_agent", RunnableLambda(node_meme_gen))
builder.set_entry_point("meme_agent")
builder.set_finish_point("meme_agent")
flow = builder.compile()

# Public API

def generate_meme_ideas(product_name: str, product_description: str, image_path: str) -> List[dict]:
    result = flow.invoke({
        "name": product_name,
        "description": product_description,
        "image_path": image_path
    })
    return result["ideas"]
