import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledFooterLogo } from './FooterLogo.styled';

// import useWidnowSize from '../../../hooks/useWindowSize';

const FooterLogo = () => {
  // const { screen } = useWidnowSize();
  return (
    <StyledFooterLogo>
      <Link to="/">
        <svg className="footer__logo">
          <use href={sprite + '#logo'} />
        </svg>
      </Link>
      <p className="footer__logo-text">
        Забезпечте своїх улюбленців якісними товарами за доступними цінами. Бо
        вони заслуговують найкраще!
      </p>
    </StyledFooterLogo>
  );
};

export default FooterLogo;
