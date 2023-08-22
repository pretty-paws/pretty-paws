import React from 'react';

import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledSocialNetsBar } from './PaymentBox.styled';

const PaymentBox = () => {
  return (
    <StyledSocialNetsBar>
      <h3 className="payment-bar__title">Приймаємо</h3>
      <svg className="animals-bar-icon" width="55px" height="18px">
        <use href={sprite + '#visa'} />
      </svg>

      <svg className="animals-bar-icon" width="56px" height="56px">
        <use href={sprite + '#mastercard'} />
      </svg>
      <svg className="animals-bar-icon" width="28px" height="28px">
        <use href={sprite + '#privat'} />
      </svg>
      <svg className="animals-bar-icon" width="68px" height="28px">
        <use href={sprite + '#google-pay'} />
      </svg>
      <svg className="animals-bar-icon" width="70px" height="28px">
        <use href={sprite + '#apple-pay'} />
      </svg>
    </StyledSocialNetsBar>
  );
};

export default PaymentBox;
