import React from 'react';
import { StyledHeader } from './Header.styled';
import sprite from '../../../img/svg-sprite/sprite.svg';

import Logo from './Logo';
import Search from './Search';
import UserBar from './UserBar';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Search />
      <UserBar />
      <svg className="header-language-uk-icon" width="32px" height="32px">
        <use href={sprite + '#uk'} />
      </svg>
      {/* <div className="header__language-ua">UA</div> */}
      <button className="header__login-button" type="button">
        Вхід для своїх
      </button>
    </StyledHeader>
  );
};

export default Header;
