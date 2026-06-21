import api from "./api";

export const askResumeQuestion = async (
  question: string
) => {

  const formData = new FormData();

  formData.append(
    "question",
    question
  );

  const response = await api.post(
    "/ask-resume",
    formData
  );

  return response.data;
};