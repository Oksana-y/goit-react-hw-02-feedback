import css from '../FeedbackForm/feedback-form.module.scss';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.result}>Good: {good} </p>
      <p className={css.result}>Neutral: {neutral} </p>
      <p className={css.result}>Bad: {bad} </p>
      <p className={css.result}>Total: {total} </p>
      <p className={css.result}>Positive feedback: {positivePercentage}% </p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
