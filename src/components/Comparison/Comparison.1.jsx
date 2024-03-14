import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../store/AuthProvider';
import { GlobalContainer } from '../../global/GlobalContainer';
import sprite from '../../img/svg-sprite/sprite.svg';
import { Link } from 'react-router-dom';
import { StyledComparisonPage } from './Comparison.styled';
import Promotions from '../Main/PromotionsWithDiscount/Promotions';

export const Comparison = observer(() => {
  const store = useStore();
  const {
    comparison: { compareList, removeFromComparison },
    cart: { addToCart, alreadyAdded, removeFromCart },
  } = store;

  function handleClick(id, product) {
    console.log('id, product', id, product);
    // e.stopPropagation();
    if (alreadyAdded(id)) {
      removeFromCart(id);
      return;
    }
    addToCart(product);
    // setCartNotification(true);
  }
  return (
    <GlobalContainer>
      <StyledComparisonPage>
        {compareList.length !== 0 ? (
          <>
            <h3 className="compare__title">Порівняння товарів</h3>
            <div className="compare__container">
              <div>
                <ul className="compare__table-title">
                  <li>
                    <span className="compare__table-title-cell">Товар</span>
                  </li>
                  <li className="compare__table-title-cell">Бренд</li>
                  <li className="compare__table-title-cell">Країна виробник</li>
                  <li className="compare__table-title-cell">Вид</li>
                  <li className="compare__table-title-cell">Вага/розмір</li>
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
                          <div className="product__description">
                            {title} - {short_description}
                          </div>
                          <div className="product__price-cart">
                            {promotional_price !== 0 ? (
                              <div>
                                <div className="product__old-price">
                                  {price}₴
                                </div>
                                <div className="product__price">
                                  {promotional_price}₴
                                </div>
                              </div>
                            ) : (
                              <div className="product__price">{price}₴</div>
                            )}
                            <div className="product__cart-container">
                              <svg
                                width="24px"
                                height="24px"
                                className="compare__cart-icon"
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
          </>
        ) : (
          <>
            <h3 className="empty__title">Ваш список порівняння ще пустий</h3>
            <div className="empty__description_icon">
              <p>
                На картках товарів, які сподобалися, натисніть на іконку
                порівняння
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
              Порівнюйте та обирайте краще з <b>PrettyPaws</b>
            </p>
            <Link to="/catalog">
              <button type="button" className="empty__button">
                До каталогу
              </button>
            </Link>
            <Promotions
              query={'is_promotional=1'}
              title={'Вашому вихованцеві може сподобатися'}
            />
          </>
        )}
      </StyledComparisonPage>
    </GlobalContainer>
  );
});
