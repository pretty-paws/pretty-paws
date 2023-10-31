import React from 'react';
import { Link } from 'react-router-dom';
import { clients, info } from '../../../utils/footerMenuItems';
import { StyledFooterBox } from './FooterMenuItems.styled';
import { useTranslation } from 'react-i18next';

const FooterMenuItems = () => {
  const { t } = useTranslation();

  return (
    <>
      <StyledFooterBox>
        <div>
          <h3 className="footer-menu-title">{t('Клієнтам')}</h3>

          <ul className="footer-menu-list">
            {clients.map(({ name, path }) => {
              return (
                <Link
                  key={name}
                  to={path}
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                  }
                >
                  <li className="footer-menu-item">{t(`${name}`)}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="footer-menu-title">{t('Інформація')}</h3>
          <ul className="footer-menu-list">
            {info.map(({ name, path }) => {
              return (
                <Link
                  key={name}
                  to={path}
                  onClick={() =>
                    window.scrollTo({
                      top: 1000,
                      behavior: 'smooth',
                    })
                  }
                >
                  <li className="footer-menu-item">{t(`${name}`)}</li>
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
