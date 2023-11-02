import PropTypes from 'prop-types';
import { StyledBackdrop, StyledModalBox } from './CartModal.styled';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { useStore } from '../../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import useWindowSize from '../../../../hooks/useWindowSize';
import { useTranslation } from 'react-i18next';

const CartModal = observer(({ setCartModalOpen }) => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();
  const [smallModal, setSmallModal] = useState({});
  const store = useStore();
  const {
    auth: { refresh, user, authorised },
    cart: { cart, total, increaseAmount, decreaseAmount, removeFromCart },
    favourite: { toggleFavourite },
  } = store;

  function editedDescription(text) {
    if (!text) return;
    let editedText;
    if (text.length <= 50) return text;
    if (text.length > 50) {
      editedText = text.slice(0, 50);
    }
    return editedText + '...';
  }

  function checkFavourite(id) {
    return user.favorites?.some(product => product.id === id);
  }

  const handleAddToFavourite = id => {
    authorised ? toggleFavourite(id).then(() => refresh()) : null;
  };

  return (
    <StyledBackdrop
      onMouseLeave={() => {
        if (screen === 'desktop') setCartModalOpen(false);
      }}
    >
      <StyledModalBox>
        {total !== 0 ? (
          <>
            <div>
              <h2 className="cart-modal__title">{t('Кошик')}</h2>
              <div className="cart-modal__products-block">
                {cart.map(
                  ({
                    description,
                    id,
                    image_url,
                    amount,
                    price,
                    promotional_price,
                    title,
                  }) => {
                    return (
                      <div key={id} className="cart-modal__product-card">
                        <div className="cart-modal__image-container">
                          <img
                            className="cart-modal__product-img"
                            src={image_url}
                            alt={title}
                          />
                        </div>
                        <div className="cart-modal__description">
                          <p>{title}</p>
                          <p>{editedDescription(description)}</p>

                          {promotional_price !== 0 ? (
                            <div className="cart-modal__price-box">
                              <div className="product__price">
                                {promotional_price}.00₴
                              </div>
                              <div className="product__old-price">
                                {price}.00₴
                              </div>
                            </div>
                          ) : (
                            <div className="product__price">{price}.00₴</div>
                          )}

                          <div className="cart-modal__amount-box">
                            <span
                              onClick={() =>
                                amount > 1 ? decreaseAmount(id) : null
                              }
                            >
                              <svg width="24px" height="24px">
                                <use href={sprite + '#minus'} />
                              </svg>
                            </span>
                            <span> {amount} </span>
                            <span
                              onClick={() => {
                                increaseAmount(id);
                              }}
                            >
                              <svg width="24px" height="24px">
                                <use href={sprite + '#plus'} />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div
                          className="cart-modal__more"
                          onClick={() =>
                            setSmallModal(prevState => {
                              return { [id]: !prevState[id] };
                            })
                          }
                        >
                          <svg
                            className="cart-modal__more-btn"
                            width="24px"
                            height="24px"
                          >
                            <use href={sprite + '#more'} />
                          </svg>
                          {smallModal[id] && (
                            <div className="cart__small-modal">
                              <p
                                onClick={() => {
                                  removeFromCart(id);
                                }}
                              >
                                {t('Видалити')}
                              </p>
                              <p
                                className={
                                  authorised
                                    ? null
                                    : 'cart-modal__favouride-disabled'
                                }
                                onClick={() => handleAddToFavourite(id)}
                              >
                                {checkFavourite(id)
                                  ? t('Видалити зі списку бажань')
                                  : t('Додати до списку бажань')}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div className="cart-modal__delivery">
              <p>{t('Доставка')}</p>
              <p>
                <b>{t('За тарифами перевізника')}</b>
              </p>
            </div>
            <div className="cart-modal__total">
              <p>{t('Сума до сплати')}</p>
              <p>
                <b>{total}.00₴</b>
              </p>
            </div>
            <button className="cart-modal__button" type="button">
              {t('Оформити замовлення')}
            </button>
          </>
        ) : (
          <>
            <h2 className="cart-modal__title">{t('Кошик порожній')}</h2>
            <button className="cart-modal__button" type="button">
              {t('Знайти товар')}
            </button>
          </>
        )}
      </StyledModalBox>
    </StyledBackdrop>
  );
});

export default CartModal;

CartModal.propTypes = {
  setCartModalOpen: PropTypes.func,
};
