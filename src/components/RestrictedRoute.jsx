import { Navigate, useLocation } from 'react-router-dom';
import { useStore } from '../store/AuthProvider';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

export const RestrictedRoute = observer(
  ({ redirectTo = '/', component: Component }) => {
    const store = useStore();
    const {
      auth: { authorised },
    } = store;

    const location = useLocation();
    const registrationForOrder = location?.state?.from === 'cart';

    return authorised === true ? (
      registrationForOrder ? (
        <Navigate to="/make_order" />
      ) : (
        <Navigate to={redirectTo} />
      )
    ) : (
      Component
    );
  }
);

RestrictedRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.object.isRequired,
};
