import styled from 'styled-components';

export const StyledEditForm = styled.div`
  padding: 0 16px;
  @media screen and (min-width: 834px) {
    padding: 0 24px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media screen and (min-width: 834px) {
      /* align-items: center; */
    }

    @media screen and (min-width: 1440px) {
      gap: 32px;
      align-items: left;
    }
  }

  .edit-label {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    border-bottom: 1px solid #000;
    padding: 10px 0 10px 10px;

    @media screen and (min-width: 834px) {
      flex-direction: row;
      gap: 24px;
    }

    @media screen and (min-width: 1440px) {
    }
  }
  .edit-label-text {
    white-space: nowrap;
    width: 118px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    @media screen and (min-width: 834px) {
      width: 170px;
    }
    @media screen and (min-width: 1440px) {
      width: 220px;
    }
  }
  .edit-input {
    outline: none;
    border: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    @media screen and (min-width: 834px) {
      width: 100%;
    }
    @media screen and (min-width: 1440px) {
    }
  }

  .edit-icon-eye {
    position: absolute;
    top: 55%;
    right: 5px;
    @media screen and (min-width: 834px) {
      top: 9px;
    }
    @media screen and (min-width: 1440px) {
    }
  }

  .error-icon {
    background-color: #fff;
    position: absolute;
    top: 55%;
    right: 5px;
    @media screen and (min-width: 834px) {
      top: 9px;
    }
    @media screen and (min-width: 1440px) {
    }
  }

  .edit-error {
    position: absolute;
    right: 0;
    bottom: -17px;
    color: var(--accent-color-orange);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }

  .edit-label.error {
    border-bottom: 1px solid var(--accent-color-orange);
  }

  .edit-button {
    margin: 24px 0;
    width: 100%;
    height: 52px;
    border-radius: 100px;
    border: 2px solid var(--accent-color-blue);

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: var(--font-color-black);
    background: #fff;

    @media screen and (min-width: 834px) {
      margin: 25px 0 40px;
      width: 235px;
    }

    @media screen and (min-width: 1440px) {
      margin: 10px 0 0;
    }

    &:hover {
      background-color: var(--hover-blue);
      opacity: 1;
      color: var(--font-color-black);
    }

    &:disabled {
      border: 0;
      opacity: 0.5;
      background: var(--font-color-darkgray);
      color: var(--font-color-black);
    }

    transition: all var(--transition);
  }

  .password-change__box {
    margin-top: 40px;
  }
`;
