import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes, routes } from '../routes';
import Main from './Main/Main';
import SharedLayout from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Cabinet from './Cabinet/Cabinet';
import PersonalData from './Cabinet/PersonalData/PersonalData';
import PersonalDataEdit from './Cabinet/PersonalData/PersonalDataEdit';
import Orders from './Cabinet/Orders/Orders';
import WishList from './Cabinet/WishList/WishList';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
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
        <Route
          path="cabinet"
          element={<PrivateRoute redirectTo="/" component={<Cabinet />} />}
          exact
        >
          <Route path="personal_data" element={<PersonalData />}>
            <Route path="edit" element={<PersonalDataEdit />} />
          </Route>

          <Route path="orders" element={<Orders />} />
          <Route path="wish_list" element={<WishList />} />
        </Route>
        {/* public routes */}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<PrivateRoute redirectTo="/" component={<Component />} />}
            exact
          />
        ))}
        {/* Base navigate to home */}
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
