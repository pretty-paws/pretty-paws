import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { StyledHeader } from './Header.styled';
import sprite from '../../../img/svg-sprite/sprite.svg';

import { useAuthStore } from '../../../store/AuthProvider';

import Logo from './Logo';
import Search from './Search';
import UserBar from './UserBar';
import UserModal from './UserModal/UserModal';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {
  const { authorised, email } = useAuthStore();

  const [showModal, setShowModal] = useState(false);
  return (
    <StyledHeader>
      <Logo />
      <Search />
      <UserBar />
      <svg className="header-language-uk-icon" width="32px" height="32px">
        <use href={sprite + '#uk'} />
      </svg>

      {authorised ? (
        <div className="header__registered-user">
          <p className="header__registered-user-email">{email}</p>
          <button
            className="header__logout-button"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Вхід для своїх
          </button>
        </div>
      ) : (
        <button
          className="header__login-button"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Вхід для своїх
        </button>
      )}

      {showModal &&
        createPortal(
          <UserModal
            isRegistered={authorised}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </StyledHeader>
  );
});

export default Header;
