import styled from 'styled-components';

export const StyledMakeOrder = styled.div`
  position: relative;
  .make-order__back {
    color: #005a9a;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .make-order__title {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
  }

  .make-order__personal-data {
    margin: 24px 0;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: rgba(231, 169, 115, 0.5);
  }

  .make-order__personal-data-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 12px;
  }

  .make-order__personal-data__list {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;

    li {
      display: grid;
      grid-template-columns: 50% 50%;
      overflow-x: hidden;
    }
  }

  .make-order__personal-data-edit {
    margin: 24px 0 24px;
    padding-bottom: 32px;
    border-radius: 8px 8px 0px 0px;
    background-color: #fff;
  }

  .make-order__personal-data-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 8px 8px 0px 0px;

    font-size: 16px;
    font-weight: 400;

    &.edit {
      background: var(--accent-color-beige);
    }

    svg {
      transform: rotate(-90deg);
    }
  }

  .personal-data__form {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
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
    gap: 4px;
    position: relative;

    @media screen and (min-width: 834px) {
      flex-direction: row;
      gap: 24px;
    }

    @media screen and (min-width: 1440px) {
    }
  }
  .edit-label-text {
    white-space: nowrap;
    /* width: 118px; */
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    @media screen and (min-width: 834px) {
      width: 170px;
    }
    @media screen and (min-width: 1440px) {
      width: 220px;
    }
  }
  .edit-input {
    padding-left: 6px;
    outline: none;
    border: 0;
    font-size: 15px;
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
    top: 48%;
    right: 5px;
    @media screen and (min-width: 834px) {
      top: 9px;
    }
    @media screen and (min-width: 1440px) {
    }
  }

  .edit-error {
    position: absolute;
    left: 0;
    bottom: -17px;
    color: var(--accent-color-orange);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }

  .edit-input.error {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 2px solid var(--accent-color-orange);
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
`;
