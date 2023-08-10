import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalContainer } from '../../global/GlobalContainer';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const SharedLayout = () => {
  return (
    <>
      <GlobalContainer>
        <Header />
      </GlobalContainer>

      {/* тут має бути компонент Hero (той що зі слайдером) бо там фон має розтягуватись на всю ширину, і його не можна огортати глобальним контейнером */}

      <GlobalContainer>
        <Outlet />
      </GlobalContainer>
      {/* тут має бути компонент FooterBackground бо там фон має розтягуватись на всю ширину, і його не можна огортати глобальним контейнером */}
      <GlobalContainer>
        <Footer />
      </GlobalContainer>
    </>
  );
};

export default SharedLayout;
