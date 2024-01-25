import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { useStore } from './store/AuthProvider';
import { useTranslation } from 'react-i18next';

const App = observer(() => {
  const { i18n } = useTranslation();
  const store = useStore();
  const {
    auth: { refresh, authorised, language },
    cart: { getProducts },
    blog: { getBlogs },
  } = store;

  useEffect(() => {
    if (authorised) {
      refresh();
    }
    getBlogs(language);
    getProducts(language);
  }, [authorised, i18n.language]);

  return (
    <>
      <AppRouter />
    </>
  );
});

export default App;
