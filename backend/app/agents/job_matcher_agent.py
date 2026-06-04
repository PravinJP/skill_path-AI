import os

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)





async def analyze_job_match(resume_text, job_description):

    prompt = f"""
You are a Senior AI Recruitment and Technical Hiring Specialist
with extensive experience evaluating software engineers,
backend developers, full-stack developers, and AI engineers
for product-based companies and modern tech startups.

Your responsibility is to perform a detailed resume-to-job
compatibility analysis and provide realistic hiring insights
similar to how an experienced technical recruiter or hiring manager
would evaluate a candidate.

Carefully compare the candidate resume with the provided
job description and evaluate:

1. Overall Job Match Percentage (0-100)
2. Matching Technical Skills
3. Missing Skills and Technologies
4. ATS Keyword Alignment
5. Technical Compatibility Analysis
6. Experience Relevance
7. Candidate Strengths
8. Weak Areas Affecting Selection Chances
9. Hiring Readiness Evaluation
10. Realistic Hiring Probability
11. Resume Improvement Suggestions
12. Technologies or Skills To Learn
13. Project Recommendations To Improve Profile
14. Industry-Level Feedback From Recruiter Perspective

While analyzing:
- Focus heavily on technical stack alignment
- Evaluate backend/full-stack engineering skills carefully
- Check whether the candidate fits modern hiring expectations
- Consider scalability, deployment, APIs, databases, AI exposure,
  cloud technologies, DevOps practices, and production-readiness
- Provide constructive but realistic feedback
- Be detailed and structured

The final response should be:
- professional
- recruiter-focused
- highly actionable
- technically accurate
- realistic for actual hiring scenarios



{resume_text}



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