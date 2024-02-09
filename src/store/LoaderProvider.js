// LoaderContext.js
import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

LoaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
