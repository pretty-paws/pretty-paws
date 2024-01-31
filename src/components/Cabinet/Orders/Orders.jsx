import React from 'react';
import { useTranslation } from 'react-i18next';

import { StyledOrders } from './Orders.styled';
import CabinetTitle from '../PersonalData/CabinetTitle/CabinetTitle';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/AuthProvider';
import { parseDate } from '../../../utils/parseDate';
import { Link } from 'react-router-dom';
import sprite from '../../../img/svg-sprite/sprite.svg';

const Orders = observer(() => {
  const { t } = useTranslation();
  const store = useStore();
  const {
    cart: { orders },
  } = store;

  return (
    <StyledOrders>
      <CabinetTitle header={'Мої замовлення'} />
      {orders.length !== 0 && (
        <div className="orders__body white-bg">
          <h3 className="orders__title">Мої замовлення</h3>
          {orders.map(({ total, creationDate }, orderIndex) => (
            <Link to={`${orderIndex}`} key={orderIndex}>
              <div className="orders__table">
                <h4 className="orders__table_number">№ {orderIndex + 1}</h4>
                <div className="orders__table_sum-date">
                  <p>{total}.00 грн</p>
                  <p>{parseDate(creationDate)}</p>
                </div>
                <div className="orders__table_status">
                  <svg width="24px" height="24px">
                    <use href={sprite + '#process'} />
                  </svg>
                  <p>Замовлення в обробці</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="orders__body">
        {orders.length === 0 && (
          <>
            <p className="orders__text">
              {t(
                'Поки що тут немає жодного замовлення. Давай виправимо це прямо зараз'
              )}
            </p>
            <Link to="/catalog/animal/cats/category/food-for-cats?subcategories=tinned-feed-and-pouches">
              <button type="button" className="orders__button">
                {t('До каталогу')}
              </button>
            </Link>
          </>
        )}
      </div>
    </StyledOrders>
  );
});

export default Orders;
