import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { StyledBackdrop, StyledModalBox } from './CartModal.styled';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { useStore } from '../../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
// import { useEffect } from 'react';

const CartModal = observer(({ setCartModalOpen }) => {
  const [smallModal, setSmallModal] = useState({});
  const store = useStore();
  const {
    auth: { refresh, user },
    cart: {
      cart,
      total,
      increaseAmount,
      decreaseAmount,
      removeFromCart,
      // getProductByID,
      // favProd,
    },
    favourite: {
      // checkFavourite,
      // addToFavourites,
      // removeFromFavourites,
      toggleFavourite,
    },
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

  return (
    <StyledBackdrop
      // onClick={() => setCartModalOpen(false)}
      onMouseLeave={() => setCartModalOpen(false)}
    >
      <StyledModalBox>
        {total !== 0 ? (
          <>
            <div>
              <h2 className="cart-modal__title">Кошик</h2>
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
                              return { ...prevState, [id]: !prevState[id] };
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
                                Видалити
                              </p>
                              <p
                                onClick={() => {
                                  toggleFavourite(id);
                                  refresh();
                                }}
                              >
                                {checkFavourite(id)
                                  ? 'Видалити зі списку бажань'
                                  : 'Додати до списку бажань'}
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
              <p>Доставка</p>
              <p>
                <b>За тарифами перевізника</b>
              </p>
            </div>
            <div className="cart-modal__total">
              <p>Сума до сплати</p>
              <p>
                <b>{total}.00₴</b>
              </p>
            </div>
            <button className="cart-modal__button" type="button">
              Оформити замовлення
            </button>
          </>
        ) : (
          <>
            <h2 className="cart-modal__title">Кошик порожній</h2>
            <button className="cart-modal__button" type="button">
              Знайти товар
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
