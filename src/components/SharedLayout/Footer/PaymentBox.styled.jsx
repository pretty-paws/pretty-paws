import styled from 'styled-components';

export const StyledSocialNetsBar = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;

  @media screen and (min-width: 834px) {
    position: absolute;
    bottom: 25px;
    left: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 4px;
  }

  @media screen and (min-width: 1440px) {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  & .payment-bar__title {
    margin-bottom: 16px;
    color: var(--accent-color-blue);
    font-size: 18px;

    font-weight: 500;
    line-height: 21.6px;

    @media screen and (min-width: 834px) {
      margin-bottom: 15px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 24px;
    }
  }

  .payment-bar__first-group {
    display: flex;
    align-items: center;
    justify-content: left;
  }
`;
