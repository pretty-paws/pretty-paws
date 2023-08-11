import React from 'react';
import { StyledFooterContacts } from './FooterContacts.styled';

const FooterContacts = () => {
  return (
    <StyledFooterContacts>
      <h3 className="footer-menu-title">Контакти</h3>
      <p className="footer-menu-phone">0 800 00 00 00</p>
      <p className="footer-menu-text">Безкоштовно по Україні</p>
      <p className="footer-menu-text">Графік роботи call-центру</p>
      <ul className="footer-menu-list">
        <li className="footer-menu-time">ПН - ПТ: 09:00 - 20:00</li>
        <li className="footer-menu-time">СБ: 09:00 - 18:00</li>
        <li className="footer-menu-time">НД: 09:00 - 18:00</li>
      </ul>
    </StyledFooterContacts>
  );
};

export default FooterContacts;
