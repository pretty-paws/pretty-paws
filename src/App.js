import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { useStore } from './store/AuthProvider';
import { useLoader } from './store/LoaderProvider';
import { useTranslation } from 'react-i18next';
import Loader from '../src/components/SharedLayout/Loader/Loader';
const App = observer(() => {
  const { i18n } = useTranslation();
  const store = useStore();
  const { isLoading, showLoader, hideLoader } = useLoader();
  const {
    auth: { refresh, authorised, language },
    cart: { getProducts },
    blog: { getBlogs },
    catalog: { getAnimals },
    hero: { getOfferByAnimal },
  } = store;

  useEffect(() => {
    const fetchData = async () => {
      try {
        showLoader();
        if (authorised) {
          await refresh();
        }
        await Promise.all([
          getAnimals(language),
          getBlogs(language),
          getProducts(language),
          getOfferByAnimal(language),
          // syncFavourites(favouritesArray),
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        hideLoader();
      }
    };

    fetchData();
  }, [authorised, i18n.language]);

  return <>{isLoading ? <Loader /> : <AppRouter />}</>;
});

export default App;
