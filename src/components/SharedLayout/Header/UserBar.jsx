import React from 'react';
import ToolTip from '../../../hooks/useTooltip';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledUserBar } from './UserBar.styled';

const UserBar = () => {
  return (
    <StyledUserBar>
      <ToolTip text="Улюблені товари">
        <svg className="user-bar__icon">
          <use href={sprite + '#favourite'} />
        </svg>
      </ToolTip>
      <ToolTip text="Порівняти">
        <svg className="user-bar__icon">
          <use href={sprite + '#scale'} />
        </svg>
      </ToolTip>
      <ToolTip text="Корзина">
        <svg className="user-bar__icon">
          <use href={sprite + '#basket'} />
        </svg>
      </ToolTip>
    </StyledUserBar>
  );
};

export default UserBar;
