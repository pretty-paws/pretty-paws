import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes, routes } from '../routes';
import Main from './Main/Main';
// import { SHOP_ROUTE } from '../utils/consts';
import SharedLayout from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
// import { observer } from 'mobx-react-lite';

const AppRouter = () => {
  // Flag for user

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        {/* users routes */}
        {authRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <RestrictedRoute redirectTo="/" component={<Component />} />
            }
            exact
          />
        ))}
        {/* public routes */}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
        {/* Base navigate to home */}
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
