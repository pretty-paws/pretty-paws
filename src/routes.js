import New from './components/New/New';
import Blog from './components/Blog/Blog';
import Help from './components/Help/Help';
import CatalogPage from './components/Catalog/CatalogPage';
import Promotions from './components/Promotions/Promotions';
import Contact from './components/Contact/Contact';
import Delivery from './components/Delivery/Delivery';
import RegisterPage from './components/Register/RegisterPage';
import LogInPage from './components/LogIn/LogInPage';

import {
  HELP_ROUTE,
  BLOG_ROUTE,
  NEW_ROUTE,
  PROMOTIONS_ROUTE,
  CATALOG_ROUTE,
  CONTACT_ROUTE,
  DELIVERY_ROUTE,
  REGISTER_ROUTE,
  FAVORITE_ROUTE,
  LOGIN_ROUTE,
} from './utils/consts';
import Favorite from './components/Favorite/Favorite';

export const authRoutes = [
  {
    name: 'Реєстрація',
    path: REGISTER_ROUTE,
    Component: RegisterPage,
  },
  {
    name: 'Увійти',
    path: LOGIN_ROUTE,
    Component: LogInPage,
  },
];

export const routes = [
  {
    name: 'Улюблені товари',
    path: FAVORITE_ROUTE,
    Component: Favorite,
  },
];
export const publicRoutes = [
  {
    name: 'Каталог товарів',
    path: CATALOG_ROUTE,
    Component: CatalogPage,
  },
  {
    name: 'Акції',
    path: PROMOTIONS_ROUTE,
    Component: Promotions,
  },
  {
    name: 'Новинки',
    path: NEW_ROUTE,
    Component: New,
  },
  {
    name: 'Доставка та оплата',
    path: DELIVERY_ROUTE,
    Component: Delivery,
  },
  {
    name: 'Волонтерство',
    path: HELP_ROUTE,
    Component: Help,
  },
  {
    name: 'Блог',
    path: BLOG_ROUTE,
    Component: Blog,
  },
  {
    name: 'Контакти',
    path: CONTACT_ROUTE,
    Component: Contact,
  },
  // {
  //   name: 'Кошик',
  //   path: CART_ROUTE,
  //   Component: Cart,
  // },
];
