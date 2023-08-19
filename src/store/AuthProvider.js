import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthStore } from './AuthStore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const authStore = new AuthStore();

  return (
    <AuthContext.Provider value={authStore}>{children}</AuthContext.Provider>
  );
};

export const useAuthStore = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
