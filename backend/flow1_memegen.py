# flow1_memegen.py

from dotenv import load_dotenv
load_dotenv()

import os, json, requests
from typing import List, Optional
from langgraph.graph import StateGraph
from langchain.prompts import PromptTemplate
from langchain_core.runnables import RunnableLambda
from langchain_community.vectorstores import Chroma
from langchain_mistralai.embeddings import MistralAIEmbeddings
from langchain.docstore.document import Document
from langchain.llms.base import LLM

### === 1. LLM Wrapper ===
class ChatMistralAPI(LLM):
    api_key: Optional[str] = None
    api_url: Optional[str] = None

    @property
    def _llm_type(self) -> str:
        return "mistral-api"

    def _call(self, prompt: str, **kwargs) -> str:
        response = requests.post(
            self.api_url,
            headers={"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"},
            json={
                "model": "mistral-tiny",
                "messages": [{"role": "user", "content": prompt}],
                "temperature": 0.8
            }
        )
        response.raise_for_status()
        return response.json()["choices"][0]["message"]["content"]

### === 2. Load Trends ===
APIFY_URL = "https://api.apify.com/v2/datasets/qpC2dJykxgb3cxl1Q/items?token=apify_api_9dIupucFhMS5fWvoIYJGTTgyTyl0F50pjmHK"
EMBED_MODEL = MistralAIEmbeddings(api_key=os.getenv("MISTRAL_API_KEY"))

def fetch_live_trends():
    try:
        res = requests.get(APIFY_URL)
        res.raise_for_status()
        return res.json()
    except Exception as e:
        print("Live trend fetch failed:", e)
        return []

def load_trend_docs():
    with open("meme_trends.json") as f:
        base = json.load(f)
    live = fetch_live_trends()
    return [Document(page_content=trend["description"], metadata={"title": trend["title"]})
            for trend in (base + live) if "description" in trend and "title" in trend]

VECTOR_DB = Chroma.from_documents(load_trend_docs(), embedding=EMBED_MODEL, persist_directory="./chroma")
retriever = VECTOR_DB.as_retriever()

### === 3. Prompt ===
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
llm = ChatMistralAPI(api_key=os.getenv("MISTRAL_API_KEY"), api_url="https://api.mistral.ai/v1/chat/completions")

### === 4. LangGraph ===
class InputState(dict): pass

def meme_node(state):
    docs = retriever.get_relevant_documents(state["description"])
    context = "\n".join([d.page_content for d in docs])
    prompt = PROMPT.format(name=state["name"], description=state["description"], context=context)
    raw = llm(prompt)
    try:
        ideas = json.loads(raw)
    except Exception as e:
        ideas = [{"idea": "Parse error", "audio_script": raw[:80], "video_prompt": "N/A"}]
    return {**state, "ideas": ideas}

builder = StateGraph(InputState)
builder.add_node("start", RunnableLambda(lambda x: x))
builder.add_node("meme_node", RunnableLambda(meme_node))

builder.set_entry_point("start")
builder.add_edge("start", "meme_node")
builder.set_finish_point("meme_node")

flow = builder.compile()

### === 5. Public API ===
def generate_meme_ideas(product_name: str, product_description: str, image_path: str) -> List[dict]:
    result = flow.invoke({
        "name": product_name,
        "description": product_description,
        "image_path": image_path
    })
    print("🧪 Raw output from flow.invoke:", result)

    if "ideas" not in result:
        raise ValueError(f"Expected key 'ideas' in result, got: {result}")

    return result["ideas"]
