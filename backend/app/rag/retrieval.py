from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma


embedding_model = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)


def retrieve_context(
    query,
    user_id
):

    vector_store = Chroma(
        persist_directory="chroma_db",
        embedding_function=embedding_model
    )

    docs = vector_store.similarity_search(

        query,

        k=5,

        filter={
            "user_id": str(user_id)
        }

    )

    print("\n========== RETRIEVED DOCS ==========\n")

    for i, doc in enumerate(docs):

        print(f"\nDOC {i+1}")
        print("-" * 50)
        print(doc.page_content)

    print("\n====================================\n")

    context = "\n\n".join(
        [doc.page_content for doc in docs]
    )

    return context