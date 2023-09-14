import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { RootStore } from '.';

const Context = createContext();

export const AuthProvider = ({ children }) => {
  const store = new RootStore();

  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export const useStore = () => {
  return useContext(Context);
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
