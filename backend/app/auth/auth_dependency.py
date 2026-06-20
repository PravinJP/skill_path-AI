from fastapi import Depends
from fastapi import HTTPException

from fastapi.security import OAuth2PasswordBearer

from jose import jwt

from sqlalchemy.orm import Session

from app.database.db import get_db

from app.database.models import User

from app.auth.auth_utils import (
    SECRET_KEY,
    ALGORITHM
)

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="auth/login"
)



def get_current_user(
    token: str = Depends(
        oauth2_scheme
    ),
    db: Session = Depends(
        get_db
    )
):

    try:

        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        user_id = payload.get(
            "user_id"
        )

        user = (
            db.query(User)
            .filter(
                User.id == user_id
            )
            .first()
        )

        return user

    except:

        raise HTTPException(
            status_code=401,
            detail="Invalid Token"
        )