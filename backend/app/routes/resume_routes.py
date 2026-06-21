from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Form,
    Depends
)

from sqlalchemy.orm import Session

import os
import shutil

from app.database.db import get_db

from app.database.models import (
    Resume,
    User
)

from app.dependencies.auth_dependency import (
    get_current_user
)

from app.services.pdf_service import (
    extract_text_from_pdf
)

from app.services.ai_service import (
    analyze_resume_with_ai,
    analyze_job_match
)

from app.rag.chunking import (
    create_chunks
)

from app.rag.vector_store import (
    store_chunks
)

from app.rag.rag_service import (
    ask_resume
)

router = APIRouter()

UPLOAD_FOLDER = "uploads"

os.makedirs(
    UPLOAD_FOLDER,
    exist_ok=True
)


@router.post("/upload-resume")
async def upload_resume(

    file: UploadFile = File(...),

    current_user: User = Depends(
        get_current_user
    ),

    db: Session = Depends(
        get_db
    )

):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(
        file_path,
        "wb"
    ) as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )

    extracted_text = extract_text_from_pdf(
        file_path
    )

    chunks = create_chunks(
        extracted_text
    )

    store_chunks(
        chunks,
        current_user.id
    )

    ai_analysis = await analyze_resume_with_ai(
        extracted_text
    )

    print("\n========== AI ANALYSIS ==========")
    print(ai_analysis)
    print(type(ai_analysis))
    print("=================================\n")

    resume = Resume(

        user_id=current_user.id,

        file_name=file.filename,

        file_path=file_path,

        resume_text=extracted_text,

        analysis=ai_analysis

    )

    db.add(resume)

    db.commit()

    db.refresh(resume)

    return {

        "message":
        "Resume uploaded successfully",

        "resume_id":
        resume.id,

        "filename":
        file.filename,

        "analysis":
        ai_analysis

    }


@router.post("/job-match")
async def job_match(

    resume_text: str = Form(...),

    job_description: str = Form(...),

    current_user: User = Depends(
        get_current_user
    )

):

    result = await analyze_job_match(

        resume_text,

        job_description

    )

    return {

        "job_match_analysis":
        result

    }


@router.post("/ask-resume")
async def ask_resume_route(

    question: str = Form(...),

    current_user: User = Depends(
        get_current_user
    )

):

    answer = await ask_resume(

        question,

        current_user.id

    )

    return {

        "question":
        question,

        "answer":
        answer

    }


@router.get("/resume/me")
async def get_my_resume(

    current_user: User = Depends(
        get_current_user
    ),

    db: Session = Depends(
        get_db
    )

):

    resume = (

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

    if not resume:

        return {
            "message":
            "No resume uploaded"
        }

    return {

        "resume_id":
        resume.id,

        "file_name":
        resume.file_name,

        "resume_text":
        resume.resume_text,

        "analysis":
        resume.analysis

    }