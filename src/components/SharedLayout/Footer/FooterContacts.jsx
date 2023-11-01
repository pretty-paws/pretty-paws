import React from 'react';
import { StyledFooterContacts } from './FooterContacts.styled';

import useWidnowSize from '../../../hooks/useWindowSize';
import FooterSocialBar from './FooterSocialBar';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const FooterContacts = () => {
  const { screen } = useWidnowSize();
  const { t } = useTranslation();
  const location = useLocation();
  console.log(location);

  return (
    <StyledFooterContacts>
      {location?.pathname === '/contact' && (
        <div
          className={location?.pathname === '/contact' ? 'contacts-page' : ''}
        />
      )}

      <div className="z-index">
        <h3 className="footer-menu-title">{t('Контакти')}</h3>
        <p className="footer-menu-phone">0 800 00 00 00</p>
        <p className="footer-menu-text">{t('Безкоштовно по Україні')}</p>
      </div>
      <div className="z-index">
        <p className="footer-menu-title">{t('Графік роботи call-центру')}</p>
        <ul className="footer-menu-list">
          <li className="footer-menu-time">{t('ПН - ПТ')}: 09:00 - 20:00</li>
          <li className="footer-menu-time">{t('СБ')}: 09:00 - 18:00</li>
          <li className="footer-menu-time">{t('НД')}: 09:00 - 18:00</li>
        </ul>
      </div>
      {screen !== 'mobile' && (
        <div className="z-index">
          <FooterSocialBar />
        </div>
      )}
    </StyledFooterContacts>
  );
};

export default FooterContacts;
