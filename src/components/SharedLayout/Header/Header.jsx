import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { StyledHeader } from './Header.styled';
import sprite from '../../../img/svg-sprite/sprite.svg';

import { observer } from 'mobx-react-lite';
import { useAuthStore } from '../../../store/AuthProvider';

import Logo from './Logo/Logo';
import Search from './SearchBar/Search';
import UserBar from './UserBar';
import UserModal from './UserModal/UserModal';
import useWindowSize from '../../../hooks/useWindowSize';

const Header = observer(() => {
  const { screen } = useWindowSize();
  const { email, authorised } = useAuthStore();
  const [showModal, setShowModal] = useState(false);

  return (
    <StyledHeader>
      <Logo />
      <Search />
      <UserBar />
      {screen === 'mobile' && (
        <svg width="20px" height="16px">
          <use href={sprite + '#menu'} />
        </svg>
      )}
      <svg className="header-language-uk-icon" width="32px" height="32px">
        <use href={sprite + '#uk'} />
      </svg>
      {authorised.toString() === 'true' ? (
        <div className="header__registered-user">
          <p className="header__registered-user-email">{email}</p>
          <button
            className="header__logout-button"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Кабінет
          </button>
        </div>
      ) : (
        <button
          className="header__login-button"
          type="button"
          onClick={() => setShowModal(true)}
        >
          {screen === 'mobile' ? 'Вхід' : 'Вхід для своїх'}
        </button>
      )}

      {showModal &&
        createPortal(
          <UserModal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </StyledHeader>
  );
});

export default Header;
