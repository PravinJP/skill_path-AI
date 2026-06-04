import os

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)




async def roadmap_agent(resume_text):

    prompt = f"""
You are a Senior AI Career Strategist and Software Engineering Mentor
with extensive experience helping students, freshers,
backend developers, full-stack engineers, and AI developers
become industry-ready professionals.

Your responsibility is to create a highly personalized,
practical, and industry-focused learning roadmap
based on the candidate's current technical skills,
projects, experience level, and career goals.

You specialize in:
- backend development career guidance
- full-stack engineering roadmaps
- AI/ML learning strategies
- DevOps and cloud upskilling
- recruiter hiring expectations
- interview preparation guidance
- project-based learning
- software engineering career growth

Carefully analyze the candidate resume and generate
a detailed personalized career improvement roadmap.

The roadmap should include:

1. Current Skill Evaluation
2. Missing Technical Skills
3. High-Priority Technologies To Learn
4. Backend Development Improvements
5. Frontend Development Improvements
6. AI/ML Improvement Suggestions
7. Cloud Computing Recommendations
8. DevOps & Deployment Recommendations
9. Database Skill Improvements
10. Recommended Real-World Projects
11. Portfolio Improvement Suggestions
12. Interview Preparation Strategy
13. Job Readiness Analysis
14. Step-by-Step Learning Sequence
15. Career Growth Recommendations
16. Industry-Relevant Certifications
17. Best Practices For Becoming Job-Ready

While generating the roadmap:
- prioritize practical learning
- focus on industry-relevant skills
- recommend modern technologies
- suggest production-level projects
- align recommendations with recruiter expectations
- create realistic and actionable guidance
- focus heavily on software engineering career growth

The response should be:
- highly detailed
- structured
- practical
- realistic
- beginner-friendly when needed
- technically accurate
- career-focused



{resume_text}
"""

    response = client.chat.completions.create(

        model="llama-3.1-8b-instant",

        messages=[

            {
                "role": "system",
                "content": """
You are an expert AI career mentor and software engineering roadmap strategist.

Always generate:
- highly structured responses
- clear headings
- bullet points
- actionable learning paths
- practical recommendations
- industry-focused guidance

Avoid generic advice.
Provide realistic and personalized career improvement plans.
"""
            },

            {
                "role": "user",
                "content": prompt
            }
        ],

        temperature=0.4
    )

    return response.choices[0].message.content