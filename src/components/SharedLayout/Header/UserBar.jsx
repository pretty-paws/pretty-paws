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
      <ToolTip className="user-bar__container" text="Порівняти">
        <svg className="user-bar__icon">
          <use href={sprite + '#scale'} />
        </svg>
        <span className="user-bar__basket-badge">0</span>
      </ToolTip>
      <ToolTip className="user-bar__container" text="Корзина">
        <svg className="user-bar__icon">
          <use href={sprite + '#basket'} />
        </svg>
        <span className="user-bar__basket-badge">0</span>
      </ToolTip>
      <ToolTip text="Змінити мову">
        <svg className="user-bar-language-uk-icon" width="24px" height="24px">
          <use href={sprite + '#uk'} />
        </svg>
      </ToolTip>
    </StyledUserBar>
  );
};

export default UserBar;
