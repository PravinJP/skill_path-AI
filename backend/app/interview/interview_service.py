import os

from dotenv import load_dotenv
from groq import Groq

from app.rag.retrieval import retrieve_context
from app.interview.prompts import (
    START_INTERVIEW_PROMPT,
    EVALUATE_ANSWER_PROMPT
)

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


async def start_interview():

    context = retrieve_context(
        "candidate profile background education"
    )

    prompt = f"""
Candidate Resume Context:

{context}

This is the FIRST question of the interview.

Rules:

- Start naturally.
- Do NOT ask project questions.
- Do NOT ask advanced technical questions.
- Ask an introduction question.
- Ask ONLY one question.

Examples:

- Tell me about yourself.
- Can you introduce yourself and your background?
- What inspired you to pursue software development?

Return ONLY the question.
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

async def evaluate_answer(question, answer):

    prompt = f"""
    You are a Senior Java Backend Technical Interviewer.

    Question:
    {question}

    Candidate Answer:
    {answer}

    Evaluate the answer and return ONLY valid JSON.

    Format:

    {{
      "technical_score": 0,
      "communication_score": 0,
      "strengths": [],
      "missing_concepts": [],
      "improvement_suggestions": []
    }}

    Rules:
    - technical_score must be between 1 and 10
    - communication_score must be between 1 and 10
    - strengths should contain 2-4 points
    - missing_concepts should contain 2-4 points
    - improvement_suggestions should contain 2-4 points
    - DO NOT generate any question
    - DO NOT generate follow-up questions
    - Return ONLY JSON
    """

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.2
    )

    return response.choices[0].message.content
