import React from 'react';
import { StyledAnimalsBar } from './AnimalsBar.styled';
import { animalsSvg } from '../../../utils/animalBarSvgLinks';

const AnimalsBar = () => {
  return (
    <StyledAnimalsBar>
      {animalsSvg.map(item => {
        return (
          <div className="animals-bar-icon-box" key={item}>
            <svg className="animals-bar-icon" width="24px" height="24px">
              <use href={item} />
            </svg>
          </div>
        );
      })}
    </StyledAnimalsBar>
  );
};

export default AnimalsBar;
