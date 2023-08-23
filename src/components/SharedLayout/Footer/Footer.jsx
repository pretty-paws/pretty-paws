import React from 'react';
import SignUp from './SignUp';

import { StyledFooter } from './Footer.styled';
import FooterMenuItems from './FooterMenuItems';
import PaymentBox from './PaymentBox';
import FooterLogo from './FooterLogo';
import FooterContacts from './FooterContacts';
import { GlobalContainer } from '../../../global/GlobalContainer';

const Footer = () => {
  return (
    <>
      <SignUp />
      <GlobalContainer>
        <StyledFooter>
          <FooterLogo />
          <FooterContacts />
          <FooterMenuItems />
          <PaymentBox />
        </StyledFooter>
      </GlobalContainer>
    </>
  );
};

export default Footer;
