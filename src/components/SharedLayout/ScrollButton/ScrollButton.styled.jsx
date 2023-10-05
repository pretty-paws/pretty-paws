import styled from 'styled-components';

export const Button = styled.div`
  position: fixed;
  width: 44px;
  height: 44px;
  right: 4%;
  bottom: 40px;
  z-index: 100;
  cursor: pointer;
  transition: all var(--transition);

  @media screen and (min-width: 834px) {
    width: 72px;
    height: 72px;
  }

  /* @media screen and (min-width: 1440px) {
  } */
`;
