import {
  useEffect,
  useState
} from "react";

import QuestionCard
from "../components/QuestionCard";

import VoiceControls
from "../components/VoiceControls";

import AnswerDisplay
from "../components/AnswerDisplay";

import EvaluationCard
from "../components/EvaluationCard";

import {
  startInterview,
  nextQuestion
} from "../services/interviewApi";

import useSpeechRecognition
from "../hooks/useSpeechRecognition";

import useSpeechSynthesis
from "../hooks/useSpeechSynthesis";

import type {
    Evaluation
} from "../types/interview";

const InterviewPage = () => {

  const [question, setQuestion] =
    useState("");

  const [evaluation, setEvaluation] =
    useState<Evaluation | null>(
      null
    );

    const [canSpeak, setCanSpeak] =
  useState(false);

  const {
  transcript,
  isListening,
  startListening,
  stopListening
} = useSpeechRecognition();

  useSpeechSynthesis(
  question,
  () => {
    setCanSpeak(true);
  }
);

  useEffect(() => {

    loadInterview();

  }, []);

  const loadInterview =
    async () => {

      const data =
        await startInterview();

      setQuestion(
        data.question
      );
  };

  const submitAnswer =
    async () => {

      const data =
        await nextQuestion(
          question,
          transcript
        );

      setEvaluation(
        data.evaluation
      );

      setCanSpeak(false);

setQuestion(
  data.next_question
);
  };

  return (

    <div>

      <QuestionCard
        question={question}
      />

      <div>

  <button
    disabled={!canSpeak}
    onClick={startListening}
  >
    🎤 Start Recording
  </button>

  <button
    onClick={stopListening}
  >
    ⏹ Stop Recording
  </button>

</div>

      <AnswerDisplay
        answer={transcript}
      />

      <button
        onClick={submitAnswer}
      >
        Submit Answer
      </button>

      <EvaluationCard
        evaluation={evaluation}
      />

    </div>

  );
};

export default InterviewPage;