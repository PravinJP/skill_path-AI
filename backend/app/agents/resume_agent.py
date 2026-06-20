import os
import json

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


async def resume_analysis_agent(
    resume_text
):

    prompt = f"""
You are SkillPath AI.

You are acting as:

1. Senior Technical Recruiter
2. Engineering Hiring Manager
3. Senior Software Architect
4. Career Growth Mentor

Analyze the candidate resume.

Return ONLY valid JSON.

==================================================
RESUME
==================================================

{resume_text}

==================================================
RESPONSE FORMAT
==================================================

{{
    "resume_score": 0,
    "job_readiness": "",
    "career_level": "",
    "market_competitiveness": "",
    "career_summary": "",
    "top_strengths": [],
    "growth_areas": [],
    "recommended_skills": [],
    "best_fit_roles": [],
    "skill_scores": {{}},
    "project_evaluation": [],
    "interview_focus_areas": [],
    "next_actions": [],
    "recruiter_verdict": ""
}}

==================================================
RULES
==================================================

resume_score:
- Integer between 0 and 100
- Never return values between 1 and 10

job_readiness:
Choose ONLY one:
- Beginner
- Entry Level Ready
- Interview Ready
- Industry Ready
- Advanced Candidate

career_level:
Choose ONLY one:
- Student
- Fresher
- Junior Developer
- Mid-Level Developer
- Senior Developer

market_competitiveness:
Choose ONLY one:
- Low
- Moderate
- High
- Very High

career_summary:
- Maximum 2 sentences

top_strengths:
- Maximum 5 items

growth_areas:
- Maximum 5 items

recommended_skills:
- Maximum 5 items

best_fit_roles:
- Maximum 5 items

skill_scores:
Return scores between 0 and 100

Example:

{{
    "Java": 90,
    "Spring Boot": 85,
    "React": 80,
    "PostgreSQL": 82
}}

project_evaluation:

Format:

[
    {{
        "project_name": "",
        "score": 85,
        "feedback": ""
    }}
]

Maximum 3 projects.

interview_focus_areas:
Maximum 5 items.

next_actions:
Maximum 5 items.

recruiter_verdict:
Maximum 2 sentences.

==================================================
IMPORTANT
==================================================

- Return ONLY raw JSON
- Do NOT use markdown
- Do NOT wrap JSON in ```json
- Do NOT return explanations
- Do NOT return headings
- Do NOT return text before JSON
- Do NOT return text after JSON

The first character of the response MUST be {{
The last character of the response MUST be }}

Generate JSON now.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": """
You are SkillPath AI.

Return ONLY raw JSON.

Never use markdown.
Never use explanations.
Never return any text outside JSON.

The response must work directly with json.loads().
"""
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.1
    )

    result = response.choices[0].message.content.strip()

    # Cleanup if model still returns markdown
    result = result.replace(
        "```json",
        ""
    )

    result = result.replace(
        "```",
        ""
    )

    result = result.strip()

    print("\n========== AI RESPONSE ==========\n")
    print(result)
    print("\n=================================\n")

    try:

        parsed_json = json.loads(
            result
        )

        return parsed_json

    except Exception as e:

        print("\nJSON ERROR:\n")
        print(e)

        print("\nRAW RESPONSE:\n")
        print(result)

        raise Exception(
            f"Invalid JSON returned: {e}"
        )