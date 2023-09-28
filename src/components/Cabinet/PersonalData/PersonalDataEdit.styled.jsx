import styled from 'styled-components';

export const StyledEditForm = styled.div`
  padding: 0 16px;
  @media screen and (min-width: 834px) {
    padding: 0;
  }

  @media screen and (min-width: 1440px) {
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      gap: 32px;
      align-items: left;
    }
  }

  .edit-label {
    display: flex;
    gap: 24px;
    position: relative;
    border-bottom: 1px solid #000;
    padding: 10px 0 10px 10px;

    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
    }

    /* :after {
      content: '';
      height: 1px;
      background-color: #000;
      position: absolute;
      bottom: 0;
    } */
  }
  .edit-label-text {
    width: 170px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .edit-input {
    outline: none;
    flex: 1;
    border: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  .edit-icon-eye {
    position: absolute;
    top: 9px;
    right: 5px;
    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      top: -5px;
    }
  }

  .error-icon {
    position: absolute;
    top: 9px;
    right: 5px;
    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      top: -5px;
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

    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      left: 195px;
      bottom: -20px;
    }
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

    &:disabled {
      border: 0;
      opacity: 0.5;
      background: var(--font-color-darkgray);
      color: var(--font-color-black);
    }

    transition: all var(--transition);
  }
`;