import styled from 'styled-components';

export const StyledFooterContacts = styled.div`
  & .footer-menu-title {
    color: var(--accent-color-blue);
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 500;
    line-height: 23.76px;

    @media screen and (min-width: 834px) {
      margin-bottom: 16px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 25px;
    }
  }

  & .footer-menu-phone {
    color: var(--font-color-black);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 132%; /* 26.4px */
  }

  & .footer-menu-text {
    color: var(--font-color-gray);
    font-size: 14px;
    line-height: 1.8;
  }

  & .footer-menu-list {
    margin-top: 8px;
  }

  & .footer-menu-time {
    color: #212529;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  & .footer-contacts__social-bar {
    display: flex;
    gap: 8px;
    margin-top: 27px;

    @media screen and (min-width: 834px) {
      gap: 8px;
    }

    @media screen and (min-width: 1440px) {
      gap: 12px;
    }
  }
`;
