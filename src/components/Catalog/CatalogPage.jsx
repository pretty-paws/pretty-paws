import React, { useEffect } from 'react';
import { GlobalContainer } from '../../global/GlobalContainer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/AuthProvider';
import { observer } from 'mobx-react-lite';

const CatalogPage = observer(() => {
  const language = localStorage.getItem('language') || 'ua';
  const navigate = useNavigate();
  const location = useLocation();

  const store = useStore();
  const {
    catalog: { getAnimals },
  } = store;

  useEffect(() => {
    getAnimals(language);
  }, [language]);

  useEffect(() => {
    if (location.pathname === '/catalog') {
      navigate('/catalog/category', { replace: true });
    }
  }, [location.pathname]);

  return (
    <GlobalContainer>
      <Outlet />
    </GlobalContainer>
  );
});

export default CatalogPage;
