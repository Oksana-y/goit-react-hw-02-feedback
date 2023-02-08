import css from '../FeedbackForm/feedback-form.module.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.wrapper}>
      {options.map(name => (
        <button
          key={name}
          type="button"
          className={css.vote}
          name={name}
          onClick={onLeaveFeedback}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
