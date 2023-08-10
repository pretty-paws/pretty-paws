import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledLogo } from './Logo.styled';

const Logo = () => {
  return (
    <div>
      <StyledLogo>
        <use href={sprite + '#logo'} />
      </StyledLogo>
    </div>
  );
};

export default Logo;
