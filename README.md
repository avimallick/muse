# MemeMarketer: AI-Powered Viral Ad Generator 🎬

MemeMarketer is a backend service for generating viral meme-based marketing videos.

==============================
🧠 How it Works
==============================

1. Flow 1 – Meme Idea Generator
   - Analyzes product description, retrieves meme trends (ChromaDB), and generates 3 meme ad ideas using Mistral via LangGraph.

2. Flow 2 – Audio/Video Generator
   - Uses ElevenLabs for audio, WaveSpeed for video, and ffmpeg to stitch them together with duration syncing.

3. Flow 3 – Post Preview Generator
   - Generates a TikTok-style caption using Mistral and returns a final JSON payload with the video + caption.

==============================
⚙️ Environment Variables
==============================

Create a .env file or export these in your shell:

export MISTRAL_API_KEY="your-mistral-api-key"

export ELEVENLABS_API_KEY="your-elevenlabs-api-key"
export ELEVENLABS_VOICE_ID="your-voice-id"        # optional, defaults to a standard voice

export WAVESPEED_API_KEY="your-wavespeed-api-key"

==============================
📦 Python Requirements
==============================

Install dependencies:

pip install -r requirements.txt

-- requirements.txt --
fastapi
uvicorn
langchain
langgraph
langchain-mistralai
chromadb
requests
pydub
tiktoken
ffmpeg-python

System dependency:
sudo apt install ffmpeg      # or brew install ffmpeg on macOS

==============================
🚀 How to Run
==============================

uvicorn main:app --reload

Visit the interactive docs at:
http://localhost:8000/docs

==============================
🛠 API Endpoints
==============================

POST /ideas/
  - Generate meme ad ideas from product name and description

POST /generate/
  - Generate audio + video and stitch into final ad

POST /publish/
  - Generate a TikTok-style caption and return final post preview

==============================
💬 Example Output (/publish)
==============================

{
  "caption": "When your coffee hits harder than deadlines ☕🔥 #grindset",
  "video_path": "final_ad.mp4",
  "product_name": "MegaMug",
  "product_description": "An oversized mug built for caffeine-fueled devs."
}

==============================
📂 Project Structure
==============================

backend/
├── main.py
├── flow1_memegen.py
├── flow2_generate.py
├── flow3_publish.py
└── utils/
    ├── audio.py
    ├── video.py
    └── stitch.py

==============================
🧪 Dev Notes
==============================

- Uses ChromaDB locally at ./chroma/
- LangGraph coordinates agent reasoning
- RAG is powered by meme_trends.json + Apify API
