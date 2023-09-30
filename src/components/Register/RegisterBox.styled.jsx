import styled from 'styled-components';

export const StyledRegisterBox = styled.div`
  width: 100%;
  background: #fff;
  padding: 24px 16px;

  @media screen and (min-width: 834px) {
    width: 50%;
    padding: 48px 24px;
    margin-top: 24px;
    border-radius: 8px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 28px;
    padding: 48px 97px;
    border-radius: 8px;
    background: #fff;
  }

  & .register-header {
    color: #000;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 24px;

    @media screen and (min-width: 834px) {
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 32px;
    }
  }

  & .register-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  & .login-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 32px;
  }

  & .login-phrase {
    color: var(--accent-color-darkblue);
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: underline;
  }

  & .register-label {
    position: relative;
    display: block;
    margin-top: 28px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  & .register__country-code {
    position: absolute;
    z-index: 2;
    top: 33px;
    left: 15px;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
  }

  & .register-input {
    width: 100%;
    display: block;
    margin-top: 4px;
    padding: 4px 8px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid var(--accent-color-blue);
    outline: none;

    color: #111;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;

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
      line-height: 19.5px;
    }
  }

  & .phone-input {
    padding-left: 46px;
  }

  & .register-icon-eye {
    position: absolute;
    background-color: #fff;
    top: 30px;
    right: 6px;
    cursor: pointer;
  }

  & .register-error {
    position: absolute;
    bottom: -18px;
    left: 4px;
    color: var(--accent-color-orange);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }

  & .register-input.error {
    border: 2px solid var(--accent-color-orange);
  }

  & .error-icon {
    background-color: #fff;
    position: absolute;
    top: 30px;
    right: 5px;
  }

  & .button-checkbox-container {
    margin-top: 24px;
    margin-bottom: 52px;
    display: flex;
    flex-direction: column;
    gap: 41px;
  }

  & .checkbox-container {
    position: relative;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 32px;
  }

  & .register-button {
    position: relative;
    width: 100%;
    padding: 16px 32px;
    height: 52px;
    border-radius: 99px;
    border: 1px solid var(--accent-color-blue);
    background: var(--accent-color-blue);

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }
    &:disabled,
    &:disabled:hover,
    &:disabled:focus,
    &:disabled:focus-within {
      border: 0;
      opacity: 0.5;
      background: var(--font-color-darkgray);
      color: var(--font-color-black);
    }
  }

  & .register-button::after {
    position: absolute;
    bottom: -30px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--font-color-darkgray);
  }

  & .register-checkbox {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  & .register-agree {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }

  & .register-personal-data {
    text-decoration-line: underline;
    cursor: pointer;
  }
`;
