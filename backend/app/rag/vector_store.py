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

    # Delete previous resume chunks
    existing = vector_store.get(
        where={
            "user_id": str(user_id)
        }
    )

    if existing and existing["ids"]:

        vector_store.delete(
            ids=existing["ids"]
        )

    # Store fresh chunks
    vector_store.add_texts(

        texts=chunks,

        metadatas=[
            {
                "user_id": str(user_id)
            }
            for _ in chunks
        ]

    )

    vector_store.persist()

    print(
        f"\nStored {len(chunks)} chunks for user {user_id}\n"
    )

    return vector_store