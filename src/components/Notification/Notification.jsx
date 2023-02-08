import PropTypes from 'prop-types';
import css from './notification.module.scss';

const Notification = ({ message }) => {
  return (
    <div className={css.messageBox}>
      <h2 className={css.message}>{message}</h2>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
