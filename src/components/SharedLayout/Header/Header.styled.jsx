import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media screen and (min-width: 834px) {
    gap: 37px;
  }

  & .header-language-uk-icon {
    display: none;

    @media screen and (min-width: 834px) {
      display: block;
      border-radius: 100%;
      cursor: pointer;
    }

    @media screen and (min-width: 1440px) {
    }
  }

  & .header__login-button {
    position: relative;
    z-index: 1001;
    padding: 14px 24px;
    border-radius: 99px;
    border: 2.5px solid var(--accent-color-blue);

    font-size: 13px;
    line-height: 1.5;
    color: var(--accent-color-blue);
    background-color: #fff;
    white-space: nowrap;

    &:focus-within {
      border-color: var(--accent-color-beige);
      color: var(--accent-color-beige);
    }
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
    padding: 5px 15px;
    border-radius: 99px;
    border: 2.5px solid var(--accent-color-blue);

    font-size: 13px;
    line-height: 1.5;
    color: var(--accent-color-blue);
    background-color: #fff;
    white-space: nowrap;

    &:focus-within {
      border-color: var(--accent-color-beige);
      color: var(--accent-color-beige);
    }
  }
`;
