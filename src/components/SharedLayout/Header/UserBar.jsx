import React, { useEffect, useState } from 'react';
import ToolTip from '../../../hooks/useTooltip';
import useWindowSize from '../../../hooks/useWindowSize';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { StyledUserBar } from './UserBar.styled';
import { observer } from 'mobx-react-lite';
import { createPortal } from 'react-dom';
import CartModal from './CartModal/CartModal';
import { useStore } from '../../../store/AuthProvider';

const UserBar = observer(({ setActive }) => {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  // const [language, setLanguage] = useState(
  //   localStorage.getItem('language') || 'ua'
  // );
  const { screen } = useWindowSize();
  const location = useLocation();

  const { i18n, t } = useTranslation();

  const store = useStore();
  const {
    auth: { authorised, state, language, setLanguage, favouritesArray },
    cart: { productAmount },
    comparison: { comparisonAmount },
    // favourite: { favourite },
  } = store;

  const handleLanguageChange = lang => {
    // localStorage.setItem('language', lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    location.pathname === '/cart' && setCartModalOpen(false);
  }, [location.pathname]);

  return (
    <>
      <StyledUserBar>
        <ToolTip
          text={t('Необхідно авторизуватись')}
          authorised={authorised}
          screen={screen}
        >
          <NavLink
            to={authorised && '/cabinet/wish_list'}
            className={({ isActive }) =>
              isActive && authorised ? 'active-link' : 'unauthorised'
            }
          >
            <div
              onClick={() => {
                if (authorised && screen !== 'desktop') setActive(false);
              }}
              className={
                authorised
                  ? 'user-bar__container'
                  : 'user-bar__container unauthorised'
              }
            >
              <svg className="user-bar__icon">
                <use href={sprite + '#favorite'} />
              </svg>
              {state === 'done' && authorised && (
                <span className="user-bar__basket-badge">
                  {favouritesArray.length}
                </span>
              )}
              {screen !== 'desktop' && (
                <span className="menu__item">{t('Улюблені товари')}</span>
              )}
            </div>
          </NavLink>
        </ToolTip>
        {/* <ToolTip text={t('Порівняти')}> */}
        <NavLink
          to="/comparison"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          <div
            className="user-bar__container"
            onClick={() => screen !== 'desktop' && setActive(false)}
          >
            <svg className="user-bar__icon">
              <use href={sprite + '#scale'} />
            </svg>
            <span className="user-bar__basket-badge">{comparisonAmount}</span>
            {screen !== 'desktop' && (
              <span className="menu__item">{t('Порівняння')}</span>
            )}
          </div>
        </NavLink>
        {/* </ToolTip> */}
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          <div
            className="user-bar__container"
            onMouseEnter={() =>
              screen === 'desktop' &&
              location.pathname !== '/cart' &&
              setCartModalOpen(true)
            }
            onClick={() => screen !== 'desktop' && setActive(false)}
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
          <>
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
          </>
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
