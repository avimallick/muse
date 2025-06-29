# flow3_publish.py
import os
from typing import Dict
from langchain.llms.base import LLM
import requests

# Minimal wrapper to call Mistral or similar API
class CaptionLLM(LLM):
    def __init__(self, api_key: str, api_url: str):
        self.api_key = api_key
        self.api_url = api_url

    @property
    def _llm_type(self):
        return "caption-llm"

    def _call(self, prompt: str, stop=None, run_manager=None) -> str:
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        payload = {
            "model": "mistral-tiny",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.9
        }
        response = requests.post(self.api_url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()['choices'][0]['message']['content']

caption_llm = CaptionLLM(
    api_key=os.getenv("MISTRAL_API_KEY"),
    api_url="https://api.mistral.ai/v1/chat/completions"
)

def generate_caption_and_publish(video_path: str, product_name: str, product_description: str) -> Dict:
    prompt = f"""
You are a TikTok meme caption expert.
Generate a short, funny caption for a meme ad video about this product:

Product Name: {product_name}
Description: {product_description}

Make it engaging and Gen Z-style.
Include 1-2 emojis and at least one viral hashtag.
"""

    caption = caption_llm(prompt).strip()

    return {
        "caption": caption,
        "video_path": video_path,
        "product_name": product_name,
        "product_description": product_description
    }
