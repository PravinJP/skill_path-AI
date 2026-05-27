import os

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)





async def interview_question_agent(resume_text):

    prompt = f"""
    You are a Senior Technical Interview Specialist.

    Generate:

    - technical interview questions
    - HR interview questions
    - project-based questions
    - backend development questions
    - AI/ML questions if relevant

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

        temperature=0.5
    )

    return response.choices[0].message.content

