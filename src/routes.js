// import Main from './components/Main/Main';
import New from './components/New/New';
import Blog from './components/Blog/Blog';
import Help from './components/Help/Help';
import Catalog from './components/Catalog/Catalog';
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
  // SHOP_ROUTE,
  CATALOG_ROUTE,
  CONTACT_ROUTE,
  DELIVERY_ROUTE,
  REGISTER_ROUTE,
  LOGIN_ROUTE,
} from './utils/consts';

// Описує  усі маршрути(роути) нашого додатку
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
export const publicRoutes = [
  // Він нам наче не потрібний =>
  // {
  //   path: SHOP_ROUTE,
  //   Component: Main,
  // },
  {
    name: 'Каталог товарів',
    path: CATALOG_ROUTE,
    Component: Catalog,
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
    name: 'Контакти',
    path: CONTACT_ROUTE,
    Component: Contact,
  },
  {
    name: 'Доставка і оплата',
    path: DELIVERY_ROUTE,
    Component: Delivery,
  },
  {
    name: 'Допомога тваринкам',
    path: HELP_ROUTE,
    Component: Help,
  },
  {
    name: 'Блог',
    path: BLOG_ROUTE,
    Component: Blog,
  },
];
