import os

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


# =========================================
# Resume Analyzer Agent
# =========================================

async def resume_analysis_agent(resume_text):

    prompt = f"""
    You are a Senior ATS Resume Optimization Specialist.

    Analyze the resume and provide:

    1. ATS Score
    2. Resume Strengths
    3. Resume Weaknesses
    4. Missing Technical Skills
    5. Keyword Optimization Suggestions
    6. Resume Improvement Recommendations

    Resume:
    {resume_text}
    """

    response = client.chat.completions.create(

        model="llama-3.1-8b-instant",

        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],

        temperature=0.4
    )

    return response.choices[0].message.content


