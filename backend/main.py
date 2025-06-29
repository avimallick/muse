# main.py
from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uuid
import os
from flow1_memegen import generate_meme_ideas
from flow2_generate import generate_ad

app = FastAPI()

# CORS (adjust for frontend port if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MemeIdeaRequest(BaseModel):
    product_name: str
    product_description: str
    image_filename: str  # Path to uploaded file

class MemeIdea(BaseModel):
    idea: str
    audio_script: str
    video_prompt: str

class AdGenerationRequest(BaseModel):
    audio_script: str
    video_prompt: str

class AdGenerationResponse(BaseModel):
    video_path: str

@app.post("/ideas/", response_model=List[MemeIdea])
def meme_idea_endpoint(data: MemeIdeaRequest):
    return generate_meme_ideas(
        product_name=data.product_name,
        product_description=data.product_description,
        image_path=data.image_filename
    )

@app.post("/generate/", response_model=AdGenerationResponse)
def ad_generation_endpoint(data: AdGenerationRequest):
    output_path = generate_ad(data.audio_script, data.video_prompt, output_name="final_ad.mp4")
    return {"video_path": output_path}

@app.post("/upload/")
async def upload_image(file: UploadFile):
    os.makedirs("uploads", exist_ok=True)
    save_path = f"uploads/{file.filename}"
    with open(save_path, "wb") as f:
        f.write(await file.read())
    return {"saved_path": os.path.abspath(save_path)}
