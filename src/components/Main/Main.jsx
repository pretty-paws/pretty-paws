import React from 'react';
// import Hero from './hero/Hero';
import Promotions from './PromotionsWithDiscount/Promotions';
import { GlobalContainer } from '../../global/GlobalContainer';

const Main = () => {
  return (
    <GlobalContainer>
      {/* <Hero /> */}
      <Promotions />
    </GlobalContainer>
  );
};

export default Main;
