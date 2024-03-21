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
    is_new,
    quantity,
    country,
    brand,
    category,
    animal,
    subcategory,
  }) => {
    const { t } = useTranslation();

    const store = useStore();
    const {
      auth: { authorised, favouritesArray, refresh },
      cart: { addToCart, alreadyAdded, removeFromCart },
      favourite: { toggleFavourite },
      catalog: {
        setAnimalSlug,
        setCategorySlug,
        setAnimalName,
        setCategoryName,
        setSubcategorySlug,
        setSubcategoryID,
        setCategoryID,
        setSearchQuery,
        unResetFilter,
        setAnimalID,
      },
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

    // const [compareList, setCompareList] = useState([]);

    const navigate = useNavigate();

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
      amount: 1,
      subcategory,
    };

    function checkFavourite(id) {
      if (!authorised) return false;
      return favouritesArray.some(itemId => itemId === id);
    }

    function handleClick(e) {
      e.stopPropagation();
      if (alreadyAdded(id)) {
        removeFromCart(id);
        return;
      }
      addToCart(product);
      setCartNotification(true);
    }

    function addToCompare(e) {
      e.stopPropagation();
      if (animalCategory === null) {
        setCategory(animal.slug);
        setAnimalID(animal.id);
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

    const [errorMessage, setErrorMessage] = useState(false);

    function handleAddFavourite(e, product) {
      e.stopPropagation();
      if (!authorised) {
        setErrorMessage(true);
        return;
      } else {
        toggleFavourite(product.id)
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
          setAnimalSlug(animal.slug);
          setAnimalID(animal.id);
          setAnimalName(animal.title);
          setCategoryName(category?.title);
          setCategorySlug(category.slug);
          setCategoryID(category.id);
          setSubcategorySlug(subcategory.slug);
          setSubcategoryID(subcategory?.id);
          unResetFilter();

          setSearchQuery(`&subcategories[0]=${subcategory.slug}`);
          navigate(
            `/catalog/animal/${animal.slug}/category/${category.slug}/${subcategory.slug}/${id}`
          );
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        {is_promotional === 1 && (
          <div className="product__sale">{t('Акція')}</div>
        )}
        {is_new === true && <div className="product__new">{t('Новинка')}</div>}
        <div className="product__img-container">
          <img className="product__img" src={image_url} alt={title} />
        </div>
        <div className="product__details">
          <span className="product__amount">{quantity}</span>
          <span className="product__country">
            <img
              src={country.icon_url}
              alt={country}
              width="14px"
              height="14px"
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
                  {t('Будь-ласка, ')}
                  <Link to="/register" onClick={e => e.stopPropagation()}>
                    <span>{t('зареєструйтесь ')}</span>
                  </Link>
                  {t(', щоб додавати товари до обраних')}
                </p>
              </div>
            )}
            <div
              onClick={e => handleAddFavourite(e, product)}
              className="product__fav-icon"
            >
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
              onClick={addToCompare}
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
                link="/cabinet/wish_list"
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
