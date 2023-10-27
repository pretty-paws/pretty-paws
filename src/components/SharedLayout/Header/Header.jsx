import React, { useState } from 'react';
// import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.styled';
import sprite from '../../../img/svg-sprite/sprite.svg';

import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/AuthProvider';

import Logo from './Logo/Logo';
import Search from './SearchBar/Search';
import UserBar from './UserBar';
import useWindowSize from '../../../hooks/useWindowSize';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useTranslation } from 'react-i18next';
// import CartModal from './CartModal/CartModal';

const Header = observer(() => {
  const { t } = useTranslation();
  const [menuActive, setMenuActive] = useState(false);
  // const [cartModalOpen, setCartModalOpen] = useState(false);
  const { screen } = useWindowSize();

  const store = useStore();
  const {
    auth: { authorised },
  } = store;

  if (menuActive) {
    document.body.classList.add('menu-opened');
  } else {
    document.body.classList.remove('menu-opened');
  }

  return (
    <StyledHeader>
      {screen !== 'desktop' && (
        <BurgerMenu active={menuActive} setActive={setMenuActive} />
      )}
      {screen !== 'desktop' && (
        <>
          <div className="header-menu-box">
            <svg
              className="header-menu-icon"
              width="20px"
              height="16px"
              onClick={() => setMenuActive(!menuActive)}
            >
              <use href={sprite + '#menu'} />
            </svg>

            <Logo />
            {screen === 'tablet' && <Search />}
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              <div className="header__basket">
                <svg className="header__basket-icon" width="24px" height="24px">
                  <use href={sprite + '#basket'} />
                </svg>
                <span className="header__basket-badge">0</span>
              </div>
            </NavLink>
            <NavLink
              to={authorised === true ? '/cabinet' : '/login'}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              <button className="header__login-button" type="button">
                <svg
                  className="header__profile-icon"
                  width="24px"
                  height="24px"
                >
                  <use href={sprite + '#profile'} />
                </svg>
              </button>
            </NavLink>
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
              <NavLink to="/cabinet">
                <button className="header__cabinet-button" type="button">
                  {t('Мій кабінет')}
                </button>
              </NavLink>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="header__login-button" type="button">
                {t('Вхід для своїх')}
              </button>
            </NavLink>
          )}
        </div>
      )}
    </StyledHeader>
  );
});

export default Header;
