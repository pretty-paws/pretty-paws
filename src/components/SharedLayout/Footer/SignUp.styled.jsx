import styled from 'styled-components';

export const StyledSignUp = styled.section`
  background-color: var(--accent-color-blue);
  padding: 29px 120px;

  & .sign-up__container {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 23px;

    @media screen and (min-width: 768px) {
      width: 768px;
    }

    @media screen and (min-width: 1024px) {
      width: 1024px;
    }

    @media screen and (min-width: 1240px) {
      width: 1240px;
    }

    @media screen and (min-width: 1440px) {
      width: 1440px;
    }
  }

  & .sign-up__title {
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    color: var(--font-color-white);
  }

  & .sign-up-input__box {
    position: relative;
  }

  & .sign-up-input {
    width: 340px;
    padding: 20px 0 20px 30px;
    border-radius: 30px;
    border: 0px;
    background: #fff;
    outline: none;
  }

  & .sign-up-input::placeholder {
    font-size: 16px;
    color: var(--accent-color-blue);
  }

  & .sign-up-icon {
    position: absolute;
    z-index: 2;
    right: 18px;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  & .sign-up-input__box::after {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    content: '';
    width: 40px;
    height: 40px;
    background-color: var(--accent-color-orange);
    border-radius: 100%;
    cursor: pointer;
  }
`;
