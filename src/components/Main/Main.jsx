import React from 'react';
import Hero from './hero/Hero';
import Promotions from './PromotionsWithDiscount/Promotions';
import { GlobalContainer } from '../../global/GlobalContainer';
import { StyledMain } from './Main.styled';
const Main = () => {
  return (
    <StyledMain>
      <Hero />
      <GlobalContainer>
        <Promotions />
      </GlobalContainer>
    </StyledMain>
  );
};

export default Main;
