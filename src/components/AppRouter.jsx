import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import Main from './Main/Main';
// import { SHOP_ROUTE } from '../utils/consts';
import SharedLayout from './SharedLayout/SharedLayout';

const AppRouter = () => {
  // Flag for user
  const isAuth = true;
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        {/* users routes */}
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
          ))}
        {/* public routes */}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
        {/* Base navigate to home */}
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
