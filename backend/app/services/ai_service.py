from app.agents.resume_agent import (
    resume_analysis_agent
)

from app.agents.job_matcher_agent import (
    analyze_job_match
)


async def analyze_resume_with_ai(
    resume_text
):

    analysis = await resume_analysis_agent(
        resume_text
    )

    return analysis