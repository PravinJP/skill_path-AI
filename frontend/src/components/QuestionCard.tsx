interface Props {
  question: string;
}

const QuestionCard = ({
  question,
}: Props) => {

  return (
    <div>

      <h2>
        AI Interviewer
      </h2>

      <p>
        {question}
      </p>

    </div>
  );
};

export default QuestionCard;