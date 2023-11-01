import styled from 'styled-components';

export const StyledFooterContacts = styled.div`
  display: flex;
  gap: 35px;
  flex: 1;

  @media screen and (min-width: 834px) {
    flex-direction: column;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex: 1;
    gap: 24px;
  }

  //contacts animation

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  & .contacts-page {
    position: absolute;
    top: 110px;
    left: -15px;
    z-index: 0;
    width: 360px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    /* padding: 2rem; */

    &::before {
      content: '';
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      /* background-color: #ffffff; */
      background-repeat: no-repeat;
      background-size: 50% 50%, 50% 50%;
      background-position: 0 0, 100% 0, 100% 100%, 0 100%;
      background-image: linear-gradient(
          var(--accent-color-blue),
          var(--accent-color-blue)
        ),
        linear-gradient(var(--font-color-gray), var(--font-color-gray)),
        linear-gradient(var(--accent-color-blue), var(--accent-color-blue)),
        linear-gradient(var(--font-color-gray), var(--font-color-gray));
      animation: rotate 10s linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      left: 4px;
      top: 4px;
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      background: rgb(239, 239, 239);
      border-radius: 5px;
      /* animation: opacityChange 3s infinite alternate; */
    }
  }

  @keyframes opacityChange {
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  .z-index {
    position: relative;
    z-index: 30;
  }

  @media screen and (min-width: 834px) {
    & .contacts-page {
      top: -18px;
      left: 180px;

      width: 200px;
      height: 300px;
    }
  }

  @media screen and (min-width: 1440px) {
    & .contacts-page {
      top: -18px;
      left: 270px;
      width: 270px;
      height: 320px;
    }
  }

  & .footer-menu-title {
    margin-bottom: 18px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    @media screen and (min-width: 834px) {
      margin-bottom: 16px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 25px;
    }
  }

  & .footer-menu-phone {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    @media screen and (min-width: 1440px) {
      font-size: 16px;
    }
  }

  & .footer-menu-text {
    font-size: 12px;
    line-height: 16px;
    @media screen and (min-width: 1440px) {
      font-size: 14px;
    }
  }

  & .footer-menu-list {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & .footer-menu-time {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    @media screen and (min-width: 1440px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
