import React from 'react';
import { useTranslation } from 'react-i18next';

import { StyledOrders } from './Orders.styled';
import CabinetTitle from '../PersonalData/CabinetTitle/CabinetTitle';

const Orders = () => {
  const { t } = useTranslation();
  return (
    <StyledOrders>
      <CabinetTitle header={'Мої замовлення'} />
      <div className="orders__body">
        <p className="orders__text">
          {t(
            'Поки що тут немає жодного замовлення. Давай виправимо це прямо зараз'
          )}
        </p>
        <button type="button" className="orders__button">
          {t('До каталогу')}
        </button>
      </div>
    </StyledOrders>
  );
};

export default Orders;
