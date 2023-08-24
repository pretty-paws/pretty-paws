import styled from 'styled-components';

export const StyledFooterLogo = styled.div`
  .footer__logo {
    width: 176px;
    height: 32px;
    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      width: 255px;
      height: 46px;
    }
  }

  .footer__logo-text {
    margin-top: 9px;
    margin-bottom: 19px;
    color: #111;
    font-size: 16px;
    font-weight: 500;
    line-height: 21.12px;

    @media screen and (min-width: 834px) {
      max-width: 172px;
      margin-top: 11px;
      margin-bottom: 0;
    }

    @media screen and (min-width: 1440px) {
    }
  }
`;
