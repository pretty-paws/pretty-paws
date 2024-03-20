import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useStore } from '../../store/AuthProvider';
import { GlobalContainer } from '../../global/GlobalContainer';
import sprite from '../../img/svg-sprite/sprite.svg';
import { Link } from 'react-router-dom';
import { StyledComparisonPage } from './Comparison.styled';
import Promotions from '../Main/PromotionsWithDiscount/Promotions';
import { createPortal } from 'react-dom';
import Notification from '../SharedLayout/Notification/Notification';
import { useTranslation } from 'react-i18next';

const Comparison = observer(() => {
  const { t } = useTranslation();

  const store = useStore();
  const {
    comparison: { compareList, removeFromComparison },
    cart: { addToCart, alreadyAdded, removeFromCart },
  } = store;

  const [cartNotification, setCartNotification] = useState(false);
  const [cartNotificationDelete, setCartNotificationDelete] = useState(false);

  function handleClick(id, product) {
    console.log('id, product', id, product);
    if (alreadyAdded(id)) {
      removeFromCart(id);
      setCartNotificationDelete(true);
      return;
    }
    addToCart(product);
    setCartNotification(true);
  }
  return (
    <GlobalContainer>
      <StyledComparisonPage>
        {compareList.length !== 0 ? (
          <>
            <h3 className="compare__title">{t('Порівняння товарів')}</h3>
            <div className="compare__container">
              <div>
                <ul className="compare__table-title">
                  <li>
                    <span className="compare__table-title-cell">
                      {t('Товар')}
                    </span>
                  </li>
                  <li className="compare__table-title-cell">{t('Бренд')}</li>
                  <li className="compare__table-title-cell">
                    {t('Країна виробник')}
                  </li>
                  <li className="compare__table-title-cell">{t('Вид')}</li>
                  <li className="compare__table-title-cell">
                    {t('Вага/розмір')}
                  </li>
                </ul>
              </div>
              <div className="compare__table-products-container">
                {compareList.map(
                  ({
                    id,
                    title,
                    short_description,
                    image_url,
                    price,
                    promotional_price,
                    quantity,
                    country,
                    category,
                    brand,
                    description,
                    is_promotional,
                    is_new,
                    animal,
                  }) => {
                    const product = {
                      id,
                      title,
                      short_description,
                      image_url,
                      price,
                      promotional_price,
                      quantity,
                      country,
                      category,
                      brand,
                      description,
                      is_promotional,
                      is_new,
                      animal,
                      amount: 1,
                    };
                    return (
                      <ul key={id} className="compare__product-table">
                        <li>
                          <div className="product__img-container">
                            <img
                              className="product__img"
                              src={image_url}
                              alt={title}
                            />
                            <svg
                              width=" 26px"
                              height=" 26px"
                              className="compare__close-icon"
                              onClick={() => removeFromComparison(id)}
                            >
                              <use href={sprite + '#close'} />
                            </svg>
                          </div>
                          <div className="compare__product__description">
                            {title} - {short_description}
                          </div>
                          <div className="product__price-cart">
                            {promotional_price !== 0 ? (
                              <div>
                                <div className="product__old-price">
                                  {price}.00₴
                                </div>
                                <div className="product__price">
                                  {promotional_price}.00₴
                                </div>
                              </div>
                            ) : (
                              <div className="product__price">{price}.00₴</div>
                            )}
                            <div
                              className={
                                alreadyAdded(id)
                                  ? 'product__cart-container '
                                  : 'product__cart-container added'
                              }
                            >
                              <svg
                                width="24px"
                                height="24px"
                                fill="currentColor"
                                stroke="none"
                                className={
                                  alreadyAdded(id)
                                    ? 'compare__cart-icon added '
                                    : 'compare__cart-icon '
                                }
                                onClick={() => handleClick(id, product)}
                              >
                                <use href={sprite + '#basket'} />
                              </svg>
                            </div>
                          </div>
                        </li>
                        <li>{brand}</li>
                        <li>{country.title}</li>
                        <li>{category.title}</li>
                        <li>{quantity}</li>
                      </ul>
                    );
                  }
                )}
              </div>
            </div>
            <Promotions
              query={'is_promotional=1'}
              title={'Вашому вихованцеві може сподобатися'}
            />
          </>
        ) : (
          <>
            <h3 className="empty__title">
              {t('Ваш список порівняння ще пустий')}
            </h3>
            <div className="empty__description_icon">
              <p>
                {t(
                  'На картках товарів, які сподобалися, натисніть на іконку порівняння'
                )}
              </p>
              <div className="description_and_icon">
                <span className="scale-icon">
                  <svg height="24px" width="24px">
                    <use href={sprite + '#scale'} />
                  </svg>
                </span>
              </div>
            </div>
            <p className="empty__description">
              {t('Порівнюйте та обирайте краще з')} <b>PrettyPaws</b>
            </p>
            <Link to="/catalog">
              <button type="button" className="empty__button">
                {t('До каталогу')}
              </button>
            </Link>
            <Promotions
              query={'is_promotional=1'}
              title={t('Вашому вихованцеві може сподобатися')}
            />
          </>
        )}
      </StyledComparisonPage>
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
      {cartNotificationDelete
        ? createPortal(
            <Notification
              text={t('Товар видалено з кошикa')}
              button={t('Оформити замовлення')}
              link="/cart"
              setNotification={setCartNotificationDelete}
              notification={cartNotificationDelete}
            />,
            document.body
          )
        : null}
    </GlobalContainer>
  );
});

export default Comparison;
