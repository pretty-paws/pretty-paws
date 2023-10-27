import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { useStore } from './store/AuthProvider';

const App = observer(() => {
  const store = useStore();
  const {
    auth: { refresh, authorised },
    cart: { getProducts },
    // favourite: { getFavourite },
  } = store;
  const language = localStorage.getItem('language') || 'ua';

  useEffect(() => {
    // getAnimals();
    if (authorised) {
      refresh();
      // if (state === 'done') getFavourite(user.favorites);
      // if (state === 'done') console.log(user);
    }
    getProducts(language);
  }, [authorised]);

  return (
    <>
      <AppRouter />;
    </>
  );
});

export default App;
