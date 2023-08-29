import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { useAuthStore } from './store/AuthProvider';

const App = () => {
  const { refresh, authorised } = useAuthStore();

  useEffect(() => {
    authorised === 'true' && refresh();
  });

  return <AppRouter />;
};

export default App;
