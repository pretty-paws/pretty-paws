import styled from 'styled-components';

export const StyledFooterBox = styled.div`
  & .footer-menu-title {
    margin-bottom: 8px;
    color: var(--accent-color-blue);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;

    @media screen and (min-width: 834px) {
      margin-bottom: 16px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 25px;
    }
  }

  & .footer-menu-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  & .footer-menu-item {
    color: #4d4d4d;
    font-size: 16px;
    font-weight: 400;
    line-height: 21.12px;
  }
`;
