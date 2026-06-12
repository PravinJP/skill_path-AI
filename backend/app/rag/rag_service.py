import os

from dotenv import load_dotenv
from groq import Groq

from app.rag.retrieval import (
    retrieve_context
)

load_dotenv()

client = Groq(
    api_key=os.getenv(
        "GROQ_API_KEY"
    )
)


async def ask_resume(
    question,
    user_id
):

    context = retrieve_context(
        question,
        user_id
    )

    print("\n====================")
    print("RETRIEVED CONTEXT")
    print("====================")
    print(context)
    print("====================\n")

    prompt = f"""
You are SkillPath AI,
a RAG-powered Career Intelligence Assistant.

Your task is to answer the user's question
using ONLY the retrieved resume context.

=====================================================
RULES
=====================================================

1. Use ONLY information present in the retrieved context.

2. Never invent:
   - Skills
   - Projects
   - Experience
   - Certifications
   - Technologies
   - Education
   - Achievements

3. If the answer is not available in the context,
respond exactly:

"I could not find sufficient information in the resume to answer this question."

4. Keep responses professional and recruiter-friendly.

5. Use bullet points when appropriate.

=====================================================
RETRIEVED RESUME CONTEXT
=====================================================

{context}

=====================================================
USER QUESTION
=====================================================

{question}

=====================================================
RESPONSE FORMAT
=====================================================

When relevant include:

- Summary
- Relevant Skills
- Relevant Projects
- Experience Insights
- Recommendations
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "system",
                "content": """
You are SkillPath AI.

You answer ONLY from retrieved resume context.

Never hallucinate.

Never assume information not found
in the retrieved context.

Be professional and concise.
"""
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.2
    )

    return response.choices[0].message.content