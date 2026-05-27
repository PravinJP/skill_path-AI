import os

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)





async def analyze_job_match(resume_text, job_description):

    prompt = f"""
    You are an AI Job Match Specialist.

    Compare the candidate resume with the provided job description.

    Analyze:

    1. Job Match Percentage
    2. Matching Skills
    3. Missing Skills
    4. Technical Compatibility
    5. Hiring Readiness
    6. Candidate Strengths
    7. Weak Areas
    8. Improvement Suggestions

    Resume:
    {resume_text}

    Job Description:
    {job_description}
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