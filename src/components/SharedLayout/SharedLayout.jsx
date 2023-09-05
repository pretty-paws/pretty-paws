import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalContainer } from '../../global/GlobalContainer';
import { StyledWrapper } from '../../global/Wrapper';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import useWindowSize from '../../hooks/useWindowSize';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const SharedLayout = () => {
  const { screen } = useWindowSize();
  const scrollDirection = useScrollDirection();
  return (
    <StyledWrapper>
      <header
        className={`header ${scrollDirection === 'down' ? 'hide' : 'show'}`}
      >
        <GlobalContainer>
          <Header />
          {screen === 'desktop' && <Navigation />}
        </GlobalContainer>
      </header>
      <Outlet />
      <Footer />
    </StyledWrapper>
  );
};

export default SharedLayout;
