import os

from dotenv import load_dotenv
from groq import Groq

from app.rag.retrieval import retrieve_context

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


async def ask_resume(question):

    # Retrieve relevant resume chunks
    context = retrieve_context(question)

    # Debugging: See what ChromaDB retrieved
    print("\n====================")
    print("RETRIEVED CONTEXT")
    print("====================")
    print(context)
    print("====================\n")

    prompt = f"""
    You are SkillPath AI, an advanced RAG-powered Career Intelligence Assistant.

    Your task is to answer the user's question using ONLY the retrieved resume context.

    =====================================================
    RULES
    =====================================================

    1. Use ONLY the information available in the retrieved resume context.

    2. Do NOT invent:
       - Skills
       - Projects
       - Experience
       - Certifications
       - Technologies
       - Education
       - Achievements

    3. If the answer is not available in the context, respond with:

       "I could not find sufficient information in the resume to answer this question."

    4. Keep responses professional and recruiter-friendly.

    5. When applicable include:
       - Relevant Skills
       - Relevant Projects
       - Relevant Experience
       - Strengths
       - Areas for Improvement
       - Career Recommendations

    6. Use bullet points where appropriate.

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

    If relevant include:

    - Summary
    - Relevant Skills
    - Relevant Projects
    - Experience Insights
    - Recommendations

    Provide a clear, accurate, and helpful response.
    """

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "system",
                "content": """
                You are SkillPath AI,
                a RAG-powered Career Intelligence Assistant.

                Always answer using the retrieved context.

                Never hallucinate information.

                Be professional, concise, and recruiter-friendly.
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