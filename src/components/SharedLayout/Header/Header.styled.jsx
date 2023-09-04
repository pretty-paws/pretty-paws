import styled from 'styled-components';

export const StyledHeader = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  & .header-menu-box {
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (min-width: 834px) {
      justify-content: space-between;
    }

    @media screen and (min-width: 834px) {
      justify-content: space-between;
    }
  }

  & .header__login-button {
    padding: 6px;
    border-radius: 100px;
    border: 2px solid var(--accent-color-blue);
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus-within {
      border-color: var(--accent-color-beige);
      color: var(--accent-color-beige);
    }

    @media screen and (min-width: 834px) {
      background-color: transparent;
      border: none;
    }

    @media screen and (min-width: 1440px) {
      position: relative;
      z-index: 1001;
      padding: 14px 24px;
      border-radius: 99px;
      border: 2.5px solid var(--accent-color-blue);

      font-size: 16px;
      font-weight: 400;
      color: #0e2423;
      background-color: #fff;
      white-space: nowrap;
    }
  }

  & .header__basket {
    position: relative;
  }

  & .header__basket-badge {
    position: absolute;
    top: -15px;
    right: -8px;

    color: #0e2423;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;

    width: 18px;
    height: 18px;
    border-radius: 100px;
    background-color: var(--accent-color-beige);
  }

  & .header__registered-user {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  & .header__registered-user-email {
    color: var(--accent-color-blue);
    font-size: 16px;
  }

  & .header__logout-button {
    border-radius: 100px;
    border: 2px solid var(--accent-color-blue);
    background-color: #fff;

    &:focus-within {
      border-color: var(--accent-color-beige);
      color: var(--accent-color-beige);
    }

    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      padding: 5px 15px;
      border-radius: 99px;
      border: 2.5px solid var(--accent-color-blue);

      font-size: 16px;
      font-weight: 400;
      color: #0e2423;
      background-color: #fff;
      white-space: nowrap;
    }
  }
`;
