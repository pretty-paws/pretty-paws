import { Navigate } from 'react-router-dom';
import { useStore } from '../store/AuthProvider';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const store = useStore();
  const {
    auth: { authorised },
  } = store;
  const shouldRedirect = !authorised;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.elementType.isRequired,
};
