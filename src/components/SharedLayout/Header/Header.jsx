import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { StyledHeader } from './Header.styled';
import sprite from '../../../img/svg-sprite/sprite.svg';

import Logo from './Logo';
import Search from './Search';
import UserBar from './UserBar';
import UserModal from './UserModal/UserModal';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <StyledHeader>
      <Logo />
      <Search />
      <UserBar />
      <svg className="header-language-uk-icon" width="32px" height="32px">
        <use href={sprite + '#uk'} />
      </svg>
      {/* <div className="header__language-ua">UA</div> */}
      <button
        className="header__login-button"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Вхід для своїх
      </button>
      {showModal &&
        createPortal(
          <UserModal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </StyledHeader>
  );
};

export default Header;
