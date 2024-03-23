import React from 'react';
import { StyledProductCard } from './ProductDetailedCardPage.styled';
import Breadcrumbs from '../FilterPage/Breadcrumbs/Breadcrumbs';
import { useStore } from '../../../store/AuthProvider';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import BigProductCard from './BigProductCard/BigProductCard';
import { useParams } from 'react-router-dom';

const ProductDetailedCard = observer(() => {
  const { id } = useParams();
  const store = useStore();
  const {
    auth: { language },
    catalog: {
      getProductByID,
      // productById,
      state,
      // setAnimalSlug,
      // setAnimalName,
      // setCategorySlug,
      // setSubcategorySlug,
      // setCategoryName,
      // setSearchQuery,
    },
  } = store;

  useEffect(() => {
    getProductByID(id, language);
  }, [language]);

  return (
    <StyledProductCard>
      {id !== undefined && state === 'done' ? (
        <>
          <Breadcrumbs page="product" />
          <BigProductCard />
        </>
      ) : null}
    </StyledProductCard>
  );
});

export default ProductDetailedCard;
