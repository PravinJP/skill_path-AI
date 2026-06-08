import os
import json

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


async def generate_interview_report(history):

    prompt = f"""
You are a Senior Technical Interview Panel.

Analyze the complete interview history and generate a final interview report.

IMPORTANT RULES:

1. Return ONLY valid JSON.
2. Do NOT wrap JSON inside markdown.
3. Do NOT add explanations before or after JSON.
4. Do NOT add notes.
5. Do NOT add comments.
6. overall_score must be a number between 0 and 100.
7. technical_strengths must contain 3-5 points.
8. weak_areas must contain 3-5 points.
9. recommended_topics must contain 3-5 learning topics.

Return this exact structure:

{{
    "overall_score": 0,
    "technical_strengths": [],
    "weak_areas": [],
    "communication_assessment": "",
    "job_readiness": "",
    "recommended_topics": [],
    "final_verdict": ""
}}

Interview History:

{history}
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "system",
                "content": """
You are a Senior Technical Interview Panel.

Return ONLY valid JSON.

Never generate markdown.
Never generate explanations.
Never generate notes.
Never generate extra text.
"""
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.1
    )

    return response.choices[0].message.content