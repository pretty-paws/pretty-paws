import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../../store/AuthProvider';
import CardProduct from '../../../SharedLayout/CardProduct/CardProduct';
import { StyledFilterResults } from './FilterResult.styled';
import useWindowSize from '../../../../hooks/useWindowSize';
import MobileCardProduct from '../../../SharedLayout/MobileCardProduct/MobileCardProduct';

const FilterResult = observer(() => {
  const { screen } = useWindowSize();
  const store = useStore();
  const {
    catalog: { filteredProducts, state },
  } = store;
  return (
    <StyledFilterResults>
      {state === 'done'
        ? filteredProducts.map(
            ({
              id,
              title,
              description,
              image_url,
              slug,
              price,
              promotional_price,
              is_promotional,
              quantity,
              country,
              brand,
            }) => {
              return screen === 'mobile' ? (
                <MobileCardProduct
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  image_url={image_url}
                  slug={slug}
                  price={price}
                  promotional_price={promotional_price}
                  is_promotional={is_promotional}
                  quantity={quantity}
                  country={country}
                  brand={brand}
                />
              ) : (
                <CardProduct
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  image_url={image_url}
                  slug={slug}
                  price={price}
                  promotional_price={promotional_price}
                  is_promotional={is_promotional}
                  quantity={quantity}
                  country={country}
                  brand={brand}
                />
              );
            }
          )
        : null}
    </StyledFilterResults>
  );
});

export default FilterResult;
