import styled from 'styled-components';

export const StyledLoginBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 16px 0;
  background: #fff;

  @media screen and (min-width: 834px) {
    width: 50%;
    border-radius: 8px;
    padding: 48px 24px;
  }

  @media screen and (min-width: 1440px) {
    padding: 48px 97px;
  }

  & .register-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 32px;
  }

  & .register-phrase {
    color: var(--accent-color-darkblue);
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: underline;
  }

  & .login-header {
    color: var(--font-color-black);
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 32px;

    @media screen and (min-width: 834px) {
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
    }
  }

  & .login-text {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 24px;
  }

  & .login-label {
    position: relative;
    display: block;
    margin-bottom: 40px;
    color: var(--font-color-black);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  & .login-input {
    position: relative;
    display: block;
    margin-top: 4px;
    padding: 8px 8px;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid var(--accent-color-blue);
    outline: none;

    color: #111;
    font-size: 13px;
    font-weight: 400;
    /* line-height: 1, 50; */

    @media screen and (min-width: 834px) {
      padding: 4px 8px;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      -moz-appearance: textfield;
    }

    &::placeholder {
      color: var(--font-color-darkgray);
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
    }
  }

  & .login-icon-eye {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    background-color: #fff;

    @media screen and (min-width: 834px) {
      right: 10px;
    }
  }

  & .login-error {
    position: absolute;
    bottom: -18px;
    left: 4px;
    color: var(--accent-color-orange);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }

  & .login-input.error {
    border: 2px solid var(--accent-color-orange);
  }

  & .error-icon {
    position: absolute;
    top: 30px;
    right: 5px;
    background-color: #fff;
  }

  & .button-checkbox-container {
    position: relative;
    margin: 40px 0 25px;
    display: flex;

    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 834px) {
      margin: 0 0 32px;
    }

    @media screen and (min-width: 1440px) {
    }
  }

  & .login-button__icon {
    position: absolute;
    top: 5px;
    left: 80px;
    cursor: pointer;
  }

  & .checkbox-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & .login-button {
    padding: 16px 32px;
    width: 100%;
    height: 52px;
    border-radius: 100px;
    border: none;
    background: var(--accent-color-blue);
    color: var(--font-color-black);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    transition: background-color var(--transition);

    &:disabled,
    &:disabled:hover,
    &:disabled:focus,
    &:disabled:focus-within {
      border: 0;
      opacity: 0.5;
      background: var(--font-color-darkgray);
      color: var(--font-color-black);
    }

    &:hover {
      background-color: var(--hover-blue);
    }
  }

  & .login-checkbox {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  & .login-agree {
    color: var(--font-color-black);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  & .login-personal-data {
    text-decoration-line: underline;
  }
`;
