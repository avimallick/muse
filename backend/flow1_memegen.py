# flow1_memegen.py
from typing import List
import random

def generate_meme_ideas(product_name: str, product_description: str, image_path: str) -> List[dict]:
    # Simulate LLM-based ideas
    ideas = [
        {
            "idea": f"{product_name} but it's built like a tank",
            "audio_script": f"When your {product_name} survives a nuclear blast...",
            "video_prompt": "Show a dramatic explosion with calm music, zoom into product image."
        },
        {
            "idea": f"{product_name} vs your ex",
            "audio_script": f"This {product_name} is more loyal than my ex 😤",
            "video_prompt": "Split screen with dramatic music and side-by-side comparison."
        },
        {
            "idea": f"{product_name} in Ohio",
            "audio_script": f"What in Ohio is this {product_name} doing 💀",
            "video_prompt": "Surreal meme style video using the uploaded image and glitch effects."
        }
    ]
    return random.sample(ideas, 3)
