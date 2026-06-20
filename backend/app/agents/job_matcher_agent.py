import os
import json

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


async def analyze_job_match(
    resume_text,
    job_description
):

    prompt = f"""
You are SkillPath AI.

You are a Senior Technical Recruiter and Hiring Manager.

Analyze the candidate's resume against the job description.

Return ONLY valid JSON.

==================================================
CANDIDATE RESUME
==================================================

{resume_text}

==================================================
JOB DESCRIPTION
==================================================

{job_description}

==================================================
JSON FORMAT
==================================================

{{
    "job_match_score": 0,
    "hiring_probability": 0,
    "ats_alignment_score": 0,
    "job_readiness": "",
    "matching_skills": [],
    "missing_skills": [],
    "candidate_strengths": [],
    "improvement_areas": [],
    "recommended_skills": [],
    "project_recommendations": [],
    "recruiter_verdict": ""
}}

==================================================
RULES
==================================================

job_match_score:
- Integer between 0 and 100

hiring_probability:
- Integer between 0 and 100

ats_alignment_score:
- Integer between 0 and 100

job_readiness:
Choose ONLY one:
- Not Ready
- Partially Ready
- Interview Ready
- Strong Match

matching_skills:
Maximum 10 items

missing_skills:
Maximum 10 items

candidate_strengths:
Maximum 5 items

improvement_areas:
Maximum 5 items

recommended_skills:
Maximum 5 items

project_recommendations:
Maximum 5 items

recruiter_verdict:
Maximum 2 sentences

==================================================
IMPORTANT
==================================================

Return ONLY JSON.

Do NOT use markdown.

Do NOT use headings.

Do NOT use explanations.

Do NOT generate reports.

The first character must be {{

The last character must be }}

Generate JSON now.
"""

    response = client.chat.completions.create(

        model="llama-3.1-8b-instant",

        messages=[
            {
                "role": "system",
                "content": """
Return ONLY raw JSON.

Never use markdown.

Never return explanations.

Never return text outside JSON.
"""
            },
            {
                "role": "user",
                "content": prompt
            }
        ],

        temperature=0.2
    )

    result = response.choices[0].message.content.strip()

    result = result.replace(
        "```json",
        ""
    )

    result = result.replace(
        "```",
        ""
    )

    result = result.strip()

    print("\n========== JOB MATCH RESPONSE ==========\n")
    print(result)
    print("\n========================================\n")

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