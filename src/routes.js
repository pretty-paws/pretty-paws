import Main from './components/Main/Main';
import New from './components/New/New';
import Blog from './components/Blog/Blog';
import Help from './components/Help/Help';
import Catalog from './components/Catalog/Catalog';
import Promotions from './components/Promotions/Promotions';
import Contact from './components/Contact/Contact';
import Delivery from './components/Delivery/Delivery';
import {
  HELP_ROUTE,
  BLOG_ROUTE,
  NEW_ROUTE,
  PROMOTIONS_ROUTE,
  SHOP_ROUTE,
  CATALOG_ROUTE,
  CONTACT_ROUTE,
  DELIVERY_ROUTE,
} from './utils/consts';

// Описує  усі маршрути(роути) нашого додатку
export const authRoutes = [];
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Main,
  },
  {
    path: CATALOG_ROUTE,
    Component: Catalog,
  },
  {
    path: PROMOTIONS_ROUTE,
    Component: Promotions,
  },
  {
    path: NEW_ROUTE,
    Component: New,
  },
  {
    path: CONTACT_ROUTE,
    Component: Contact,
  },
  {
    path: DELIVERY_ROUTE,
    Component: Delivery,
  },
  {
    path: BLOG_ROUTE,
    Component: Blog,
  },
  {
    path: HELP_ROUTE,
    Component: Help,
  },
];
