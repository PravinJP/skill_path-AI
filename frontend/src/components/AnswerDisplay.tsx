interface Props {
  answer: string;
}

const AnswerDisplay = ({
  answer,
}: Props) => {

  return (
    <div>

      <h3>
        Your Answer
      </h3>

      <p>
        {answer}
      </p>

    </div>
  );
};

export default AnswerDisplay;