import React from 'react';
import { Link } from 'react-router-dom';
import { clients, useful, catalog } from '../../../utils/footerMenuItems';
import { StyledFooterBox } from './FooterMenuItems.styled';

const FooterMenuItems = () => {
  return (
    <>
      <StyledFooterBox>
        <h3 className="footer-menu-title">Каталог товарів</h3>
        <ul>
          {catalog.map(({ name, path }) => {
            return (
              <Link key={name} to={path}>
                <li className="footer-menu-item">{name}</li>
              </Link>
            );
          })}
        </ul>
      </StyledFooterBox>
      <StyledFooterBox>
        <h3 className="footer-menu-title">Клієнтам</h3>
        <ul>
          {clients.map(({ name, path }) => {
            return (
              <Link key={name} to={path}>
                <li className="footer-menu-item">{name}</li>
              </Link>
            );
          })}
        </ul>
      </StyledFooterBox>
      <StyledFooterBox>
        <h3 className="footer-menu-title">Корисне</h3>
        <ul>
          {useful.map(({ name, path }) => {
            return (
              <Link key={name} to={path}>
                <li className="footer-menu-item">{name}</li>
              </Link>
            );
          })}
        </ul>
      </StyledFooterBox>
    </>
  );
};

export default FooterMenuItems;
