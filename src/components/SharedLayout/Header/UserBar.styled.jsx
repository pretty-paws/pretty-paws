import styled from 'styled-components';

export const StyledUserBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 48px;
  padding-left: 8px;

  & .user-bar__icon {
    width: 24px;
    height: 24px;

    @media screen and (min-width: 834px) {
      width: 32px;
      height: 32px;
    }

    @media screen and (min-width: 1440px) {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    padding-left: 0;
    gap: 32px;
    flex-direction: row;
  }

  & .user-bar-language-uk-icon {
    border-radius: 100%;
  }

  & .user-bar__container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
  }

  & .menu__item {
    font-size: 16px;
    font-weight: 400;
  }

  & .user-bar__basket-badge {
    position: absolute;
    top: -15px;
    left: 15px;
    color: #0e2423;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;

    width: 18px;
    height: 18px;
    border-radius: 100px;
    background-color: var(--accent-color-beige);

    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      top: -17px;
      right: -9px;
    }
  }
`;
