import './styles.scss';

import PropTypes from 'prop-types';

export const Pill = ({ place, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`pill__container ${selected ? 'pill__container--active' : ''}`}
    >
      {place}
    </div>
  );
};

Pill.propTypes = {
  place: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};
