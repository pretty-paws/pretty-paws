import styled from 'styled-components';

export const StyledSocialBar = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
  z-index: 30;

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;
