import React from 'react';
import { StyledProductCard } from './ProductDetailedCardPage.styled';
import Breadcrumbs from '../FilterPage/Breadcrumbs/Breadcrumbs';

const ProductDetailedCard = () => {
  return (
    <StyledProductCard>
      <Breadcrumbs />
    </StyledProductCard>
  );
};

export default ProductDetailedCard;
