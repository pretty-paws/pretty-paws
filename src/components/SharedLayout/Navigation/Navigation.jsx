import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledNavigation } from './Navigation.styled';

const Navigation = () => {
  return (
    <StyledNavigation>
      <svg className="navigation-icon" width="15px" height="12px">
        <use href={sprite + '#menu'} />
      </svg>
      <ul className="navigation-list">
        <li>Каталог товарів</li>
        <li>Акції</li>
        <li>Новинки</li>
        <li>Контакти</li>
        <li>Доставка і оплата</li>
        <li>Допомога тваринкам</li>
        <li>Блог</li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
