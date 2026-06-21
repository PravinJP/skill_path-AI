import { useState } from "react";
import { askResumeQuestion } from "../../services/resumeChatService";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ResumeChat = () => {
  const [question, setQuestion] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState<Message[]>([
      {
        role: "assistant",
        content:
          "Hi 👋 I'm your Resume Assistant. Ask me anything about your resume."
      }
    ]);

  const handleSend = async () => {

    if (!question.trim()) return;

    const userMessage = {
      role: "user" as const,
      content: question
    };

    setMessages((prev) => [
      ...prev,
      userMessage
    ]);

    const currentQuestion =
      question;

    setQuestion("");

    try {

      setLoading(true);

      const response =
        await askResumeQuestion(
          currentQuestion
        );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            response.answer
        }
      ]);

    } catch (error) {

      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong while generating the response."
        }
      ]);

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen bg-[#020B23] text-white flex flex-col">

      {/* Header */}

      <div className="border-b border-white/10 p-6">

        <h1 className="text-3xl font-bold">
          Resume Chat
        </h1>

        <p className="text-gray-400 mt-2">
          Ask anything about your uploaded resume
        </p>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {messages.map(
          (message, index) => (

            <div
              key={index}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`
                  max-w-3xl
                  px-5
                  py-4
                  rounded-2xl
                  ${
                    message.role === "user"
                      ? "bg-purple-600"
                      : "bg-[#111C44]"
                  }
                `}
              >

                <p className="whitespace-pre-wrap">
                  {message.content}
                </p>

              </div>

            </div>

          )
        )}

        {loading && (

          <div className="flex justify-start">

            <div
              className="
              bg-[#111C44]
              px-5
              py-4
              rounded-2xl
              "
            >
              Thinking...
            </div>

          </div>

        )}

      </div>

      {/* Suggested Questions */}

      <div className="px-6 pb-4">

        <div className="flex flex-wrap gap-3">

          {[
            "What are my strongest skills?",
            "Which project is my best project?",
            "What roles suit me?",
            "What are my weak areas?"
          ].map((item) => (

            <button
              key={item}
              onClick={() =>
                setQuestion(item)
              }
              className="
              bg-white/5
              border
              border-white/10
              px-4
              py-2
              rounded-full
              text-sm
              hover:bg-white/10
              "
            >
              {item}
            </button>

          ))}

        </div>

      </div>

      {/* Input */}

      <div
        className="
        border-t
        border-white/10
        p-6
        "
      >

        <div className="flex gap-4">

          <input
            value={question}
            onChange={(e) =>
              setQuestion(
                e.target.value
              )
            }
            placeholder="Ask about your resume..."
            className="
            flex-1
            bg-[#111C44]
            border
            border-white/10
            rounded-xl
            px-4
            py-4
            outline-none
            "
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="
            bg-purple-600
            px-8
            rounded-xl
            hover:bg-purple-700
            "
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
};

export default ResumeChat;