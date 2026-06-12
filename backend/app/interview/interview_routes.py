from fastapi import APIRouter, Form
import json
from fastapi import APIRouter, Form, Depends

from app.interview.report_service import (
    generate_interview_report
    )
from app.interview.interview_service import (
    start_interview,
    evaluate_answer
)

from app.interview.interview_memory import (
    interview_session
)

from app.interview.next_question_service import (
    generate_next_question
)

from app.dependencies.auth_dependency import (
    get_current_user
)

from app.database.models import User

router = APIRouter()


@router.post("/interview/start")
async def start_interview_route(

    current_user: User = Depends(
        get_current_user
    )

):

    question = await start_interview(
        current_user.id
    )

    return {
        "question": question
    }


@router.post("/interview/respond")
async def evaluate_answer_route(
    question: str = Form(...),
    answer: str = Form(...)
):

    result = await evaluate_answer(
        question,
        answer
    )

    try:
        result_json = json.loads(result)

        return result_json

    except Exception:

        return {
            "raw_response": result
        }

@router.post("/interview/report")
async def interview_report_route(
    history: str = Form(...)
):

    result = await generate_interview_report(
        history
    )

    try:

        return json.loads(result)

    except Exception:

        return {
            "raw_response": result
        }


@router.post("/interview/next")
async def next_question_route(

    question: str = Form(...),

    answer: str = Form(...),

    current_user: User = Depends(
        get_current_user
    )

):

    evaluation_raw = await evaluate_answer(
        question,
        answer
    )

    evaluation = json.loads(
        evaluation_raw
    )

    interview_session["history"].append(
        {
            "question": question,
            "answer": answer,
            "evaluation": evaluation
        }
    )

    interview_session["question_count"] += 1

    stage = get_stage(
        interview_session["question_count"]
    )

    interview_session["stage"] = stage

    print(f"\nCurrent Stage: {stage}\n")

    next_question = await generate_next_question(
        question,
        answer,
        evaluation,
        stage,
        current_user.id
    )

    return {
        "stage": stage,
        "evaluation": evaluation,
        "next_question": next_question
    }
@router.get("/interview/history")
async def interview_history():

    return interview_session

@router.post("/interview/reset")
async def reset_interview():

    interview_session["history"] = []

    interview_session["question_count"] = 0

    interview_session["stage"] = "intro"

    return {
        "message": "Interview session reset successfully"
    }

    interview_session["history"] = []

    return {
        "message": "Interview session reset successfully"
    }

def get_stage(question_count):

    if question_count <= 2:
        return "intro"

    elif question_count <= 5:
        return "fundamentals"

    elif question_count <= 8:
        return "resume"

    elif question_count <= 12:
        return "project"

    else:
        return "advanced"