import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../../../store/AuthProvider';
import { createPortal } from 'react-dom';
import Notification from '../Notification/Notification';
import { useTranslation } from 'react-i18next';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledMobileCardProduct } from './MobileCardProduct.styled';

const MobileCardProduct = observer(
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
    is_new,
    quantity,
    country,
    animal,
    brand,
    category,
    subcategory,
  }) => {
    const { t } = useTranslation();
    const store = useStore();
    const {
      auth: { refresh, authorised, favorites },
      cart: { addToCart, alreadyAdded, removeFromCart },
      favourite: { toggleFavourite },
      catalog: { animalSlug, categorySlug, subcategorySlug },
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
    const [compareAdded, setCompareAdded] = useState(false);
    const [compareMax, setCompareMax] = useState(false);
    const [compareDiffCategory, setCompareDiffCategory] = useState(false);
    const [compareDeleted, setCompareDeleted] = useState(false);
    const navigate = useNavigate();
    // const [actionPerformed, setActionPerformed] = useState(false);

    const product = {
      id,
      title,
      description,
      short_description,
      image_url,
      price,
      promotional_price,
      is_promotional,
      is_new,
      quantity,
      country,
      brand,
      category,
      animal,
      subcategory,
    };

    function handleDescription(text) {
      return text.slice(0, 35) + '...';
    }

    function checkFavourite(id) {
      if (!authorised) return false;
      return favorites.some(product => product.id === id);
    }

    function handleClick(e) {
      e.stopPropagation();
      if (alreadyAdded(id)) {
        removeFromCart(id);
        return;
      }

      // const product = {
      //   id,
      //   title,
      //   description,
      //   short_description,
      //   image_url,
      //   price,
      //   promotional_price,
      //   is_promotional,
      //   quantity,
      //   country,
      //   amount: 1,
      // };
      addToCart(product);
      setCartNotification(true);
      // setActionPerformed(true);
    }

    const [errorMessage, setErrorMessage] = useState(false);

    function handleAddFavourite() {
      if (!authorised) {
        // setActionPerformed(true);
        setErrorMessage(true);
        return;
      } else {
        // setActionPerformed(true);
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

    const checkQuantity = quantity => {
      if (quantity.length <= 5) {
        return quantity;
      } else if (quantity.length > 5) {
        return quantity.slice(0, 5);
      }
    };

    function addToFav(e) {
      e.stopPropagation();
      if (animalCategory === null) {
        setCategory(animal.slug);
        addToComparison(product);
        setCompareAdded(true);
      } else if (
        animal.slug === animalCategory &&
        compareList.length < 4 &&
        !alreadyAddedToCompare(id)
      ) {
        addToComparison(product);
        setCompareAdded(true);
      } else if (animalCategory !== null && animal.slug !== animalCategory) {
        setCompareDiffCategory(true);
      } else if (
        animal.slug === animalCategory &&
        compareList.length >= 4 &&
        !alreadyAddedToCompare(id)
      ) {
        setCompareMax(true);
      } else if (
        animal.slug === animalCategory &&
        compareList.length >= 4 &&
        alreadyAddedToCompare(id)
      ) {
        removeFromComparison(id);
        setCompareDeleted(true);
      } else if (alreadyAddedToCompare(id)) {
        removeFromComparison(id);
        setCompareDeleted(true);
      }
    }
    return (
      <StyledMobileCardProduct
        biggerMargin={promotional_price !== 0}
        onClick={() => {
          navigate(
            `/catalog/animal/${animalSlug}/category/${categorySlug}/${subcategorySlug}/${id}`
          );
        }}
      >
        {is_promotional === 1 && (
          <div className="product__sale">{t('Акція')}</div>
        )}
        {is_new === true && <div className="product__new">{t('Новинка')}</div>}
        <div className="product__description">
          <div className="product__img-container">
            <img className="product__img" src={image_url} alt={title} />
          </div>
          <div>
            <b>{title}</b>
            <span> - {handleDescription(short_description)}</span>
            <div className="product__details">
              <span className="product__amount">{checkQuantity(quantity)}</span>
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
            <div className="product__price-fav-box">
              {promotional_price !== 0 ? (
                <div>
                  <div className="product__old-price">{price}₴</div>
                  <div className="product__price">{promotional_price}₴</div>
                </div>
              ) : (
                <div className="product__price">{price}₴</div>
              )}
            </div>
          </div>

          <div className="product__fav-compare">
            {errorMessage && (
              <div className="product__error-message">
                <p>
                  {t('Будь-ласка,')}
                  <Link to="/register">
                    <span>{t('зареєструйтесь')}</span>
                  </Link>
                  {t(', щоб додавати товари до обраних')}
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
            <svg
              width=" 24px"
              height=" 24px"
              fill="currentColor"
              stroke="none"
              onClick={addToFav}
              className={
                alreadyAddedToCompare(id)
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
      </StyledMobileCardProduct>
    );
  }
);

export default MobileCardProduct;
