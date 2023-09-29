import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledOrders } from './Orders.styled';

const Orders = () => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();
  return (
    <StyledOrders>
      <div className="orders__header-box">
        {screen === 'mobile' && (
          <Link to={'/cabinet'}>
            <svg width="24px" height="24px" className="orders__arrow">
              <use href={sprite + '#arrow-down'} />
            </svg>
          </Link>
        )}
        <h2 className="orders__header">{t('Мої замовлення')}</h2>
      </div>
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
