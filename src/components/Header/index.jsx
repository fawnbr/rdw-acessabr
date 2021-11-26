import { useContext } from 'react';
import PropTypes from 'prop-types';

import { LocationContext } from '../../contexts/LocationContext';

import logoSvg from '../../assets/images/logo.svg';
import logoEbac from '../../assets/images/logoEbac.svg';
import './styles.scss';

export const Header = () => {
  const { city, state } = useContext(LocationContext);
  return (
    <header className="header__container">
      <div className="header__logo header__logo--state">
        <img src={logoSvg} alt="Logo AcessaBR" />
        <span className="header__logo__city">
          {' '}
          / {city} - {state}
        </span>
      </div>
      <div className="header__logo header__logo--ebac">
        <span className="header__logo__support">apoio: </span>
        <img src={logoEbac} alt="Logo EBAC" />
      </div>
    </header>
  );
};

Header.propTypes = {
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};
