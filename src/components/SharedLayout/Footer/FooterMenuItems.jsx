import React from 'react';
import { Link } from 'react-router-dom';
import { clients, info } from '../../../utils/footerMenuItems';
import { StyledFooterBox } from './FooterMenuItems.styled';
// import useWidnowSize from '../../../hooks/useWindowSize';

const FooterMenuItems = () => {
  // const { screen } = useWidnowSize();
  return (
    <>
      <StyledFooterBox>
        <div>
          <h3 className="footer-menu-title">Клієнтам</h3>

          <ul className="footer-menu-list">
            {clients.map(({ name, path }) => {
              return (
                <Link key={name} to={path}>
                  <li className="footer-menu-item">{name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="footer-menu-title">Інформація</h3>
          <ul className="footer-menu-list">
            {info.map(({ name, path }) => {
              return (
                <Link key={name} to={path}>
                  <li className="footer-menu-item">{name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </StyledFooterBox>
    </>
  );
};

export default FooterMenuItems;
