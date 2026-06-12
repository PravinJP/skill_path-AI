from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.db import get_db

from app.auth.auth_schema import (
    RegisterRequest,
    LoginRequest
)

from app.auth.auth_service import (
    register_user,
    login_user
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register")
def register(
    request: RegisterRequest,
    db: Session = Depends(get_db)
):

    user = register_user(
        db,
        request.name,
        request.email,
        request.password
    )

    return {
        "message":
        "User registered successfully"
    }


@router.post("/login")
def login(
    request: LoginRequest,
    db: Session = Depends(get_db)
):

    token = login_user(
        db,
        request.email,
        request.password
    )

    if not token:

        return {
            "message":
            "Invalid credentials"
        }

    return {
        "access_token": token,
        "token_type": "bearer"
    }