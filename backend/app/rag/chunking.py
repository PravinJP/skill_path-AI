from langchain_text_splitters import RecursiveCharacterTextSplitter


def create_chunks(text):

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=100
    )

    chunks = splitter.split_text(text)

    print("\n========== CHUNKS ==========\n")

    for i, chunk in enumerate(chunks):
        print(f"\nCHUNK {i+1}\n")
        print(chunk)
        print("-" * 50)

    return chunks