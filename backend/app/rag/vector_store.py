import shutil
import os

from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma

embedding_model = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)


def store_chunks(chunks):

    if os.path.exists("chroma_db"):
        shutil.rmtree("chroma_db")

    vector_store = Chroma.from_texts(
        texts=chunks,
        embedding=embedding_model,
        persist_directory="chroma_db"
    )

    return vector_store