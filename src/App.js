import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { useStore } from './store/AuthProvider';

const App = () => {
  const store = useStore();
  const {
    auth: { refresh, authorised },
  } = store;
  useEffect(() => {
    authorised && refresh();
  });

  return <AppRouter />;
};

export default App;
