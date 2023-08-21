import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/AuthProvider';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

export const RestrictedRoute = observer(
  ({ redirectTo = '/', component: Component }) => {
    const { authorised } = useAuthStore();

    return !!authorised === true ? <Navigate to={redirectTo} /> : Component;
  }
);

RestrictedRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.object.isRequired,
};
