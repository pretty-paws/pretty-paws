import React from 'react';
import { StyledHeader } from './Header.styled';

import Logo from './Logo';
import Search from './Search';
import UserBar from './UserBar';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Search />
      <UserBar />
      <div className="header__language-ua">UA</div>
      <button className="header__login-button" type="button">
        Вхід для своїх
      </button>
    </StyledHeader>
  );
};

export default Header;
