import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../store/AuthProvider';
import { parseDate } from '../../../utils/parseDate';
// import CabinetTitle from '../PersonalData/CabinetTitle/CabinetTitle';
import { StyledOrder, StyledOrderBG } from './Order.styled';
import { Link, useParams } from 'react-router-dom';
import sprite from '../../../img/svg-sprite/sprite.svg';

const Order = observer(() => {
  const store = useStore();
  const {
    cart: { orders },
  } = store;

  const { orderIndex } = useParams();
  const { cart, total, creationDate } = orders[orderIndex];
  return (
    <StyledOrderBG>
      {/* <CabinetTitle header={'Мої замовлення'} /> */}

      <StyledOrder>
        <div key={orderIndex}>
          <Link to="/cabinet/orders">
            <div className="order_title-group">
              <svg
                className="pagination__arrow-prev"
                width="22px"
                height="22px"
              >
                <use href={sprite + '#long_arrow'} />
              </svg>
              <h4 className="order__title">
                Замовлення № {orderIndex + 1} від {parseDate(creationDate)}
              </h4>
            </div>
          </Link>
          <div className="order__table">
            {cart.map(
              ({
                title,
                short_description,
                quantity,
                amount,
                price,
                is_promotional,
                promotional_price,
              }) => (
                <div className="order__table-row" key={title}>
                  <p>
                    {title} {short_description} {quantity}
                  </p>
                  <p>
                    {amount}x{` `}
                    {is_promotional === 1
                      ? promotional_price + '.00'
                      : price + '.00'}
                  </p>
                  <p>
                    {is_promotional === 1
                      ? promotional_price * amount + '.00'
                      : price * amount + '.00'}
                  </p>
                </div>
              )
            )}
          </div>
          <div className="order__total">
            <span>Знижка:</span> <span>0 грн</span>
          </div>
          <div className="order__total">
            <span>Сумма: </span>
            <span>{total} грн</span>
          </div>
        </div>
      </StyledOrder>
    </StyledOrderBG>
  );
});

export default Order;
