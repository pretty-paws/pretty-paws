import { StyledModalBox } from './Cart.styled';
import sprite from '../../img/svg-sprite/sprite.svg';
import { useStore } from '../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Promotions from '../Main/PromotionsWithDiscount/Promotions';
import { GlobalContainer } from '../../global/GlobalContainer';
import { UseSkeleton } from '../../hooks/useSkeleton';

const Cart = observer(() => {
  const { screen } = useWindowSize();
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const store = useStore();
  const {
    auth: { authorised, language },
    cart: {
      state,
      cart,
      total,
      increaseAmount,
      decreaseAmount,
      removeFromCart,
      cartArray,
      getAmount,
      getCartProductByID,
    },
    catalog: { animalSlug, categorySlug, subcategorySlug, unResetFilter },
  } = store;

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      const stickyContainer = document.getElementById('stickyContainer');

      if (!stickyContainer) return;
      let scrollDirection;

      if (scrollPosition > lastScrollPosition) {
        scrollDirection = 'Down';
      } else {
        scrollDirection = 'Up';
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

  useEffect(() => {
    cartArray.map(id => getCartProductByID(id, language));
  }, [language]);

  function editedDescription(text) {
    if (!text) return;
    let editedText;
    if (text.length <= 35) return text;
    if (text.length > 35) {
      editedText = text.slice(0, 35);
    }
    return editedText + '...';
  }

  return (
    <>
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
                    <p>{t('Продовжити покупки')}</p>
                  </div>
                </Link>
              )}
              <h2 className="cart-modal__title">{t('Кошик')}</h2>
              <div className="cart-modal__products-block">
                {state === 'done' ? (
                  cart.map(
                    ({
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
                              {title} - {editedDescription(short_description)}
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
                              <div className="product__one-price">
                                {price}.00₴
                              </div>
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
                              {/* <span> {amount} </span> */}
                              <span>{getAmount(id)}</span>

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
                  )
                ) : (
                  <div className="skeleton__cart">
                    <UseSkeleton
                      screen={screen}
                      cardsAmount={cartArray.length || 3}
                      page="cart"
                    />
                  </div>
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
                    <p>{t('Знижка 5% на перше замовлення')}</p>
                  </div>
                  <div>
                    <svg
                      className="cart-modal__more-btn"
                      width="24px"
                      height="24px"
                    >
                      <use href={sprite + '#delivery'} />
                    </svg>
                    <p>
                      {t('Безкоштовне доставлення до поштомата від 200 грн')}
                    </p>
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
                      {t(
                        'Безпечна та швидка оплата карткою. Безготівковий розрахунок для юридичних осіб'
                      )}
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
                    <p>{t('Сума замовлення:')}</p>
                    <p>
                      <b className="cart__total-price">{total}.00₴</b>
                    </p>
                  </div>
                </div>
                <Link
                  to={authorised ? '/make_order' : '/login'}
                  state={{ from: 'cart' }}
                >
                  <button
                    className="cart-modal__button"
                    type="button"
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      })
                    }
                  >
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
                    <button
                      className="cart-modal__button-continue"
                      type="button"
                      onClick={() => {
                        unResetFilter();
                      }}
                    >
                      {t('Продовжити покупки')}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </>
        ) : screen === 'desktop' ? (
          <>
            <div className="cart__empty-info">
              <h2 className="cart-modal__title">{t('Кошик')}</h2>
              <div className="cart__empty-text">
                <p>{t('Ваш кошик ще порожній.')}</p>
                <p>
                  {t(
                    'Перейдіть в каталог та знайдіть необхідний товар для вашого улюбленця.'
                  )}
                </p>
              </div>

              <Link to="/catalog/animal/cats/category/food-for-cats?subcategories=tinned-feed-and-pouches">
                <button className="cart-modal__button" type="button">
                  {t('Знайти товар')}
                </button>
              </Link>
            </div>
            <div className="cart__additional-info empty">
              <div>
                <svg
                  className="cart-modal__more-btn"
                  width="24px"
                  height="24px"
                >
                  <use href={sprite + '#discount'} />
                </svg>
                <p>{t('Знижка 5% на перше замовлення')}</p>
              </div>
              <div>
                <svg
                  className="cart-modal__more-btn"
                  width="24px"
                  height="24px"
                >
                  <use href={sprite + '#delivery'} />
                </svg>
                <p>{t('Безкоштовне доставлення до поштомата від 200 грн')}</p>
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
                  {t(
                    'Безпечна та швидка оплата карткою. Безготівковий розрахунок для юридичних осіб'
                  )}
                </p>
              </div>
            </div>
          </>
        ) : (
          <GlobalContainer>
            <div className="cart__empty-info">
              <h2 className="cart-modal__title">{t('Кошик')}</h2>
              <div className="cart__empty-text">
                <p>{t('Ваш кошик ще порожній.')}</p>
                <p>
                  {t(
                    'Перейдіть в каталог та знайдіть необхідний товар для вашого улюбленця.'
                  )}
                </p>
              </div>

              <Link to="/catalog/animal/cats/category/food-for-cats?subcategories=tinned-feed-and-pouches">
                <button className="cart-modal__button" type="button">
                  {t('Знайти товар')}
                </button>
              </Link>
            </div>
            <div className="cart__additional-info empty">
              <div>
                <svg
                  className="cart-modal__more-btn"
                  width="24px"
                  height="24px"
                >
                  <use href={sprite + '#discount'} />
                </svg>
                <p>{t('Знижка 5% на перше замовлення')}</p>
              </div>
              <div>
                <svg
                  className="cart-modal__more-btn"
                  width="24px"
                  height="24px"
                >
                  <use href={sprite + '#delivery'} />
                </svg>
                <p>{t('Безкоштовне доставлення до поштомата від 200 грн')}</p>
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
                  {t(
                    'Безпечна та швидка оплата карткою. Безготівковий розрахунок для юридичних осіб'
                  )}
                </p>
              </div>
            </div>
          </GlobalContainer>
        )}
      </StyledModalBox>
      <GlobalContainer>
        <Promotions query="new=1" title={t('Новинки')} />
      </GlobalContainer>
    </>
  );
});

export default Cart;
