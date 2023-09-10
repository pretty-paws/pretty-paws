import React from 'react';
import { StyledFooterContacts } from './FooterContacts.styled';

import useWidnowSize from '../../../hooks/useWindowSize';
import FooterSocialBar from './FooterSocialBar';

const FooterContacts = () => {
  const { screen } = useWidnowSize();

  return (
    <StyledFooterContacts>
      <div>
        <h3 className="footer-menu-title">Контакти</h3>
        <p className="footer-menu-phone">0 800 00 00 00</p>
        <p className="footer-menu-text">Безкоштовно по Україні</p>
      </div>
      <div>
        <p className="footer-menu-title">Графік роботи call-центру</p>
        <ul className="footer-menu-list">
          <li className="footer-menu-time">ПН - ПТ: 09:00 - 20:00</li>
          <li className="footer-menu-time">СБ: 09:00 - 18:00</li>
          <li className="footer-menu-time">НД: 09:00 - 18:00</li>
        </ul>
      </div>
      {screen !== 'mobile' && (
        <div>
          <FooterSocialBar />
        </div>
      )}
    </StyledFooterContacts>
  );
};

export default FooterContacts;
