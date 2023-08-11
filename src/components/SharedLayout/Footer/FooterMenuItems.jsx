import React from 'react';
import { MENU } from '../../../utils/footerMenuItems';
import FooterContacts from './FooterContacts';
import { StyledFooterBox } from './FooterMenuItems.styled';

const FooterMenuItems = () => {
  return (
    <>
      <StyledFooterBox>
        <h3 className="footer-menu-title">Каталог товарів</h3>
        <ul>
          {MENU[0].catalog.map(item => {
            return (
              <li className="footer-menu-item" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </StyledFooterBox>
      <StyledFooterBox>
        <h3 className="footer-menu-title">Клієнтам</h3>
        <ul>
          {MENU[1].clients.map(item => {
            return (
              <li className="footer-menu-item" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </StyledFooterBox>
      <StyledFooterBox>
        <h3 className="footer-menu-title">Корисне</h3>
        <ul>
          {MENU[2].useful.map(item => {
            return (
              <li className="footer-menu-item" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </StyledFooterBox>
      <FooterContacts />
    </>
  );
};

export default FooterMenuItems;
