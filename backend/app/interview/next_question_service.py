import os

from dotenv import load_dotenv
from groq import Groq

from app.rag.retrieval import retrieve_context

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


async def generate_next_question(
    previous_question,
    candidate_answer,
    evaluation,
    stage,
    user_id
):

    resume_context = retrieve_context(
    previous_question + " " + candidate_answer,
    user_id
)

    prompt = f"""
You are an experienced technical interviewer.

Candidate Resume Context:
{resume_context}

Current Interview Stage:
{stage}

Previous Question:
{previous_question}

Candidate Answer:
{candidate_answer}

Evaluation:
{evaluation}

Rules:

INTRO STAGE:
- Ask about background
- Ask about education
- Ask about interests
- Ask about career goals

FUNDAMENTALS STAGE:
- Ask fundamentals based on resume skills
- Do not assume technologies

RESUME STAGE:
- Ask about skills and experience

PROJECT STAGE:
- Ask about projects
- Architecture
- APIs
- Security
- Database
- Challenges

ADVANCED STAGE:
- Scalability
- Optimization
- System design
- Production deployment

General Rules:

- Ask only ONE question
- Never repeat questions
- Increase difficulty gradually
- Use weak areas from evaluation
- Use resume context heavily
- Return ONLY the question
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