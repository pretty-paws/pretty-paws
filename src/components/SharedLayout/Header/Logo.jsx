import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledLogo } from './Logo.styled';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <StyledLogo>
          <use href={sprite + '#logo'} />
        </StyledLogo>
      </Link>
    </div>
  );
};

export default Logo;
