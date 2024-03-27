import React, { useEffect } from 'react';
import { GlobalContainer } from '../../global/GlobalContainer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import { useStore } from '../../store/AuthProvider';
import { observer } from 'mobx-react-lite';

const CatalogPage = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();

  // const store = useStore();
  // const {
  // auth: { language },
  // catalog: { getAnimals },
  // } = store;

  useEffect(() => {
    if (location.pathname === '/catalog') {
      navigate('/catalog/animal', { replace: true });
    }
  }, [location.pathname]);

  // useEffect(() => {
  //   location.pathname === '/catalog/animal' && getAnimals(language);
  // }, [language, location.pathname]);
  return (
    <GlobalContainer>
      <Outlet />
    </GlobalContainer>
  );
});

export default CatalogPage;
