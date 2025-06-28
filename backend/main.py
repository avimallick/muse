# main.py
from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uuid
import os
from flow1_memegen import generate_meme_ideas

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

@app.post("/ideas/", response_model=List[MemeIdea])
def meme_idea_endpoint(data: MemeIdeaRequest):
    return generate_meme_ideas(
        product_name=data.product_name,
        product_description=data.product_description,
        image_path=data.image_filename
    )
