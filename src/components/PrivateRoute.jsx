import { Navigate } from 'react-router-dom';
import { useStore } from '../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';

export const PrivateRoute = observer(
  ({ component: Component, redirectTo = '/' }) => {
    const store = useStore();
    const {
      auth: { authorised },
    } = store;

    console.log(authorised);

    const shouldRedirect = !authorised;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  }
);

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.object,
};
