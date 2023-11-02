import React, { useState } from 'react';
import ToolTip from '../../../hooks/useTooltip';
import useWindowSize from '../../../hooks/useWindowSize';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { StyledUserBar } from './UserBar.styled';
import { observer } from 'mobx-react-lite';
import { createPortal } from 'react-dom';
import CartModal from './CartModal/CartModal';
import { useStore } from '../../../store/AuthProvider';

const UserBar = observer(({ setActive }) => {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'ua'
  );
  const { screen } = useWindowSize();

  const { i18n, t } = useTranslation();

  const handleLanguageChange = lang => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const store = useStore();
  const {
    auth: { authorised, user, state },
    cart: {
      productAmount,

      // getProductByID, cartProducts
    },
  } = store;

  return (
    <>
      <StyledUserBar onClick={() => screen === 'mobile' && setActive(false)}>
        <ToolTip text={t('Улюблені товари')}>
          <NavLink
            to="/cabinet/wish_list"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <div className="user-bar__container">
              <svg className="user-bar__icon">
                <use href={sprite + '#favorite'} />
              </svg>
              {state === 'done' && authorised && (
                <span className="user-bar__basket-badge">
                  {user.favorites.length}
                </span>
              )}
              {screen !== 'desktop' && (
                <span className="menu__item">{t('Улюблені товари')}</span>
              )}
            </div>
          </NavLink>
        </ToolTip>
        <ToolTip text={t('Порівняти')}>
          <NavLink
            to="/comparison"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <div className="user-bar__container">
              <svg className="user-bar__icon">
                <use href={sprite + '#scale'} />
              </svg>
              <span className="user-bar__basket-badge">0</span>
              {screen !== 'desktop' && (
                <span className="menu__item">{t('Порівняння')}</span>
              )}
            </div>
          </NavLink>
        </ToolTip>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          <div
            className="user-bar__container"
            onMouseEnter={() => screen === 'desktop' && setCartModalOpen(true)}
          >
            <svg className="user-bar__icon">
              <use href={sprite + '#basket'} />
            </svg>
            <span className="user-bar__basket-badge">{productAmount}</span>
            {screen !== 'desktop' && (
              <span className="menu__item">{t('Кошик')}</span>
            )}
          </div>
        </NavLink>
        {screen === 'desktop' && (
          <ToolTip text={t('Змінити мову')}>
            {language === 'en' && (
              <div onClick={() => handleLanguageChange('ua')}>
                <svg
                  className="user-bar-language-uk-icon"
                  width="24px"
                  height="24px"
                >
                  <use href={sprite + '#ua'} />
                </svg>
              </div>
            )}

            {language === 'ua' && (
              <div onClick={() => handleLanguageChange('en')}>
                <svg
                  className="user-bar-language-uk-icon"
                  width="24px"
                  height="24px"
                >
                  <use href={sprite + '#uk'} />
                </svg>
              </div>
            )}
          </ToolTip>
        )}
      </StyledUserBar>
      {cartModalOpen === true && screen === 'desktop'
        ? createPortal(
            <CartModal setCartModalOpen={setCartModalOpen} />,
            document.body
          )
        : null}
    </>
  );
});

export default UserBar;
