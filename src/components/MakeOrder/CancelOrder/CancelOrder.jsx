import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledCancelOrder } from './CancelOrder.styled';

const CancelOrder = observer(({ cancelOrder, setCancelOrder }) => {
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
          Закрити оформлення замовлення
        </h3>
        <p className="confirmation-popup_text">
          Ви впевнені, що хочете закрити оформлення замовлення?
        </p>
        <button
          type="button"
          className="button to-catalogue"
          onClick={() => {
            setCancelOrder(false);
            navigate('/cart');
          }}
        >
          Закрити
        </button>
        <button
          type="button"
          className="button to-cabinet"
          onClick={() => {
            setCancelOrder(false);
          }}
        >
          Назад до оформлення
        </button>
      </div>
    </StyledCancelOrder>
  );
});

export default CancelOrder;
