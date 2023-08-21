import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalContainer } from '../../global/GlobalContainer';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';

import { observer } from 'mobx-react-lite';
// import Hero from '../Main/hero/Hero';
const SharedLayout = observer(() => {
  return (
    <>
      <GlobalContainer>
        <Header />
        <Navigation />
      </GlobalContainer>

      {/* тут має бути компонент Hero (той що зі слайдером) бо там фон має розтягуватись на всю ширину, і його не можна огортати глобальним контейнером */}
      {/* <Hero></Hero> */}
      {/* <GlobalContainer> */}
      <Outlet />
      {/* </GlobalContainer> */}
      {/* тут має бути компонент FooterBackground бо там фон має розтягуватись на всю ширину, і його не можна огортати глобальним контейнером */}
      {/* <GlobalContainer> */}
      <Footer />
      {/* </GlobalContainer> */}
    </>
  );
});

export default SharedLayout;
