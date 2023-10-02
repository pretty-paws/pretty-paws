import styled from 'styled-components';

export const StyledLoginWithPhone = styled.div`
  padding-bottom: 64px;
  @media screen and (min-width: 834px) {
    padding-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
  }

  & .login-label {
    color: var(--font-color-darkgray);
    position: relative;
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

    @media screen and (min-width: 834px) {
      font-size: 16px;
      font-weight: 500;
    }

    @media screen and (min-width: 1440px) {
      font-size: 14px;
      font-weight: 400;
    }
  }

  & .login-input {
    display: block;
    margin-top: 4px;
    padding-left: 15px;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid var(--accent-color-blue);
    outline: none;

    color: #111;
    font-size: 13px;
    font-weight: 400;
    /* line-height: 1.5; */

    @media screen and (min-width: 834px) {
      padding-left: 15px;
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
      font-size: 13px;
      font-weight: 400;
    }
  }

  & .login__country-code {
    color: var(--font-color-black);
    position: absolute;
    z-index: 2;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 13px;
    font-weight: 400;
  }

  & .phone-input {
    padding-left: 42px;
  }

  & .login-input.phone-input.error {
    border: 2px solid var(--accent-color-orange);
  }

  & .login-error {
    position: absolute;
    bottom: -20px;
    color: var(--accent-color-orange);
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
  }

  & .error-icon {
    position: absolute;
    top: 30px;
    right: 5px;
    background-color: #fff;
  }

  & .login-button {
    padding: 16px 32px;
    width: 100%;
    height: 52px;
    border-radius: 100px;
    border: 1px solid var(--accent-color-blue);
    background: var(--accent-color-blue);

    text-align: center;
    color: var(--font-color-black);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    transition: background-color var(--transition);

    &:disabled {
      border: 0;
      opacity: 0.5;
      background: var(--font-color-darkgray);
      color: var(--font-color-black);
    }

    &:hover {
      background-color: var(--hover-blue);
    }

    @media screen and (min-width: 834px) {
      margin-bottom: 32px;
    }
  }

  & .login-button::after {
    position: absolute;
    bottom: -45px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--font-color-darkgray);

    @media screen and (min-width: 834px) {
      bottom: 0;
    }
  }
`;
