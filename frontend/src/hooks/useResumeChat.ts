import { useState } from "react";

import {
  askResumeQuestion
} from "../services/resumeChatService";

export const useResumeChat = () => {

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState<any[]>([]);

  const sendQuestion = async (
    question: string
  ) => {

    try {

      setLoading(true);

      const response =
        await askResumeQuestion(
          question
        );

      setMessages(prev => [
        ...prev,
        {
          role: "user",
          content: question
        },
        {
          role: "assistant",
          content: response.answer
        }
      ]);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  return {
    loading,
    messages,
    sendQuestion
  };
};