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

  & .active-link .user-bar__icon {
    fill: #53c5bd;
    stroke: #53c5bd;
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
    justify-content: left;
    gap: 16px;
    cursor: pointer;

    &:hover::after {
      content: '';
      z-index: -2;
      position: absolute;
      left: -8px;
      width: 40px;
      height: 40px;
      border-radius: 100px;
      background: #17d6c8;

      @media screen and (min-width: 834px) {
        left: -5px;
      }

      @media screen and (min-width: 1440px) {
        left: -8px;
      }
    }

    &:hover .user-bar__icon {
      fill: black;
      /* stroke: black; */
    }
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

    @media screen and (min-width: 1440px) {
      top: -17px;
      right: -9px;
    }
  }
`;
