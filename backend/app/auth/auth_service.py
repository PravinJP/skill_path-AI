from sqlalchemy.orm import Session

from app.database.models import User

from app.auth.auth_utils import (
    hash_password,
    verify_password,
    create_access_token
)


def register_user(
    db: Session,
    name,
    email,
    password
):

    existing_user = (
        db.query(User)
        .filter(
            User.email == email
        )
        .first()
    )

    if existing_user:

        raise Exception(
            "Email already exists"
        )

    user = User(
        name=name,
        email=email,
        password=hash_password(
            password
        )
    )

    db.add(user)

    db.commit()

    db.refresh(user)

    return user


def login_user(
    db: Session,
    email,
    password
):

    user = (
        db.query(User)
        .filter(
            User.email == email
        )
        .first()
    )

    if not user:

        return None

    if not verify_password(
        password,
        user.password
    ):

        return None

    token = create_access_token(
        {
            "user_id": user.id
        }
    )

    return token