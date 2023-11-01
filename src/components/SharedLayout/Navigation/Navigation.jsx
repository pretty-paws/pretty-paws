import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledNavigation } from './Navigation.styled';
import { NavLink } from 'react-router-dom';
import { publicRoutes } from '../../../routes';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <StyledNavigation>
      <NavLink to="/catalog">
        <svg className="navigation-icon" width="24px" height="24px">
          <use href={sprite + '#arrow-down'} />
        </svg>
      </NavLink>
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
