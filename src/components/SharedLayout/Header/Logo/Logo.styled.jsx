import styled from 'styled-components';

export const StyledLogoContainer = styled.div`
  .logo {
    display: none;
  }

  @media screen and (min-width: 834px) {
    .logo {
      display: block;
      height: 34px;
      width: 218px;
    }
    .logo-mob {
      display: none;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 46px;
    width: 255px;
  }
`;
