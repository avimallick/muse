# utils/audio.py
import os
import requests

def generate_audio(text: str, output_name: str = "audio.mp3") -> str:
    api_key = os.getenv("ELEVENLABS_API_KEY")
    voice_id = os.getenv("ELEVENLABS_VOICE_ID", "EXAVITQu4vr4xnSDxMaL")
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"

    payload = {
        "text": text,
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
            "stability": 0.7,
            "similarity_boost": 0.8
        }
    }

    headers = {
        "xi-api-key": api_key,
        "Content-Type": "application/json"
    }

    response = requests.post(url, json=payload, headers=headers)
    response.raise_for_status()

    with open(output_name, "wb") as f:
        f.write(response.content)

    return output_name
