from app.interview.interview_routes import (
    router as interview_router
)
from fastapi import FastAPI
from app.routes.resume_routes import router as resume_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(resume_router)

app.include_router(interview_router)

@app.get("/")
def home():
    return {"message": "SkillPath AI Backend Running"}