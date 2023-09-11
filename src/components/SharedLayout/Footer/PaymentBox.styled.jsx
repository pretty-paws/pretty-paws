import styled from 'styled-components';

export const StyledSocialNetsBar = styled.div`
  @media screen and (min-width: 834px) {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
  & .payment-bar__title {
    margin-bottom: 16px;
    color: var(--accent-color-blue);
    font-size: 18px;

    font-weight: 500;
    line-height: 21.6px;

    @media screen and (min-width: 834px) {
      position: absolute;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 24px;
    }
  }

  .payment-bar__first-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
  }

  .footer__rights {
    padding-top: 17px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
`;
