import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledFooterLogo } from './FooterLogo.styled';

// import useWidnowSize from '../../../hooks/useWindowSize';

const FooterLogo = () => {
  const { t } = useTranslation();
  return (
    <StyledFooterLogo>
      <Link to="/">
        <svg className="footer__logo">
          <use href={sprite + '#logo'} />
        </svg>
      </Link>
      <p className="footer__logo-text">
        {t(
          'Забезпечте своїх улюбленців якісними товарами за доступними цінами. Бо вони заслуговують найкраще!'
        )}
      </p>
    </StyledFooterLogo>
  );
};

export default FooterLogo;
