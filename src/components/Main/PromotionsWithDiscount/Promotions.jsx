import React from 'react';
import AnimalsBar from '../../SharedLayout/AnimalsBar/AnimalsBar';
import Title from '../../SharedLayout/Title/Title';
import CardProduct from '../../SharedLayout/CardProduct/CardProduct';
// import CardLink from '../../SharedLayout/CardLink/CardLink';
import { StyledPromotion } from './Promotions.styled';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import useHorizontalScroll from '../../../hooks/useHorizontalScroll';
import sprite from '../../../img/svg-sprite/sprite.svg';
import useWindowSize from '../../../hooks/useWindowSize';
import {
  Link,
  //  useLocation
} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { UseSkeleton } from '../../../hooks/useSkeleton';

const Promotions = observer(({ query, title }) => {
  const [animal, setAnimal] = useState(1);
  const [loading, setLoading] = useState(false);
  // const location = useLocation();
  const { screen } = useWindowSize();
  const store = useStore();
  const {
    // cart: { state },
    catalog: {
      state,
      getFilteredNewProducts,
      getFilteredSaleProducts,
      saleProducts,
      newProducts,
    },
  } = store;

  useEffect(() => {
    if (query === 'new=1') {
      setLoading(true);
      getFilteredNewProducts(animal, 'ua', query).then(() => {
        setLoading(false);
      });
    } else if (query === 'is_promotional=1') {
      setLoading(true);
      getFilteredSaleProducts(animal, 'ua', query).then(() => {
        setLoading(false);
      });
    }
  }, [animal, query]);

  const getProducts = query => {
    if (query === 'is_promotional=1') {
      return saleProducts;
    } else if (query === 'new=1') {
      return newProducts;
    }
  };

  const { elementRef, arrowDisable, handleHorizontalScroll } =
    useHorizontalScroll(30, 12, 280);

  const { t } = useTranslation();

  return (
    <StyledPromotion>
      <div className="promotion-title-box">
        <Title>
          <h2>{t(title)}</h2>
        </Title>
      </div>
      {/* {location.pathname === '/' && (
        <div className="promotion-animals-bar">
          <AnimalsBar type={'section'} setAnimal={setAnimal} animal={animal} />
        </div>
      )} */}
      {/* {location.pathname === '/comparison' && ( */}
      <div className="promotion-animals-bar">
        <AnimalsBar type={'section'} setAnimal={setAnimal} animal={animal} />
      </div>
      {/* // )} */}
      <div>
        {screen === 'desktop' && (
          <>
            <div
              className="left-arrow"
              onClick={() => handleHorizontalScroll('left')}
              disabled={arrowDisable}
            >
              <svg width=" 24px" height=" 24px">
                <use href={sprite + '#arrow-down'} />
              </svg>
            </div>
            <div
              className="right-arrow"
              onClick={() => handleHorizontalScroll('right')}
            >
              <svg width=" 24px" height=" 24px">
                <use href={sprite + '#arrow-down'} />
              </svg>
            </div>
          </>
        )}
        {/* {console.log(products)} */}
        <div className="promotions__card-container" ref={elementRef}>
          {state === 'done' ? (
            getProducts(query)?.map(
              ({
                id,
                title,
                short_description,
                description,
                image_url,
                slug,
                price,
                promotional_price,
                is_promotional,
                is_new,
                quantity,
                country,
                brand,
                category,
                animal,
              }) => {
                return (
                  <CardProduct
                    key={id}
                    id={id}
                    title={title}
                    short_description={short_description}
                    description={description}
                    image_url={image_url}
                    slug={slug}
                    price={price}
                    promotional_price={promotional_price}
                    is_promotional={is_promotional}
                    is_new={is_new}
                    quantity={quantity}
                    country={country}
                    brand={brand}
                    category={category}
                    animal={animal}
                  />
                );
              }
            )
          ) : (
            <UseSkeleton screen={screen} cardsAmount={4} page={'main'} />
          )}
          {loading && (
            <UseSkeleton screen={screen} cardsAmount={4} page={'main'} />
          )}
          {/* <CardLink></CardLink> */}
        </div>

        <div className="promotions__button-container">
          <Link to={query === 'new=1' ? '/new' : '/promotions'}>
            <button
              className="promotions__button"
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            >
              Усі пропозиції
            </button>
          </Link>
        </div>
      </div>
    </StyledPromotion>
  );
});

export default Promotions;
