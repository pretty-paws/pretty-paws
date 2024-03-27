import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../../store/AuthProvider';
import { parseDate } from '../../../utils/parseDate';
// import CabinetTitle from '../PersonalData/CabinetTitle/CabinetTitle';
import { StyledOrder, StyledOrderBG } from './Order.styled';
import { Link, useParams } from 'react-router-dom';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { useTranslation } from 'react-i18next';

const Order = observer(() => {
  const { t } = useTranslation();

  const store = useStore();
  const {
    auth: { language },
    cart: { orders, getOrderProductByID, ordersArray, state },
  } = store;

  const { orderIndex } = useParams();
  const { cart, total, creationDate, cartIDArray } = orders[orderIndex];

  useEffect(() => {
    cart.map(({ id }) => getOrderProductByID(id, language, orderIndex));
  }, [language, orderIndex]);

  const getAmount = id => {
    let amount;
    for (let i = 0; i < cartIDArray.length; i++) {
      const subArray = cartIDArray[i];
      if (subArray[0] === id) {
        amount = subArray[1];
        break;
      }
    }

    return amount;
  };

  return (
    <StyledOrderBG>
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
                {t('Замовлення №')} {Number(orderIndex) + 1} {t('від')}
                {parseDate(creationDate)}
              </h4>
            </div>
          </Link>
          <div className="order__table">
            {state === 'done' &&
              cart.map(
                (
                  {
                    // title,
                    short_description,
                    quantity,
                    // amount,
                    price,
                    is_promotional,
                    promotional_price,
                    id,
                  },
                  index
                ) => (
                  <div className="order__table-row" key={short_description}>
                    <p>
                      {ordersArray[index]?.title}
                      {ordersArray[index]?.short_description} {quantity}
                    </p>
                    <p>
                      {getAmount(id)}x
                      {is_promotional === 1
                        ? promotional_price + '.00'
                        : price + '.00'}
                    </p>
                    <p>
                      {is_promotional === 1
                        ? promotional_price * getAmount(id) + '.00'
                        : price * getAmount(id) + '.00'}
                    </p>
                  </div>
                )
              )}
          </div>
          <div className="order__total">
            <span>{t('Знижка: ')}</span> <span>0 {t('грн')}</span>
          </div>
          <div className="order__total">
            <span>{t('Сумма: ')}</span>
            <span>
              {total} {t('грн')}
            </span>
          </div>
        </div>
      </StyledOrder>
    </StyledOrderBG>
  );
});

export default Order;
