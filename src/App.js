import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { useAuthStore } from './store/AuthProvider';

const App = () => {
  const { refresh } = useAuthStore();

  useEffect(() => {
    refresh();
  });

  return <AppRouter />;
};

export default App;
