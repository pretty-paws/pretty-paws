import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledSocialNetsBar } from './SocialNetsBar.styled';
import { ReactComponent as Telegram } from '../../../img/svg-sprite/telegram.svg';
import { ReactComponent as Instagram } from '../../../img/svg-sprite/instagram.svg';

const SocialNetsBar = () => {
  return (
    <StyledSocialNetsBar>
      <Link to="/">
        <svg className="animals-bar-icon" width="36px" height="36px">
          <use href={sprite + '#facebook'} />
        </svg>
      </Link>
      <Link to="/">
        <Instagram />
      </Link>
      <Link to="/">
        <svg className="animals-bar-icon" width="36px" height="36px">
          <use href={sprite + '#viber'} />
        </svg>
      </Link>
      <Link to="/">
        <Telegram />
      </Link>

      <svg className="animals-bar-icon" width="55px" height="18px">
        <use href={sprite + '#visa'} />
      </svg>

      <svg className="animals-bar-icon" width="56px" height="56px">
        <use href={sprite + '#mastercard'} />
      </svg>
    </StyledSocialNetsBar>
  );
};

export default SocialNetsBar;
