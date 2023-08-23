import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledFooterLogo } from './FooterLogo.styled';

const FooterLogo = () => {
  return (
    <StyledFooterLogo>
      <Link to="/">
        <svg width="255px" height="46px">
          <use href={sprite + '#logo'} />
        </svg>
      </Link>
      <p className="footer__logo-text">
        У нас є все для ваших пухнастих друзів. Забезпечте своїх улюбленців
        якісними товарами за доступними цінами. Бо вони заслуговують найкраще!
      </p>
    </StyledFooterLogo>
  );
};

export default FooterLogo;
