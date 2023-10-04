import styled from 'styled-components';

export const StyledSignUp = styled.section`
  background-color: var(--accent-color-blue);

  & .sign-up__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    @media screen and (min-width: 834px) {
      align-items: center;
      justify-content: center;
      gap: 24px;
    }

    @media screen and (min-width: 1440px) {
      margin: 40px 0;
      flex-direction: row;
      flex-basis: content;
      gap: 45px;
      justify-content: center;
      align-items: center;
    }
  }

  & .sign-up__title {
    margin-top: 48px;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    white-space: nowrap;

    @media screen and (min-width: 834px) {
      margin-top: 40px;
    }

    @media screen and (min-width: 1440px) {
      margin-top: 0;
    }
  }

  & .sign-up-input__box {
    position: relative;
    width: 100%;

    @media screen and (min-width: 834px) {
      width: 55%;
    }
    @media screen and (min-width: 1440px) {
      width: 413px;
    }
  }

  & .sign-up-input {
    margin-top: 16px;
    margin-bottom: 48px;
    width: 100%;
    height: 60px;
    padding: 12px 16px;
    border-radius: 28px;
    border: 0px;
    background: #fff;
    outline: none;

    @media screen and (min-width: 834px) {
      margin-top: 12px;
      margin-bottom: 36px;
      height: 61px;
      padding-left: 30px;
    }

    @media screen and (min-width: 1440px) {
      margin-top: 0;
      margin-bottom: 0;
      width: 413px;
    }

    &.error {
      border: 2px solid var(--accent-color-orange);
    }
  }

  & .sign-up__error {
    white-space: nowrap;
    position: absolute;
    left: 30px;
    /* transform: translateX(-50%); */
    bottom: 15px;
    /* color: var(--accent-color-orange); */
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;

    @media screen and (min-width: 834px) {
      font-size: 15px;
      /* left: 50%; */
      /* transform: translateX(-50%); */
      bottom: 10px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 16px;
      /* left: 50%; */
      /* transform: translateX(-50%); */
      bottom: -25px;
    }
  }

  .success {
    color: white;
  }

  & .sign-up-input::placeholder {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  & .sign-up-icon {
    position: absolute;
    z-index: 2;
    right: 18px;
    top: 33px;
    cursor: pointer;

    @media screen and (min-width: 834px) {
      right: 20px;
      top: 30px;
    }

    @media screen and (min-width: 1440px) {
      right: 8px;
      top: 30px;
      transform: translate(-50%, -50%);
    }
  }

  & .sign-up-input__box::after {
    position: absolute;
    right: 10px;
    top: 25px;
    z-index: 1;
    content: '';
    width: 40px;
    height: 40px;
    background-color: var(--accent-color-beige);
    border-radius: 100%;
    cursor: pointer;
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }

    @media screen and (min-width: 834px) {
      right: 13px;
      top: 22px;
    }

    @media screen and (min-width: 1440px) {
      right: 13px;
      top: 10px;
    }
  }
`;
