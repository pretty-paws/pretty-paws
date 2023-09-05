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
      {screen !== 'desktop' && (
        <>
          <div className="header-menu-box">
            <svg width="20px" height="16px">
              <use href={sprite + '#menu'} />
            </svg>
            <Logo />
            {screen === 'tablet' && <Search />}
            <div className="header__basket">
              <svg className="header__basket-icon" width="24px" height="24px">
                <use href={sprite + '#basket'} />
              </svg>
              <span className="header__basket-badge">0</span>
            </div>
            <button
              className="header__login-button"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <svg className="header__profile-icon" width="24px" height="24px">
                <use href={sprite + '#profile'} />
              </svg>
            </button>
          </div>
          {screen === 'mobile' && <Search />}
        </>
      )}

      {screen === 'desktop' && (
        <div className="header-menu-box">
          <Logo />
          <Search />
          <UserBar />

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
              Вхід для своїх
            </button>
          )}
        </div>
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
