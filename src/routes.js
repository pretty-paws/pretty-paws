import Main from './components/Main/Main';
import News from './components/News/News';
import Blog from './components/Blog/Blog';
import Aid from './components/Aid/Aid';
import Promotions from './components/Promotions/Promotions';
import {
  AID_ROUTE,
  BLOG_ROUTE,
  NEWS_ROUTE,
  PROMOTIONS_ROUTE,
  SHOP_ROUTE,
} from './utils/consts';

// Описує  усі маршрути(роути) нашого додатку
export const authRoutes = [];
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Main,
  },
  {
    path: PROMOTIONS_ROUTE,
    Component: Promotions,
  },
  {
    path: NEWS_ROUTE,
    Component: News,
  },
  {
    path: BLOG_ROUTE,
    Component: Blog,
  },
  {
    path: AID_ROUTE,
    Component: Aid,
  },
];
