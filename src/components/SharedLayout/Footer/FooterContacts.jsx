import React from 'react';
import { StyledFooterContacts } from './FooterContacts.styled';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { ReactComponent as Telegram } from '../../../img/svg-sprite/telegram.svg';
import { ReactComponent as Instagram } from '../../../img/svg-sprite/instagram.svg';
import { Link } from 'react-router-dom';

import useWidnowSize from '../../../hooks/useWindowSize';

const FooterContacts = () => {
  const { screen } = useWidnowSize();

  return (
    <StyledFooterContacts>
      <h3 className="footer-menu-title">Контакти</h3>
      {screen !== 'mobile' && (
        <>
          <p className="footer-menu-phone">0 800 00 00 00</p>
          <p className="footer-menu-text">Безкоштовно по Україні</p>
          <p className="footer-menu-text">Графік роботи call-центру</p>
          <ul className="footer-menu-list">
            <li className="footer-menu-time">ПН - ПТ: 09:00 - 20:00</li>
            <li className="footer-menu-time">СБ: 09:00 - 18:00</li>
            <li className="footer-menu-time">НД: 09:00 - 18:00</li>
          </ul>
          <div className="footer-contacts__social-bar">
            <Link to="/">
              <svg className="animals-bar-icon" width="36px" height="36px">
                <use href={sprite + '#facebook'} />
              </svg>
            </Link>
            <Link to="/">
              <Instagram />
            </Link>
            <Link to="/">
              <svg className="animals-bar-icon" width="36px" height="36px">
                <use href={sprite + '#viber'} />
              </svg>
            </Link>
            <Link to="/">
              <Telegram />
            </Link>
          </div>
        </>
      )}
    </StyledFooterContacts>
  );
};

export default FooterContacts;
