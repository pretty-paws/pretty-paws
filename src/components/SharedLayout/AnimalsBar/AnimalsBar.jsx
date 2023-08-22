import React from 'react';
import { StyledAnimalsBar } from './AnimalsBar.styled';
import { animalsSvg } from '../../../utils/animalBarSvgLinks';
import { Link } from 'react-router-dom';

const AnimalsBar = () => {
  return (
    <StyledAnimalsBar>
      {animalsSvg.map(item => {
        return (
          <Link to="/" key={item}>
            <div className="animals-bar-icon-box">
              <svg className="animals-bar-icon" width="24px" height="24px">
                <use href={item} />
              </svg>
            </div>
          </Link>
        );
      })}
    </StyledAnimalsBar>
  );
};

export default AnimalsBar;
