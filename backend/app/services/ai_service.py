from app.agents.resume_agent import resume_analysis_agent
from app.agents.interview_agent import interview_question_agent
from app.agents.roadmap_agent import roadmap_agent
from app.agents.job_matcher_agent import analyze_job_match


async def analyze_resume_with_ai(resume_text):

    resume_analysis = await resume_analysis_agent(resume_text)

    interview_questions = await interview_question_agent(resume_text)

    roadmap = await roadmap_agent(resume_text)

    return {
        "resume_analysis": resume_analysis,
        "interview_questions": interview_questions,
        "learning_roadmap": roadmap
    }