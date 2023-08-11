import React from 'react';
import SignUp from './SignUp';

import { StyledFooter } from './Footer.styled';
import FooterMenuItems from './FooterMenuItems';
import SocialNetsBar from './SocialNetsBar';

const Footer = () => {
  return (
    <>
      <SignUp />
      <StyledFooter>
        <FooterMenuItems />
        <SocialNetsBar />
      </StyledFooter>
    </>
  );
};

export default Footer;
