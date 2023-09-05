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

export const StyledBurger = styled.div`
  overflow: scroll;
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

  & .burger-language-uk-icon {
    border-radius: 100%;
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
      border-color: var(--accent-color-beige);
      color: var(--accent-color-beige);
    }
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
  }

  & .burger__arrow {
    transform: rotate(-90deg);
    transition: transform var(--transition);

    &.opened {
      transform: rotate(0deg);
    }
  }
`;
