import os

from dotenv import load_dotenv
from crewai import LLM

load_dotenv()

llm = LLM(
    model=os.getenv("MODEL"),
    api_key=os.getenv("GROQ_API_KEY")
)