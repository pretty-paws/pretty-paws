import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { StyledLogoContainer } from './Logo.styled';

const Logo = () => {
  return (
    <StyledLogoContainer>
      <Link to="/">
        <svg className="logo">
          <use href={sprite + '#logo'} />
        </svg>
        <svg className="logo-mob" height="32px" width="76px">
          <use href={sprite + '#logo-mob'} />
        </svg>
      </Link>
    </StyledLogoContainer>
  );
};

export default Logo;
