import React from 'react';
import { StyledProductCard } from './ProductDetailedCard.styled';
import Breadcrumbs from '../FilterPage/Breadcrumbs/Breadcrumbs';

const ProductDetailedCard = () => {
  return (
    <StyledProductCard>
      <Breadcrumbs />
    </StyledProductCard>
  );
};

export default ProductDetailedCard;
