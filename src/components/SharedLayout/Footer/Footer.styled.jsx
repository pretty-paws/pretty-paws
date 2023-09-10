import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;
  margin: 32px 0 16px;

  @media screen and (min-width: 834px) {
    margin: 40px 0;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    height: 360px;
  }

  @media screen and (min-width: 1440px) {
    /* justify-content: left; */
    /* gap: 60px; */
  }
`;
