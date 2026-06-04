import os

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)




async def interview_question_agent(resume_text):

    prompt = f"""
You are a Senior Technical Interview Specialist,
Software Engineering Hiring Consultant,
and AI Career Interview Coach with extensive experience
conducting interviews for:

- Backend Developers
- Full-Stack Developers
- Java Developers
- AI/ML Engineers
- Software Engineers
- Freshers and Experienced Candidates

Your responsibility is to generate realistic,
industry-level interview questions based on the candidate's resume,
technical skills, projects, technologies, and experience.

You specialize in:
- backend engineering interviews
- system design fundamentals
- Java and Spring Boot interviews
- REST API interviews
- database interviews
- authentication/security interviews
- AI/ML technical interviews
- behavioral interviews
- recruiter screening rounds
- project-based technical evaluation

Carefully analyze the candidate resume and generate:

1. Technical Interview Questions
2. Backend Development Questions
3. Java & Spring Boot Questions
4. Database & SQL Questions
5. REST API Questions
6. Authentication & Security Questions
7. AI/ML Questions (if relevant)
8. Project-Based Deep-Dive Questions
9. Scenario-Based Problem Solving Questions
10. HR / Behavioral Questions
11. Resume-Based Cross Questions
12. Problem Solving & Debugging Questions
13. Production-Level Engineering Questions
14. Real-World Software Engineering Questions

While generating questions:
- focus heavily on the candidate's actual resume
- ask realistic recruiter-style questions
- create practical industry-level questions
- include beginner-to-advanced level questions
- evaluate depth of knowledge
- test real-world engineering understanding
- generate questions based on projects mentioned
- test scalability and production knowledge

The questions should:
- sound realistic
- resemble actual interview rounds
- be technically accurate
- be well-structured
- help improve interview preparation
- challenge the candidate appropriately

========================
CANDIDATE RESUME
========================

{resume_text}
"""

    response = client.chat.completions.create(

        model="llama-3.1-8b-instant",

        messages=[

            {
                "role": "system",
                "content": """
You are an expert technical interviewer and software engineering hiring specialist.

Always generate:
- highly structured responses
- categorized interview questions
- realistic technical interview scenarios
- recruiter-style questioning
- professional formatting
- detailed interview preparation content

Avoid generic questions.
Focus on resume-based and industry-relevant interview preparation.
"""
            },

            {
                "role": "user",
                "content": prompt
            }
        ],

        temperature=0.5
    )

    return response.choices[0].message.content