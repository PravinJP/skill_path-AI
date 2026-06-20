from sqlalchemy import (
    Column,
    Integer,
    Text,
    JSON,
    ForeignKey,
    String
)
from sqlalchemy.orm import relationship


from app.database.db import Base


class User(Base):

    __tablename__ = "users"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String,
        nullable=False
    )

    email = Column(
        String,
        unique=True,
        nullable=False
    )

    password = Column(
        String,
        nullable=False
    )



class Resume(Base):

    __tablename__ = "resumes"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    file_name = Column(
        String
    )

    file_path = Column(
        String
    )

    resume_text = Column(
        Text
    )

    analysis = Column(
        JSON,
        nullable=True
    )

    user = relationship(
        "User"
    )