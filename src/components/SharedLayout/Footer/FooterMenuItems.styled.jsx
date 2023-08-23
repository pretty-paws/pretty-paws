import styled from 'styled-components';

export const StyledFooterBox = styled.div`
  flex: 1;
  & .footer-menu-title {
    margin-bottom: 25px;
    color: var(--accent-color-blue);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
  }

  & .footer-menu-item {
    color: #4d4d4d;
    font-size: 16px;
    font-weight: 400;
    line-height: 2.1;
  }
`;
