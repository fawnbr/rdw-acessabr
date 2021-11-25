import PropTypes from 'prop-types';
import './styles.scss';

export const Button = ({ children, onClick, width }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{ width: width + 'rem' }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};
