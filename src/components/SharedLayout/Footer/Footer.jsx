import React from 'react';
import SignUp from './SignUp';

import { StyledFooter } from './Footer.styled';
import FooterMenuItems from './FooterMenuItems';
import PaymentBox from './PaymentBox';
import FooterLogo from './FooterLogo';
import FooterContacts from './FooterContacts';
import { GlobalContainer } from '../../../global/GlobalContainer';
import FooterSocialBar from './FooterSocialBar';
import useWidnowSize from '../../../hooks/useWindowSize';

const Footer = () => {
  const { screen } = useWidnowSize();
  return (
    <>
      <SignUp />
      <footer>
        <GlobalContainer>
          <StyledFooter>
            <FooterLogo />
            <FooterContacts />
            {screen === 'mobile' && <FooterSocialBar />}
            <FooterMenuItems />
            <PaymentBox />
          </StyledFooter>
        </GlobalContainer>
      </footer>
    </>
  );
};

export default Footer;
