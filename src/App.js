import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { useStore } from './store/AuthProvider';
import ScrollToHashElement from './utils/ScrollToHashElement';

const App = observer(() => {
  const store = useStore();
  const {
    auth: { refresh, authorised },
  } = store;
  useEffect(() => {
    // getAnimals();
    authorised && refresh();
  }, [authorised]);

  return (
    <>
      <AppRouter />;
      <ScrollToHashElement />
    </>
  );
});

export default App;
