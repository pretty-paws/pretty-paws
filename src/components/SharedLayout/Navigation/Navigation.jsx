import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledNavigation } from './Navigation.styled';
import { NavLink } from 'react-router-dom';
import { publicRoutes } from '../../../routes';

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink to="/catalog">
        <svg className="navigation-icon" width="15px" height="12px">
          <use href={sprite + '#menu'} />
        </svg>
      </NavLink>
      <ul className="navigation-list">
        {publicRoutes &&
          publicRoutes.map(({ name, path }) => {
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
