import React from 'react';

import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledSocialNetsBar } from './PaymentBox.styled';

const PaymentBox = () => {
  return (
    <StyledSocialNetsBar>
      <div className="payment-bar__first-group">
        <svg className="animals-bar-icon" width="55px" height="18px">
          <use href={sprite + '#visa'} />
        </svg>

        <svg className="animals-bar-icon" width="56px" height="35px">
          <use href={sprite + '#mastercard'} />
        </svg>
      </div>
      <p className="footer__rights">© 2023 PrettyPaws. All Rights Reserved</p>
    </StyledSocialNetsBar>
  );
};

export default PaymentBox;
