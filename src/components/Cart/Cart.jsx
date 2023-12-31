import { StyledModalBox } from './Cart.styled';
import sprite from '../../img/svg-sprite/sprite.svg';
import { useStore } from '../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

const Cart = observer(() => {
  const location = useLocation();
  const { screen } = useWindowSize();

  console.log(location);
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const store = useStore();
  const {
    auth: { authorised },
    cart: { cart, total, increaseAmount, decreaseAmount, removeFromCart },
    catalog: { animalSlug, categorySlug, subcategorySlug },
  } = store;

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      const stickyContainer = document.getElementById('stickyContainer');
      console.log(scrollPosition, stickyContainer.offsetTop);

      let scrollDirection;

      if (scrollPosition > lastScrollPosition) {
        scrollDirection = 'Down';
        console.log('Scrolling Down');
      } else {
        scrollDirection = 'Up';
        console.log('Scrolling Up');
      }

      lastScrollPosition = scrollPosition;

      if (
        scrollPosition + 360 > stickyContainer.offsetTop &&
        scrollDirection === 'Down'
      ) {
        screen === 'mobile' && setIsSticky(true);
      } else if (
        scrollPosition < stickyContainer.offsetTop &&
        scrollDirection === 'Up'
      ) {
        screen === 'mobile' && setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // function editedDescription(text) {
  //   if (!text) return;
  //   let editedText;
  //   if (text.length <= 50) return text;
  //   if (text.length > 50) {
  //     editedText = text.slice(0, 50);
  //   }
  //   return editedText + '...';
  // }

  // function checkFavourite(id) {
  //   return user.favorites?.some(product => product.id === id);
  // }

  // const handleAddToFavourite = id => {
  //   authorised ? toggleFavourite(id).then(() => refresh()) : null;
  // };

  return (
    // <GlobalContainer>
    <StyledModalBox>
      {total !== 0 ? (
        <>
          <div className="cart__products-container">
            {screen !== 'desktop' && (
              <Link
                to={{
                  pathname: `/catalog/animal/${animalSlug}/category/${categorySlug}`,
                  search: `?subcategories=${subcategorySlug}`,
                }}
              >
                <div className="cart__continue-shopping" onClick={() => {}}>
                  <svg width="22px" height="22px">
                    <use href={sprite + '#arrow-black'} />
                  </svg>
                  <p>Продовжити покупки</p>
                </div>
              </Link>
            )}
            <h2 className="cart-modal__title">{t('Кошик')}</h2>
            <div className="cart-modal__products-block">
              {cart.map(
                ({
                  // description,
                  short_description,
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
                        <p>
                          {title} - {short_description}
                        </p>

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
                          <div className="product__one-price">{price}.00₴</div>
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
                      <div className="cart__amount-price">
                        <span>
                          {promotional_price === 0
                            ? price * amount
                            : promotional_price * amount}
                          ₴
                        </span>
                      </div>

                      <div
                        className="cart__remove-btn"
                        onClick={() => {
                          removeFromCart(id);
                        }}
                      >
                        <svg
                          className="cart-modal__more-btn"
                          width="24px"
                          height="24px"
                        >
                          <use href={sprite + '#delete'} />
                        </svg>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="cart__additional-info-box__desktop">
            <div className="cart__additional-info-box">
              <div className="cart__additional-info">
                <div>
                  <svg
                    className="cart-modal__more-btn"
                    width="24px"
                    height="24px"
                  >
                    <use href={sprite + '#discount'} />
                  </svg>
                  <p>Знижка 5% на перше замовлення</p>
                </div>
                <div>
                  <svg
                    className="cart-modal__more-btn"
                    width="24px"
                    height="24px"
                  >
                    <use href={sprite + '#delivery'} />
                  </svg>
                  <p>Безкоштовне доставлення до поштомата від 200 грн</p>
                </div>
                <div>
                  <svg
                    className="cart-modal__more-btn"
                    width="24px"
                    height="24px"
                  >
                    <use href={sprite + '#payment'} />
                  </svg>
                  <p>
                    Безпечна та швидка оплата карткою. Безготівковий розрахунок
                    для юридичних осіб
                  </p>
                </div>
              </div>
            </div>
            <div
              id="stickyContainer"
              className={
                isSticky
                  ? 'cart__delivery-total-box sticky'
                  : 'cart__delivery-total-box'
              }
            >
              <div className="cart-modal__delivery-box">
                <div className="cart-modal__delivery">
                  <p>{t('Доставка')}:</p>
                  <p>{t('За тарифами перевізника')}</p>
                </div>
                <div className="cart-modal__total">
                  <p>{t('Сума замовлення')}:</p>
                  <p>
                    <b className="cart__total-price">{total}.00₴</b>
                  </p>
                </div>
              </div>
              <Link
                to={authorised ? '/make_order' : '/login'}
                state={{ from: 'cart' }}
              >
                <button className="cart-modal__button" type="button">
                  {t('Оформити замовлення')}
                </button>
              </Link>
              {screen === 'desktop' && (
                <Link
                  to={{
                    pathname: `/catalog/animal/${animalSlug}/category/${categorySlug}`,
                    search: `?subcategories=${subcategorySlug}`,
                  }}
                >
                  <button className="cart-modal__button-continue" type="button">
                    {t('Продовжити покупки')}
                  </button>
                </Link>
              )}
            </div>
          </div>
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
    // </GlobalContainer>
  );
});

export default Cart;
