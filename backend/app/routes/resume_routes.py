from fastapi import APIRouter, UploadFile, File, Form
import os
import shutil

from app.services.pdf_service import extract_text_from_pdf
from app.services.ai_service import (
    analyze_resume_with_ai,
    analyze_job_match
)

from app.rag.chunking import create_chunks
from app.rag.vector_store import store_chunks

router = APIRouter()

UPLOAD_FOLDER = "uploads"


@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text from PDF
    extracted_text = extract_text_from_pdf(file_path)


    chunks = create_chunks(extracted_text)

    store_chunks(chunks)

    

    ai_analysis = await analyze_resume_with_ai(
        extracted_text
    )

    return {
        "message": "Resume analyzed successfully",
        "filename": file.filename,
        "analysis": ai_analysis
    }


@router.post("/job-match")
async def job_match(
    resume_text: str = Form(...),
    job_description: str = Form(...)
):

    result = await analyze_job_match(
        resume_text,
        job_description
    )

    return {
        "job_match_analysis": result
    }