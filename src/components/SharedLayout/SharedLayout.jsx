import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalContainer } from '../../global/GlobalContainer';
import { StyledWrapper } from '../../global/Wrapper';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';

const SharedLayout = () => {
  return (
    <StyledWrapper>
      <GlobalContainer>
        <Header />
        <Navigation />
      </GlobalContainer>
      <Outlet />
      <Footer />
    </StyledWrapper>
  );
};

export default SharedLayout;
