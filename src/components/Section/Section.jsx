import PropTypes from 'prop-types';
import css from './section.module.scss'

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
