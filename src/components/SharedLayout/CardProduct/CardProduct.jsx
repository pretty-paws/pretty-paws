import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';
import { StyledCardProduct } from './CardProduct.styled';
import { useStore } from '../../../store/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

import Notification from '../Notification/Notification';
import { useTranslation } from 'react-i18next';

const CardProduct = observer(
  ({
    id,
    // slug,
    title,
    description,
    short_description,
    image_url,
    price,
    promotional_price,
    is_promotional,
    quantity,
    country,
  }) => {
    const { t } = useTranslation();

    const store = useStore();
    const {
      auth: { refresh, user, authorised },
      cart: { addToCart, alreadyAdded, removeFromCart },
      favourite: { toggleFavourite },
      catalog: { animalSlug, categorySlug, subcategorySlug },
    } = store;

    const [cartNotification, setCartNotification] = useState(false);
    const [favouriteNotification, setFavouriteNotification] = useState(false);
    const navigate = useNavigate();

    // function handleDescription(text) {
    //   return text.slice(0, 50);
    // }

    function checkFavourite(id) {
      if (!authorised) return false;
      return user.favorites?.some(product => product.id === id);
    }

    function handleClick(e) {
      e.stopPropagation();
      if (alreadyAdded(id)) {
        removeFromCart(id);
        return;
      }

      const product = {
        id,
        title,
        description,
        short_description,
        image_url,
        price,
        promotional_price,
        is_promotional,
        quantity,
        country,
        amount: 1,
      };
      addToCart(product);
      setCartNotification(true);
    }

    const [errorMessage, setErrorMessage] = useState(false);

    function handleAddFavourite(e) {
      e.stopPropagation();
      if (!authorised) {
        setErrorMessage(true);
        return;
      } else {
        toggleFavourite(id)
          .then(() => {
            refresh();
          })
          .finally(!checkFavourite(id) && setFavouriteNotification(true));
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

    return (
      <StyledCardProduct
        biggerMargin={promotional_price !== 0}
        onClick={() => {
          // setProductId(id);
          navigate(
            `/catalog/animal/${animalSlug}/category/${categorySlug}/${subcategorySlug}/${id}`
          );
        }}
      >
        {is_promotional === 1 && (
          <div className="product__sale">{t('Акція')}</div>
        )}
        <div className="product__img-container">
          <img className="product__img" src={image_url} alt={title} />
        </div>
        <div className="product__details">
          <span className="product__amount">{quantity}</span>
          <span className="product__country">
            <img
              src={country.icon_url}
              alt={country}
              width=" 14px"
              height=" 14px"
            />
            {country.title}
          </span>
        </div>
        <div className="product__description">
          <b>{title}</b>
          <span> - {short_description}</span>
        </div>
        <div className="product__price-fav-box">
          {promotional_price !== 0 ? (
            <div>
              <div className="product__old-price">{price}₴</div>
              <div className="product__price">{promotional_price}₴</div>
            </div>
          ) : (
            <div className="product__price">{price}₴</div>
          )}
          <div className="product__fav-compare">
            {errorMessage && (
              <div className="product__error-message">
                <p>
                  {t('Будь-ласка,')}
                  <Link to="/register" onClick={e => e.stopPropagation()}>
                    <span>{t('зареєструйтесь')}</span>
                  </Link>
                  {t('на сайті, щоб додавати товари до обраних')}
                </p>
              </div>
            )}
            <div onClick={handleAddFavourite} className="product__fav-icon">
              {checkFavourite(id) ? (
                <svg width=" 26px" height=" 26px">
                  <use href={sprite + '#favorite_selected'} />
                </svg>
              ) : (
                <svg width=" 24px" height=" 24px">
                  <use href={sprite + '#favorite'} />
                </svg>
              )}
            </div>
            <svg width=" 24px" height=" 24px">
              <use href={sprite + '#scale'} />
            </svg>
          </div>
        </div>
        <button
          className={
            alreadyAdded(id) ? 'product__button added' : 'product__button'
          }
          onClick={handleClick}
        >
          {alreadyAdded(id) ? t('Додано') : t('До кошика')}
        </button>
        {cartNotification
          ? createPortal(
              <Notification
                text={t('Товар додано до кошикa')}
                button={t('Оформити замовлення')}
                link="/cart"
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
      </StyledCardProduct>
    );
  }
);

export default CardProduct;

CardProduct.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  is_promotional: PropTypes.number.isRequired,
  quantity: PropTypes.string.isRequired,
  brand: PropTypes.string,
};
