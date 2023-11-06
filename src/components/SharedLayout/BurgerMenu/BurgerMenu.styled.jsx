import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  @media screen and (min-width: 834px) {
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(2px);
    top: 0;
    right: 0;
    position: absolute;
    z-index: 1000000000;
    transform: translateX(100%);
    transition: all var(--transition);

    &.active {
      transform: translateX(50%);
    }
  }
`;

export const StyledAnimalCatalog = styled.div`
  overflow: scroll;
  position: fixed;
  z-index: 1000000000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
  transform: translateX(100%);
  transition: all var(--transition);
  display: flex;
  flex-direction: column;

  &.active {
    transform: translateX(0%);
  }

  @media screen and (min-width: 834px) {
    width: 50%;
  }
  & .subburger__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 40px 0px;
  }
  & .subburger__head {
    height: 46px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--accent-color-blue);
  }
  & .subburger__arrow {
    transform: rotate(90deg);
    margin: 8px;
  }
  & .subburger__title {
    font-size: 20px;
    font-weight: 500;
    line-height: 130%; /* 26px */
  }
  & .subburger__animal {
    display: flex;
    padding: 0px 40px 16px 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--grey_light, #d6d6d6);
    }
  }
  & .animal__title {
    font-size: 20px;
    font-weight: 500;
    line-height: 130%; /* 26px */
    color: var(--black, #0e2423);
  }
  & .animal__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
  }
  & .animal__list-item {
    color: var(--black, #0e2423);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px; /* 125% */
    cursor: pointer;
  }
  & .subburger__footer {
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    padding: 0px 40px;
  }
`;

export const StyledBurger = styled.div`
  overflow: auto;
  position: fixed;
  z-index: 1000000000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
  padding: 24px 16px;

  transform: translateX(-100%);
  transition: all var(--transition);

  &.active {
    transform: translateX(0);
  }

  @media screen and (min-width: 834px) {
    width: 50%;
    padding: 24px 40px;
  }

  & .burger__head {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;

    @media screen and (min-width: 834px) {
      justify-content: space-around;
      padding: 0;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -24px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--font-color-darkgray);
    }
  }

  & .burger-language-icon {
    border-radius: 100%;
    cursor: pointer;
  }
  & .burger__login-button {
    padding: 16px 32px;
    border-radius: 100px;
    border: 2px solid var(--accent-color-blue);
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 12px;
    font-weight: 400px;

    @media screen and (min-width: 834px) {
      font-size: 16px;
    }

    &:focus-within {
      border-color: var(--hover-blue);
      background-color: var(--hover-blue);
    }
  }

  & .burger-close-icon {
    cursor: pointer;
  }

  & .burger__user-bar {
    margin-top: 60px;
  }

  & .burger__main {
    margin: 40px 0 26px;
    display: flex;
    flex-direction: column;
    gap: 26px;

    font-size: 16px;
    font-weight: 400;
    color: #0e2423;
  }

  & .burger__catalogue {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  & .burger__arrow {
    transform: rotate(-90deg);
    transition: transform var(--transition);

    &.opened {
      transform: rotate(0deg);
    }
  }
`;
