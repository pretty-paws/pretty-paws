import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';
import { StyledCardProduct } from './CardProduct.styled';
import { useStore } from '../../../store/AuthProvider';
import { Link } from 'react-router-dom';
const CardProduct = observer(
  ({
    id,
    title,
    description,
    image_url,
    price,
    promotional_price,
    is_promotional,
    quantity,
    country,
  }) => {
    const store = useStore();
    const {
      auth: { refresh, user, authorised },
      cart: { addToCart, alreadyAdded, removeFromCart },
      favourite: { toggleFavourite },
    } = store;

    function checkFavourite(id) {
      if (!authorised) return false;
      return user.favorites?.some(product => product.id === id);
    }

    function handleClick() {
      if (alreadyAdded(id)) {
        removeFromCart(id);
        return;
      }

      const product = {
        id,
        title,
        description,
        image_url,
        price,
        promotional_price,
        is_promotional,
        quantity,
        country,
        amount: 1,
      };
      console.log(product);
      addToCart(product);
    }
    const [buttonName, setButtonName] = useState('Додано');
    const [errorMessage, setErrorMessage] = useState(false);
    function handleAddFavourite() {
      if (!authorised) {
        setErrorMessage(true);
        return;
      } else {
        toggleFavourite(id).then(() => refresh());
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

    function handleMouseEnter() {
      setButtonName('Видалити');
    }
    function handleMouseLeave() {
      setButtonName('Додано');
    }

    return (
      <StyledCardProduct biggerMargin={promotional_price !== 0}>
        {is_promotional === 1 && <div className="product__sale">Акція</div>}
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
          <span> - {description}</span>
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
                  Будь-ласка,{' '}
                  <Link to="/register">
                    <span>зареєструйтесь</span>
                  </Link>{' '}
                  на сайті, щоб додавати товари до обраних
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {alreadyAdded(id) ? buttonName : 'До кошика'}
        </button>
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
