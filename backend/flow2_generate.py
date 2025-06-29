# flow2_generate.py
import os
from utils.audio import generate_audio
from utils.video import generate_video
from utils.stitch import stitch_audio_video

def generate_ad(audio_script: str, video_prompt: str, output_name: str = "final_ad.mp4"):
    print("[1] Generating audio with ElevenLabs...")
    audio_path = generate_audio(audio_script, output_name="audio.mp3")

    print("[2] Generating video with WaveSpeed...")
    video_path = generate_video(video_prompt, output_name="video.mp4", audio_path=audio_path)

    print("[3] Stitching audio and video...")
    stitched_path = stitch_audio_video(video_path, audio_path, output_path=output_name)

    print(f"✅ Final video saved at: {stitched_path}")
    return stitched_path
