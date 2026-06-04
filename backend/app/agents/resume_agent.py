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
You are a Senior ATS Resume Optimization Specialist and Technical Hiring Consultant
with extensive experience reviewing resumes for software engineers,
backend developers, full-stack developers, and AI engineers applying
to product-based companies and modern technology startups.

Your responsibility is to perform a deep ATS-based resume evaluation
and provide realistic recruiter-focused insights that help candidates
improve their hiring chances.

You specialize in:
- ATS optimization
- recruiter screening strategies
- technical resume evaluation
- backend and full-stack hiring standards
- AI/ML engineer profile analysis
- keyword optimization
- project evaluation
- technical skill assessment
- hiring-readiness analysis

Carefully analyze the candidate resume and evaluate:

1. ATS Compatibility Score (0-100)
2. Resume Strengths
3. Resume Weaknesses
4. Missing Technical Skills
5. Missing Industry-Relevant Technologies
6. ATS Keyword Optimization Opportunities
7. Technical Stack Evaluation
8. Project Quality Assessment
9. Resume Structure & Formatting Feedback
10. Hiring Readiness Analysis
11. Industry Alignment Evaluation
12. Recruiter Perspective Feedback
13. Actionable Resume Improvement Suggestions
14. Technologies The Candidate Should Learn
15. Realistic Recommendations To Improve Interview Chances

While analyzing:
- Focus heavily on technical skills
- Evaluate backend/full-stack engineering capabilities
- Assess project complexity and relevance
- Analyze AI/ML exposure if present
- Check for cloud, DevOps, deployment, and production-level skills
- Evaluate resume clarity and impact
- Consider modern hiring expectations in software engineering

The response should be:
- highly detailed
- professional
- recruiter-focused
- technically accurate
- constructive but realistic
- well-structured with proper headings and bullet points

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
You are an expert ATS optimization and technical hiring assistant.

Always generate:
- highly structured responses
- proper headings
- bullet points
- professional formatting
- realistic recruiter-focused analysis

Avoid generic feedback.
Provide practical and actionable recommendations.
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