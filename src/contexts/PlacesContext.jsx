import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PlacesContext = createContext({});

export const PlacesProvider = ({ children }) => {
  const [place, setPlace] = useState(null);
  return (
    <PlacesContext.Provider value={{ place, setPlace }}>
      {children}
    </PlacesContext.Provider>
  );
};

PlacesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
