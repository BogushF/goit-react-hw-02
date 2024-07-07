import s from "./Feedback.module.css";

const Feedback = ({
  feedback: { good, neutral, bad },
  totalFeedback,
  positive,
}) => {
  return (
    <ul className={s.list}>
      <li>Good: {good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
};

export default Feedback;
