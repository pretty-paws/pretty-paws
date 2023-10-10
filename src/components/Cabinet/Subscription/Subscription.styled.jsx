import styled from 'styled-components';

export const StyledSubscription = styled.div`
  position: relative;
  @media screen and (min-width: 834px) {
    width: 100%;
    border-radius: 8px;
    background: #fff;
    height: fit-content;
    padding: 40px 24px;
  }
  .subscription__header-box {
    position: relative;
    margin-bottom: 24px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    background-color: var(--accent-color-beige);

    @media screen and (min-width: 834px) {
      background-color: transparent;
      padding: 0;
    }

    @media screen and (min-width: 1440px) {
      justify-content: space-between;
      margin-bottom: 40px;
    }
  }

  .subscription__arrow {
    margin-left: 10px;
    transform: rotate(90deg);
  }

  .subscription__header {
    font-size: 20px;
    font-weight: 500;
    line-height: 130%;
    margin: 0 120px 0 30px;

    @media screen and (min-width: 834px) {
      margin: 0;
      font-size: 24px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }
  }

  .subscription__body {
    margin: 28px 16px 0;
    @media screen and (min-width: 834px) {
      margin: 44px 0 0;
    }
    @media screen and (min-width: 834px) {
      margin-top: 54px;
    }
  }
  .subscription__text {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    @media screen and (min-width: 834px) {
      font-weight: 400;
    }
  }

  .subscription__nothing {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 24px;
    @media screen and (min-width: 834px) {
      font-size: 20px;
    }
  }

  .subscription__decline {
    color: var(--font-color-darkgray);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    @media screen and (min-width: 834px) {
      padding-right: 32px;
    }
  }

  & .subscription__box {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  & .subscription__category {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 834px) {
      margin-bottom: 40px;
    }

    @media screen and (min-width: 1440px) {
    }
  }

  & .animals-bar-icon-box {
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: var(--accent-color-beige);

    /* &:hover {
      fill: #fff;
      background-color: var(--accent-color-beige);
    } */
  }

  .subscription__button {
    margin: 14px 0 50px;
    width: 100%;
    height: 52px;
    border-radius: 100px;
    background: var(--accent-color-blue);
    border: none;

    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: var(--font-color-black);

    @media screen and (min-width: 834px) {
      margin: 0;
      width: 235px;
    }

    @media screen and (min-width: 1440px) {
    }

    &:hover {
      background-color: var(--hover-blue);
      opacity: 1;
      color: var(--font-color-black);
    }

    transition: all var(--transition);
  }

  & .subscription__button.desktop {
    position: absolute;
    top: 30px;
    right: 24px;
  }
`;
