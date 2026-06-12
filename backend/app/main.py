from app.interview.interview_routes import (
    router as interview_router
)
from fastapi import FastAPI
from app.routes.resume_routes import router as resume_router
from fastapi.middleware.cors import CORSMiddleware

from app.auth.auth_routes import (
    router as auth_router
)

from app.database.db import Base
from app.database.db import engine

Base.metadata.create_all(
    bind=engine
)

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

app.include_router(
    auth_router
)

@app.get("/")
def home():
    return {"message": "SkillPath AI Backend Running"}