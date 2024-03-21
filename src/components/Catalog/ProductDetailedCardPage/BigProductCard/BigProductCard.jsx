import React from 'react';
import { StyledBigProductCard } from './BigProductCard.styled';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../store/AuthProvider';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Notification from '../../../SharedLayout/Notification/Notification';
import useWindowSize from '../../../../hooks/useWindowSize';
import ToolTip from '../../../../hooks/useTooltip';

const BigProductCard = observer(() => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();
  const location = useLocation();
  // console.log(location.pathname);

  const store = useStore();
  const {
    auth: { refresh, user, authorised },
    cart: { addToCart, alreadyAdded, removeFromCart },
    favourite: { toggleFavourite },
    catalog: { productById, state },
    comparison: {
      animalCategory,
      setCategory,
      compareList,
      addToComparison,
      alreadyAddedToCompare,
      removeFromComparison,
    },
  } = store;

  const [cartNotification, setCartNotification] = useState(false);
  const [favouriteNotification, setFavouriteNotification] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);

  const [compareAdded, setCompareAdded] = useState(false);
  const [compareMax, setCompareMax] = useState(false);
  const [compareDiffCategory, setCompareDiffCategory] = useState(false);
  const [compareDeleted, setCompareDeleted] = useState(false);

  function checkFavourite(id) {
    if (!authorised) return false;
    return user.favorites?.some(product => product.id === id);
  }

  function handleClick() {
    if (alreadyAdded(productById.id)) {
      removeFromCart(productById.id);
      return;
    }

    const product = {
      ...productById,
      amount: 1,
    };
    addToCart(product);
    setCartNotification(true);
  }

  const [errorMessage, setErrorMessage] = useState(false);

  function handleAddFavourite() {
    // e.stopPropagation();
    if (!authorised) {
      setErrorMessage(true);
      return;
    } else {
      toggleFavourite(productById.id)
        .then(() => {
          refresh();
        })
        .finally(
          !checkFavourite(productById.id) && setFavouriteNotification(true)
        );
    }
  }

  function addToCompare(e) {
    console.log('e', e);
    e.stopPropagation();
    if (animalCategory === null) {
      setCategory(productById.animal.slug);
      addToComparison(productById);
      setCompareAdded(true);
    } else if (
      productById.animal.slug === animalCategory &&
      compareList.length < 4 &&
      !alreadyAddedToCompare(productById.id)
    ) {
      addToComparison(productById);
      setCompareAdded(true);
    } else if (
      animalCategory !== null &&
      productById.animal.slug !== animalCategory
    ) {
      setCompareDiffCategory(true);
    } else if (
      productById.animal.slug === animalCategory &&
      compareList.length >= 4 &&
      !alreadyAddedToCompare(productById.id)
    ) {
      setCompareMax(true);
    } else if (
      productById.animal.slug === animalCategory &&
      compareList.length >= 4 &&
      alreadyAddedToCompare(productById.id)
    ) {
      removeFromComparison(productById.id);
      setCompareDeleted(true);
    } else if (alreadyAddedToCompare(productById.id)) {
      removeFromComparison(productById.id);
      setCompareDeleted(true);
    }
  }

  useEffect(() => {
    let timeout;
    if (errorMessage === true) {
      timeout = setTimeout(() => {
        setErrorMessage(false);
      }, 4000);
    }

    return () => clearTimeout(timeout);
  }, [errorMessage]);

  const reduceDescrition = text => {
    if (!text) return;
    return text.slice(0, 1600);
  };

  return (
    <StyledBigProductCard>
      {state === 'done' && (
        <>
          <div className="product_card">
            {screen === 'desktop' && (
              <div className="product-card__image-box">
                <img
                  className="product-card__img"
                  src={productById.image_url}
                />
              </div>
            )}
            <div>
              <div className="product_card__sale-new-icons">
                {productById.is_promotional === 1 && (
                  <div className="product__sale">{t('Акція')}</div>
                )}
                {productById.is_new === true && (
                  <div className="product__new">{t('Новинка')}</div>
                )}
                <div className="product_card__country">
                  <img
                    width="14px"
                    height="14px"
                    src={productById.country?.icon_url}
                    alt={productById.country?.title}
                  />
                  <div>{productById.country?.title}</div>
                </div>
              </div>
              {screen !== 'mobile' && (
                <h3 className="product__title">
                  {productById.title} - {productById.short_description}
                </h3>
              )}
              <div className="product-card__image-data-block">
                {screen === 'mobile' && (
                  <div className="product-card__image-title">
                    <div className="product-card__image-box">
                      <img
                        className="product-card__img"
                        src={productById.image_url}
                      />
                    </div>

                    <h3 className="product__title">{productById.title}</h3>
                  </div>
                )}
                {screen === 'tablet' && (
                  <div className="product-card__image-box">
                    <img
                      className="product-card__img"
                      src={productById.image_url}
                    />
                  </div>
                )}
                <div>
                  {productById.promotional_price !== 0 ? (
                    <div className="product-card__price-box">
                      <div className="product__old-price">
                        {productById.price}₴
                      </div>
                      <div className="product__price">
                        {productById.promotional_price}₴
                      </div>
                    </div>
                  ) : (
                    <div className="product__price">{productById.price}₴</div>
                  )}
                  <div className="product__details-box">
                    <p className="product__details">
                      <svg width="24px" height="24px">
                        <use href={sprite + '#green-check'} />
                      </svg>
                      {t('В наявності')}
                    </p>
                    <p className="product__details">
                      <svg className="" width="24px" height="24px">
                        <use href={sprite + '#delivery'} />
                      </svg>
                      <span>
                        <b>{t('Доставляння')}</b> {t('по Україні Новою Поштою')}
                      </span>
                    </p>
                    <p className="product__details">
                      <svg className="" width="24px" height="24px">
                        <use href={sprite + '#payment'} />
                      </svg>
                      <span>
                        <b>{t('Оплата')}</b>{' '}
                        {t(
                          'карткою, перерахунком на банківські реквізити (для юросіб) або готівкою при отриманні'
                        )}
                      </span>
                    </p>
                  </div>
                  <div>
                    <div className="product__fav-compare">
                      {/* {errorMessage && (
                        <div className="product__error-message">
                          <p>
                            {t('Будь-ласка,')}
                            <Link
                              to="/register"
                              onClick={e => e.stopPropagation()}
                            >
                              <span>{t('зареєструйтесь')}</span>
                            </Link>
                            {t('на сайті, щоб додавати товари до обраних')}
                          </p>
                        </div>
                      )} */}
                      <ToolTip
                        text={t('Необхідно авторизуватись')}
                        authorised={authorised}
                        screen={screen}
                      >
                        <div
                          onClick={handleAddFavourite}
                          className="product__fav-icon"
                        >
                          {checkFavourite(productById.id) ? (
                            <svg width=" 26px" height=" 26px">
                              <use href={sprite + '#favorite_selected'} />
                            </svg>
                          ) : (
                            <svg width=" 24px" height=" 24px">
                              <use href={sprite + '#favorite'} />
                            </svg>
                          )}
                        </div>
                      </ToolTip>
                      <svg
                        width=" 24px"
                        height=" 24px"
                        fill="currentColor"
                        stroke="none"
                        onClick={addToCompare}
                        className={
                          alreadyAddedToCompare(productById.id)
                            ? ' product__compare-icon added'
                            : 'product__compare-icon'
                        }
                      >
                        <use href={sprite + '#scale'} />
                      </svg>
                    </div>
                  </div>
                  <button
                    className={
                      alreadyAdded(productById.id)
                        ? 'product__button added'
                        : 'product__button'
                    }
                    onClick={handleClick}
                  >
                    {alreadyAdded(productById.id)
                      ? t('Додано')
                      : t('До кошика')}
                  </button>
                </div>
              </div>
              {cartNotification
                ? createPortal(
                    <Notification
                      text={t('Товар додано до кошикa')}
                      button={t('Оформити замовлення')}
                      link="/cart"
                      back={location.pathname}
                      setNotification={setCartNotification}
                      notification={cartNotification}
                    />,
                    document.body
                  )
                : null}
              {favouriteNotification
                ? createPortal(
                    <Notification
                      text={t('Товар додано до списку бажань')}
                      button={t('Переглянути товари')}
                      link="/favorite"
                      setNotification={setFavouriteNotification}
                      notification={favouriteNotification}
                    />,
                    document.body
                  )
                : null}
              {compareAdded
                ? createPortal(
                    <Notification
                      text={t('Товар додано до порівняння')}
                      button={t('Переглянути товари')}
                      link="/comparison"
                      setNotification={setCompareAdded}
                      notification={compareAdded}
                    />,
                    document.body
                  )
                : null}
              {compareMax
                ? createPortal(
                    <Notification
                      text={t(
                        'Ви вже додали максимальну кількість товарів до порівняння (4)'
                      )}
                      button={t('Переглянути товари')}
                      link="/comparison"
                      setNotification={setCompareMax}
                      notification={compareMax}
                    />,
                    document.body
                  )
                : null}
              {compareDiffCategory
                ? createPortal(
                    <Notification
                      text={t(
                        'Можна порівнювати товари лише з однієї категорії тварин.'
                      )}
                      button={t('Переглянути товари')}
                      link="/comparison"
                      setNotification={setCompareDiffCategory}
                      notification={compareDiffCategory}
                    />,
                    document.body
                  )
                : null}
              {compareDeleted
                ? createPortal(
                    <Notification
                      text={t('Товар видалено з порівняння')}
                      button={t('Переглянути товари')}
                      link="/comparison"
                      setNotification={setCompareDeleted}
                      notification={compareDeleted}
                    />,
                    document.body
                  )
                : null}
            </div>
          </div>
          <div className="product_card-description">
            <h4 className="product_card-description-title">
              {t('Опис та характеристика товару')}
            </h4>
            {screen !== 'desktop' && (
              <>
                <svg
                  onClick={() => setOpenDescription(!openDescription)}
                  className={
                    openDescription
                      ? 'product_card-description-arrow rotate'
                      : 'product_card-description-arrow'
                  }
                  width=" 24px"
                  height=" 24px"
                >
                  <use href={sprite + '#arrow-down'} />
                </svg>
                {openDescription ? (
                  <p className="product_card-description-text">
                    {productById.description}
                  </p>
                ) : null}
              </>
            )}

            {screen === 'desktop' && (
              <>
                <p className="big-card__description-text">
                  {openDescription
                    ? productById.description
                    : reduceDescrition(productById.description)}
                </p>
                <div>
                  {openDescription ? (
                    <div
                      className="big-card__show-more"
                      onClick={() => setOpenDescription(!openDescription)}
                    >
                      <p>{t('Показати менше')}</p>
                      <svg
                        className="product_card-description-arrow-desktop rotate"
                        width=" 24px"
                        height=" 24px"
                      >
                        <use href={sprite + '#arrow-down'} />
                      </svg>
                    </div>
                  ) : (
                    <div
                      className="big-card__show-more"
                      onClick={() => setOpenDescription(!openDescription)}
                    >
                      <p>{t('Показати більше')}</p>
                      <svg
                        className="product_card-description-arrow-desktop"
                        width=" 24px"
                        height=" 24px"
                      >
                        <use href={sprite + '#arrow-down'} />
                      </svg>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </StyledBigProductCard>
  );
});

export default BigProductCard;
