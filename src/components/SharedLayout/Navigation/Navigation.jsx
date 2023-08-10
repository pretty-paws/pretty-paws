import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledNavigation } from './Navigation.styled';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink to="/catalog">
        <svg className="navigation-icon" width="15px" height="12px">
          <use href={sprite + '#menu'} />
        </svg>
      </NavLink>
      <ul className="navigation-list">
        <li>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Каталог товарів
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/promotions"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Акції
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Новинки
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Контакти
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/delivery"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Доставка &#1110; оплата
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/help"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Допомога тваринкам
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Блог
          </NavLink>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
