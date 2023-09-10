import styled from 'styled-components';

export const StyledFooterBox = styled.div`
  display: flex;
  gap: 32px;

  @media screen and (min-width: 834px) {
    gap: 44px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 25px;
    flex: 2;
    justify-content: space-around;
  }

  & .footer-menu-title {
    margin-bottom: 18px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    @media screen and (min-width: 1440px) {
      margin-bottom: 25px;
    }
  }

  & .footer-menu-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width: 834px) {
      gap: 22px;
    }
  }
  & .footer-menu-item {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

    @media screen and (min-width: 1440px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
