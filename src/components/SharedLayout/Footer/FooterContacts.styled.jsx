import styled from 'styled-components';

export const StyledFooterContacts = styled.div`
  & .footer-menu-title {
    color: var(--font-color-gray);
    margin-bottom: 25px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
  }

  & .footer-menu-phone {
    margin-top: 27px;
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
`;
