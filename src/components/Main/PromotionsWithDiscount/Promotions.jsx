import React from 'react';
import AnimalsBar from '../../SharedLayout/AnimalsBar/AnimalsBar';
import Title from '../../SharedLayout/Title/Title';
import CardProduct from '../../SharedLayout/CardProduct/CardProduct';
import { StyledCard, StyledPromotion } from './Promotions.styled';

const Promotions = () => {
  return (
    <StyledPromotion>
      <div className="promotion-header">
        <Title>
          <h2>Пропозиції зі знижкою</h2>
        </Title>
        <AnimalsBar></AnimalsBar>
      </div>
      <StyledCard>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
      </StyledCard>
    </StyledPromotion>
  );
};

export default Promotions;
