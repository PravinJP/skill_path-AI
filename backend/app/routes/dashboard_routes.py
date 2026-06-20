from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.db import get_db

from app.database.models import (
    Resume,
    User
)

from app.dependencies.auth_dependency import (
    get_current_user
)

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
async def get_dashboard(

    current_user: User = Depends(
        get_current_user
    ),

    db: Session = Depends(
        get_db
    )

):

    latest_resume = (

        db.query(Resume)

        .filter(
            Resume.user_id ==
            current_user.id
        )

        .order_by(
            Resume.id.desc()
        )

        .first()

    )

    if not latest_resume:

        return {
            "message":
            "No resume uploaded"
        }

    analysis = latest_resume.analysis

    return {

        "resume_score":
        analysis.get(
            "resume_score"
        ),

        "job_readiness":
        analysis.get(
            "job_readiness"
        ),

        "career_level":
        analysis.get(
            "career_level"
        ),

        "market_competitiveness":
        analysis.get(
            "market_competitiveness"
        ),

        "career_summary":
        analysis.get(
            "career_summary"
        ),

        "top_strengths":
        analysis.get(
            "top_strengths"
        ),

        "growth_areas":
        analysis.get(
            "growth_areas"
        ),

        "recommended_skills":
        analysis.get(
            "recommended_skills"
        ),

        "recruiter_verdict":
        analysis.get(
            "recruiter_verdict"
        )
    }