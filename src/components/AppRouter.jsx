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
import Subscription from './Cabinet/Subscription/Subscription';
import { observer } from 'mobx-react-lite';
import Cart from './Cart/Cart';
import CatalogList from './Catalog/CatalogList/CatalogList';
import FilterPage from './Catalog/FilterPage/FilterPage';
import Catalog from './Catalog/Catalog/Catalog';
import ProductDetailedCardPage from './Catalog/ProductDetailedCardPage/ProductDetailedCardPage';
import MakeOrder from './MakeOrder/MakeOrder';
import Order from './Cabinet/Order/Order';
import BlogDetailedCardPage from './Blog/BlogDetailedCardPage/BlogDetailedCardPage';
import Blog from './Blog/Blog';
import Comparison from './Comparison/Comparison';

const AppRouter = observer(() => {
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
        <Route path="cart" element={<Cart />} exact />
        <Route path="comparison" element={<Comparison />} exact />
        <Route
          path="cabinet"
          element={<PrivateRoute redirectTo="/" component={<Cabinet />} />}
          exact
        >
          <Route
            path="personal_data"
            element={
              <PrivateRoute redirectTo="/" component={<PersonalData />} />
            }
          >
            <Route
              path="edit"
              element={
                <PrivateRoute redirectTo="/" component={<PersonalDataEdit />} />
              }
            />
          </Route>

          <Route
            path="orders"
            element={<PrivateRoute redirectTo="/" component={<Orders />} />}
          />
          <Route
            path="orders/:orderIndex"
            element={<PrivateRoute redirectTo="/" component={<Order />} />}
          />

          <Route
            path="wish_list"
            element={<PrivateRoute redirectTo="/" component={<WishList />} />}
          />
          <Route
            path="subscription"
            element={
              <PrivateRoute redirectTo="/" component={<Subscription />} />
            }
          />
        </Route>
        <Route
          path="make_order"
          element={<PrivateRoute redirectTo="/" component={<MakeOrder />} />}
          exact
        />
        {/* public routes */}
        {publicRoutes.map(({ path, Component, name }) => {
          if (name === 'Контакти')
            return (
              <Route key={path} path={path} element={<Component />} exact />
            );
          if (name === 'Каталог товарів')
            return (
              <React.Fragment key={path}>
                <Route path={path} element={<Component />} exact>
                  <Route
                    key={path}
                    path={`${path}/animal`}
                    element={<Catalog />}
                  >
                    <Route
                      key={path}
                      path={`${path}/animal/:animalName`}
                      element={<CatalogList />}
                    />
                  </Route>
                  <Route
                    key={path}
                    path={`${path}/animal/:animalName/category/:category`}
                    element={<FilterPage />}
                  ></Route>
                  <Route
                    key={path}
                    path={`${path}/animal/:animalName/category/:category/:subcategory/:id`}
                    element={<ProductDetailedCardPage />}
                  />
                </Route>
              </React.Fragment>
            );
          if (name === 'Блог')
            return (
              <React.Fragment key={path}>
                <Route
                  key={path}
                  path={`${path}/news/:news_name`}
                  element={<BlogDetailedCardPage />}
                />
                <Route path={path} element={<Component />} exact>
                  <Route
                    key={path}
                    path={`${path}/news`}
                    element={<Blog />}
                  ></Route>
                  <Route
                    key={path}
                    path={`${path}/news/:page/:per_page/:categories`}
                    element={<Blog />}
                  ></Route>
                </Route>
              </React.Fragment>
            );
          return <Route key={path} path={path} element={<Component />} exact />;
        })}
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
});

export default AppRouter;
