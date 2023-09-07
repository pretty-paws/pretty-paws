import React from 'react';
import ToolTip from '../../../hooks/useTooltip';
import useWindowSize from '../../../hooks/useWindowSize';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledUserBar } from './UserBar.styled';

const UserBar = ({ setActive }) => {
  const { screen } = useWindowSize();
  return (
    <StyledUserBar>
      <ToolTip text="Улюблені товари">
        <NavLink
          to="/favorite"
          onClick={() => screen !== 'desktop' && setActive(false)}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          <div className="user-bar__container">
            <svg className="user-bar__icon">
              <use href={sprite + '#favourite'} />
            </svg>
            {screen !== 'desktop' && (
              <span className="menu__item">Улюблені товари</span>
            )}
          </div>
        </NavLink>
      </ToolTip>
      <ToolTip text="Порівняти">
        <NavLink
          to="/comparison"
          onClick={() => screen !== 'desktop' && setActive(false)}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          <div className="user-bar__container">
            <svg className="user-bar__icon">
              <use href={sprite + '#scale'} />
            </svg>
            <span className="user-bar__basket-badge">0</span>
            {screen !== 'desktop' && (
              <span className="menu__item">Порівняння</span>
            )}
          </div>
        </NavLink>
      </ToolTip>
      <ToolTip className="user-bar__container" text="Корзина">
        <NavLink
          to="/cart"
          onClick={() => screen !== 'desktop' && setActive(false)}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          <div className="user-bar__container">
            <svg className="user-bar__icon">
              <use href={sprite + '#basket'} />
            </svg>
            <span className="user-bar__basket-badge">0</span>
            {screen !== 'desktop' && <span className="menu__item">Кошик</span>}
          </div>
        </NavLink>
      </ToolTip>
      {screen === 'desktop' && (
        <ToolTip text="Змінити мову">
          <svg className="user-bar-language-uk-icon" width="24px" height="24px">
            <use href={sprite + '#uk'} />
          </svg>
        </ToolTip>
      )}
    </StyledUserBar>
  );
};

export default UserBar;

UserBar.propTypes = {
  setActive: PropTypes.func,
};
