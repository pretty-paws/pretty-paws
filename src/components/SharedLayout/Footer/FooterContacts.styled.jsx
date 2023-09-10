import styled from 'styled-components';

export const StyledFooterContacts = styled.div`
  display: flex;
  gap: 35px;
  flex: 1;

  @media screen and (min-width: 834px) {
    flex-direction: column;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex: 1;
    gap: 24px;
  }

  & .footer-menu-title {
    margin-bottom: 18px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    @media screen and (min-width: 834px) {
      margin-bottom: 16px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 25px;
    }
  }

  & .footer-menu-phone {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    @media screen and (min-width: 1440px) {
      font-size: 16px;
    }
  }

  & .footer-menu-text {
    font-size: 12px;
    line-height: 16px;
    @media screen and (min-width: 1440px) {
      font-size: 14px;
    }
  }

  & .footer-menu-list {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & .footer-menu-time {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    @media screen and (min-width: 1440px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
