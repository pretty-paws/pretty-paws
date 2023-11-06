import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { ReactComponent as Telegram } from '../../../img/svg-sprite/telegram.svg';
import { ReactComponent as Instagram } from '../../../img/svg-sprite/instagram.svg';
import { Link } from 'react-router-dom';
import { StyledSocialBar } from './FooterSocialBar.styled';

const FooterSocialBar = () => {
  return (
    <StyledSocialBar className="z-index">
      <Link to="/">
        <svg className="animals-bar-icon" width="24px" height="24px">
          <use href={sprite + '#facebook'} />
        </svg>
      </Link>
      <Link to="/">
        <Instagram width="24px" height="24px" />
      </Link>
      <Link to="/">
        <svg className="animals-bar-icon" width="24px" height="24px">
          <use href={sprite + '#viber'} />
        </svg>
      </Link>
      <Link to="/">
        <Telegram width="24px" height="24px" />
      </Link>
    </StyledSocialBar>
  );
};

export default FooterSocialBar;
