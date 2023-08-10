import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledAnimalsBar } from './AnimalsBar.styled';

const AnimalsBar = () => {
  return (
    <StyledAnimalsBar>
      <div className="animals-bar-icon-box">
        <svg className="animals-bar-icon" width="24px" height="24px">
          <use href={sprite + '#dog'} />
        </svg>
      </div>
      <div className="animals-bar-icon-box">
        <svg className="animals-bar-icon" width="24px" height="24px">
          <use href={sprite + '#cat'} />
        </svg>
      </div>
      <div className="animals-bar-icon-box">
        <svg className="animals-bar-icon" width="24px" height="24px">
          <use href={sprite + '#mouse'} />
        </svg>
      </div>
      <div className="animals-bar-icon-box">
        <svg className="animals-bar-icon" width="24px" height="24px">
          <use href={sprite + '#fish'} />
        </svg>
      </div>
      <div className="animals-bar-icon-box">
        <svg className="animals-bar-icon" width="24px" height="24px">
          <use href={sprite + '#bird'} />
        </svg>
      </div>
      <div className="animals-bar-icon-box">
        <svg className="animals-bar-icon" width="24px" height="24px">
          <use href={sprite + '#lizard'} />
        </svg>
      </div>
    </StyledAnimalsBar>
  );
};

export default AnimalsBar;
