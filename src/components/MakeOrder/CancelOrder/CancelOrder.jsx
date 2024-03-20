import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledCancelOrder } from './CancelOrder.styled';
import { useTranslation } from 'react-i18next';

const CancelOrder = observer(({ cancelOrder, setCancelOrder }) => {
  const { t } = useTranslation();

  if (cancelOrder) {
    document.body.classList.add('menu-opened');
  } else {
    document.body.classList.remove('menu-opened');
  }
  const navigate = useNavigate();
  return (
    <StyledCancelOrder>
      <div className="backdrop" />
      <div className="popup">
        <h3 className="confirmation-popup_title">
          {t('Закрити оформлення замовлення')}
        </h3>
        <p className="confirmation-popup_text">
          {t('Ви впевнені, що хочете закрити оформлення замовлення?')}
        </p>
        <button
          type="button"
          className="button to-catalogue"
          onClick={() => {
            setCancelOrder(false);
            navigate('/cart');
          }}
        >
          {t('Закрити')}
        </button>
        <button
          type="button"
          className="button to-cabinet"
          onClick={() => {
            setCancelOrder(false);
          }}
        >
          {t('Назад до оформлення')}
        </button>
      </div>
    </StyledCancelOrder>
  );
});

export default CancelOrder;
