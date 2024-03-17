import React, { useEffect, useState } from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledNavigation } from './Navigation.styled';
import { NavLink, useLocation } from 'react-router-dom';
import { publicRoutes } from '../../../routes';
import { useTranslation } from 'react-i18next';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import { CATALOG_ROUTE } from '../../../utils/consts';
const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  console.log('', location.pathname);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleMouseEnter = () => {
    !location.pathname.startsWith('/catalog/animal/') && setIsMenuVisible(true);
  };
  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  useEffect(() => {
    location.pathname.startsWith('/catalog/animal/') && setIsMenuVisible(false);
  }, [location.pathname]);

  return (
    <StyledNavigation>
      <NavLink
        to="/catalog"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg className="navigation-icon" width="24px" height="24px">
          <use href={sprite + '#arrow-down'} />
        </svg>
      </NavLink>
      {isMenuVisible && (
        <CategoryMenu
          mouseLeave={handleMouseLeave}
          data__visible={isMenuVisible}
        />
      )}

      <ul className="navigation-list">
        {publicRoutes &&
          publicRoutes.map(({ name, path }) => {
            if (name === 'Контакти') {
              return (
                <li
                  key={path}
                  onClick={() => window.scrollTo(0, document.body.scrollHeight)}
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? 'active-link' : ''
                    }
                  >
                    {t(`${name}`)}
                  </NavLink>
                </li>
              );
            }
            return (
              <li key={path}>
                <NavLink
                  onMouseEnter={() => {
                    if (
                      path === CATALOG_ROUTE &&
                      !location.pathname.startsWith('/catalog/animal/')
                    ) {
                      setIsMenuVisible(true);
                    }
                  }}
                  to={path}
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  {t(`${name}`)}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
