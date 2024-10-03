import css from "./Feedback.module.css";

const Feedback = ({ feedbacks, total, positivePercentage }) => {
  const { good, neutral, bad } = feedbacks;
  return (
    <ul className={css.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positivePercentage}% </li>
    </ul>
  );
};

export default Feedback;
