import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 375px;
  position: relative;
  padding: 21px 0 23px;

  @media screen and (min-width: 834px) {
    display: flex;
    height: auto;
    padding: 26px 0;
    flex-direction: row;
    gap: 17px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
