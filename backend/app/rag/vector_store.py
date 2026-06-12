from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma

embedding_model = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)


def store_chunks(
    chunks,
    user_id
):

    vector_store = Chroma(
        persist_directory="chroma_db",
        embedding_function=embedding_model
    )

    vector_store.add_texts(

        texts=chunks,

        metadatas=[
            {
                "user_id": str(user_id)
            }
            for _ in chunks
        ]

    )

    return vector_store