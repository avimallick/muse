# utils/video.py
import os
import requests
from pydub.utils import mediainfo

def get_audio_duration(audio_path: str) -> float:
    info = mediainfo(audio_path)
    return float(info['duration'])

def generate_video(prompt: str, output_name: str = "video.mp4", audio_path: str = None) -> str:
    api_key = os.getenv("WAVESPEED_API_KEY")
    url = "https://api.wavespeed.ai/api/v3/bytedance/seedance-v1-pro-t2v-480p"

    duration = 5  # default fallback
    if audio_path and os.path.exists(audio_path):
        duration = round(get_audio_duration(audio_path))

    payload = {
        "prompt": prompt,
        "duration": duration,
        "aspect_ratio": "19:6",
        "seed": -1
    }

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    response = requests.post(url, json=payload, headers=headers)
    response.raise_for_status()

    video_url = response.json().get("video_url")
    if not video_url:
        raise ValueError("WaveSpeed API did not return a video URL")

    video_data = requests.get(video_url)
    with open(output_name, "wb") as f:
        f.write(video_data.content)

    return output_name
