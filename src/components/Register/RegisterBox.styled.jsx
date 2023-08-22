import styled from 'styled-components';

export const StyledRegisterBox = styled.div`
  width: 534px;
  display: flex;
  flex-direction: column;
  margin: 45px 0 123px;
  padding: 48px 98px 25px 98px;
  border-radius: 14.573px;
  border: 1.214px solid #cac4d0;
  background: #fff;

  &:hover {
    box-shadow: 0px 6.622589588165283px 6.622589588165283px 0px
      rgba(0, 0, 0, 0.25);
  }

  & .register-header {
    color: #000;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 24px;
  }

  & .register-text {
    color: #111;
    font-size: 18px;
    font-weight: 400;
  }

  & .register-label {
    position: relative;
    display: block;
    margin-top: 24px;
    color: var(--font-color-darkgray);
    font-size: 13px;
    font-weight: 400;
    line-height: 1, 5;
  }

  & .register__country-code {
    position: absolute;
    z-index: 2;
    top: 34px;
    left: 15px;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
  }

  & .register-input {
    width: 317px;
    display: block;
    margin-top: 6px;
    padding: 10px 13px;
    width: 317px;
    height: 45px;
    border-radius: 8.6px;
    border: 1px solid var(--accent-color-blue);
    outline: none;

    color: #111;
    font-size: 13px;
    font-weight: 400;
    line-height: 1, 50;

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
      line-height: 1.5;
    }
  }

  & .phone-input {
    padding-left: 45px;
  }

  & .register-icon-eye {
    position: absolute;
    background-color: #fff;
    top: 30px;
    right: 30px;
    cursor: pointer;
  }

  & .register-error {
    position: absolute;
    color: var(--accent-color-orange);
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
  }

  & .button-checkbox-container {
    margin-top: 23px;
    display: flex;
    gap: 41px;
  }

  & .checkbox-container {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  & .register-button {
    width: 136px;
    height: 45px;
    border-radius: 99px;
    border: 1px solid var(--accent-color-blue);
    background: var(--accent-color-blue);
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.8;
    &:disabled {
      background: var(--font-color-darkgray);
      /* color: black; */
    }
  }

  & .register-checkbox {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  & .register-agree {
    color: #17181a;
    font-size: 11px;
    font-weight: 400;
    line-height: 1.77;
  }

  & .register-personal-data {
    text-decoration-line: underline;
  }
`;
