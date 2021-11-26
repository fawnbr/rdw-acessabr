import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LocationContext = createContext({});

export const LocationProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  return (
    <LocationContext.Provider value={{ city, setCity, state, setState }}>
      {children}
    </LocationContext.Provider>
  );
};

LocationProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
