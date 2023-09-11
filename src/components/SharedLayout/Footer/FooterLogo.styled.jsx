import styled from 'styled-components';

export const StyledFooterLogo = styled.div`
  text-align: center;

  @media screen and (min-width: 834px) {
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    flex: 1;
  }

  .footer__logo {
    width: 177px;
    height: 30px;

    @media screen and (min-width: 1440px) {
      width: 170px;
      height: 32px;
    }
  }

  .footer__logo-text {
    margin-top: 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

    @media screen and (min-width: 1440px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
