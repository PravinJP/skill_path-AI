import axios from "axios";

const API = "http://localhost:8000";

export const startInterview = async () => {

    const response = await axios.post(
        `${API}/interview/start`
    );

    return response.data;
};

export const nextQuestion = async (
    question: string,
    answer: string
) => {

    const formData = new FormData();

    formData.append(
        "question",
        question
    );

    formData.append(
        "answer",
        answer
    );

    const response = await axios.post(
        `${API}/interview/next`,
        formData
    );

    return response.data;
};