import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { useStore } from './store/AuthProvider';

const App = observer(() => {
  const store = useStore();
  const {
    auth: { refresh, authorised },
    cart: { getProducts },
  } = store;
  const language = localStorage.getItem('language') || 'ua';

  useEffect(() => {
    if (authorised) {
      refresh();
    }
    getProducts(language);
  }, [authorised]);

  return (
    <>
      <AppRouter />
    </>
  );
});

export default App;
