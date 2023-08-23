import React from 'react';
import SignUp from './SignUp';

import { StyledFooter } from './Footer.styled';
import FooterMenuItems from './FooterMenuItems';
import SocialNetsBar from './SocialNetsBar';
import FooterLogo from './FooterLogo';
import FooterContacts from './FooterContacts';

const Footer = () => {
  return (
    <>
      <SignUp />
      <StyledFooter>
        <FooterLogo />
        <FooterContacts />
        <FooterMenuItems />
        <SocialNetsBar />
      </StyledFooter>
    </>
  );
};

export default Footer;
