import type {
    Evaluation
} from "../types/interview";

interface Props {
  evaluation: Evaluation | null;
}

const EvaluationCard = ({
  evaluation,
}: Props) => {

  if (!evaluation)
    return null;

  return (
    <div>

      <h3>
        Evaluation
      </h3>

      <p>
        Technical:
        {evaluation.technical_score}
      </p>

      <p>
        Communication:
        {evaluation.communication_score}
      </p>

    </div>
  );
};

export default EvaluationCard;