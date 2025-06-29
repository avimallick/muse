# utils/stitch.py
import subprocess
import os

def stitch_audio_video(video_path: str, audio_path: str, output_path: str = "final.mp4") -> str:
    command = [
        "ffmpeg",
        "-y",  # overwrite without asking
        "-i", video_path,
        "-i", audio_path,
        "-c:v", "copy",
        "-c:a", "aac",
        "-shortest",
        output_path
    ]

    result = subprocess.run(command, capture_output=True)
    if result.returncode != 0:
        raise RuntimeError(f"ffmpeg failed: {result.stderr.decode()}")

    return output_path
