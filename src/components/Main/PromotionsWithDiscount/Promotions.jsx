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
import { useLocation } from 'react-router-dom';

const Promotions = observer(() => {
  const location = useLocation();
  const { screen } = useWindowSize();
  const store = useStore();
  const {
    cart: { state, products },
  } = store;

  const { elementRef, arrowDisable, handleHorizontalScroll } =
    useHorizontalScroll(30, 12, 280);

  const { t } = useTranslation();
  return (
    <StyledPromotion>
      <div className="promotion-title-box">
        <Title>
          <h2>{t('Пропозиції зі знижкою')}</h2>
        </Title>
      </div>
      {location.pathname === '/' && (
        <div className="promotion-animals-bar">
          <AnimalsBar type={'section'} />
        </div>
      )}
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
        {console.log(products)}
        <div className="promotions__card-container" ref={elementRef}>
          {state === 'done'
            ? products.map(
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
                  return (
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
          {/* <CardLink></CardLink> */}
        </div>

        <div className="promotions__button-container">
          <button className="promotions__button" type="button">
            Усі пропозиції
          </button>
        </div>
      </div>
    </StyledPromotion>
  );
});

export default Promotions;
