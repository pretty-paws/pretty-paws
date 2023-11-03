import React, { useEffect } from 'react';
import { GlobalContainer } from '../../global/GlobalContainer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/AuthProvider';

const CatalogPage = () => {
  const language = localStorage.getItem('language') || 'ua';
  const navigate = useNavigate();
  const location = useLocation();

  const store = useStore();
  const {
    catalog: { getAnimals, state },
  } = store;

  useEffect(() => {
    getAnimals(language);
  }, [language]);

  useEffect(() => {
    if (state === 'done' && location.pathname === '/catalog') {
      navigate('/catalog/category', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <GlobalContainer>
      <Outlet />
    </GlobalContainer>
  );
};

export default CatalogPage;
