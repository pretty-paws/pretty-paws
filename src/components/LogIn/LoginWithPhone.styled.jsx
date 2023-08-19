import styled from 'styled-components';

export const StyledLoginWithPhone = styled.div`
  padding-bottom: 49px;
  & .login-label {
    position: relative;
    display: block;
    margin-top: 24px;
    color: var(--font-color-darkgray);
    font-size: 13px;
    font-weight: 400;
    line-height: 1, 5;
  }

  & .login-input {
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

  & .login-error {
    color: var(--accent-color-orange);
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
  }

  & .login-button {
    padding-left: 30px;
    width: 317px;
    height: 45px;
    border-radius: 99px;
    border: 1px solid var(--accent-color-blue);
    background: var(--accent-color-blue);
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.8;
    text-align: left;
    /* &:disabled {
      background: var(--font-color-darkgray);
      /* color: black; */
    /* }  */
  }

  & .login-button::after {
    position: absolute;
    bottom: -24px;
    left: 0;
    content: '';
    width: 317px;
    height: 1px;
    background-color: #000;
  }

  & .button-checkbox-container {
    position: relative;
  }

  & .login-arrow {
    position: absolute;
    top: 5px;
    right: 60px;
    cursor: pointer;
  }
`;
