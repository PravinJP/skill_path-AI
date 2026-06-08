export interface Evaluation {
  technical_score: number;
  communication_score: number;
  strengths: string[];
  missing_concepts: string[];
  improvement_suggestions: string[];
}

export interface NextQuestionResponse {
  stage: string;
  evaluation: Evaluation;
  next_question: string;
}

export interface StartInterviewResponse {
  question: string;
}