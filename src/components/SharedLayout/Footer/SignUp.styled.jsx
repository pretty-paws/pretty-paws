import styled from 'styled-components';

export const StyledSignUp = styled.section`
  background-color: var(--accent-color-blue);

  & .sign-up__container {
    height: 129px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 834px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 21px;
    }

    @media screen and (min-width: 1440px) {
      gap: 23px;
    }
  }

  & .sign-up__title {
    font-size: 28px;
    font-weight: 500;
    color: var(--font-color-white);

    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      font-size: 30px;
      font-weight: 700;
    }
  }

  & .sign-up-input__box {
    position: relative;
    width: 343px;
  }

  & .sign-up-input {
    width: 343px;
    height: 35px;
    padding-left: 11px;
    border-radius: 30px;
    border: 0px;
    background: #fff;
    outline: none;

    @media screen and (min-width: 834px) {
      width: 278px;
      height: 61px;
      padding-left: 30px;
    }

    @media screen and (min-width: 1440px) {
      width: 340px;
      padding: 20px 0 20px 30px;
    }
  }

  & .sign-up-input::placeholder {
    font-size: 10px;
    font-weight: 500;
    color: var(--accent-color-blue);
    line-height: 12.415px;

    @media screen and (min-width: 834px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1440px) {
    }
  }

  & .sign-up-icon {
    position: absolute;
    width: 11.756px;
    height: 9.993px;
    z-index: 2;
    right: 17px;
    top: 13px;

    cursor: pointer;

    @media screen and (min-width: 834px) {
      width: 20px;
      height: 17px;
      right: 28px;
      top: 22px;
    }

    @media screen and (min-width: 1440px) {
      right: 18px;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  & .sign-up-input__box::after {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    content: '';
    width: 23.5px;
    height: 23.5px;
    background-color: var(--accent-color-orange);
    border-radius: 100%;
    cursor: pointer;

    @media screen and (min-width: 834px) {
      width: 40px;
      height: 40px;
    }

    @media screen and (min-width: 1440px) {
      width: 40px;
      height: 40px;
    }
  }
`;
