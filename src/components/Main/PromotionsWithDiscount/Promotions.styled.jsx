import styled from 'styled-components';

export const StyledPromotion = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 156px;

  @media screen and (min-width: 834px) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 156px;
  }

  .promotion-title-box {
    text-align: center;
    @media screen and (min-width: 834px) {
      text-align: left;
    }
  }

  & .promotion-animals-bar {
    margin-bottom: 24px;
  }

  & .promotions__card-container {
    display: flex;
    gap: 24px;
    overflow: hidden;
    width: auto;
    overflow-x: scroll;
  }

  .left-arrow {
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    top: 49%;
    left: -20px;
    z-index: 1000;
    border-radius: 100px;
    background: #fff;
    box-shadow: 0px 0px 6px 0px rgba(14, 36, 35, 0.073);

    svg {
      transform: rotate(90deg);
    }
  }

  .right-arrow {
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    top: 49%;
    right: -20px;
    z-index: 1000;
    border-radius: 100px;
    background: #fff;
    box-shadow: 0px 0px 6px 0px rgba(14, 36, 35, 0.073);

    svg {
      transform: rotate(-90deg);
    }
  }

  .promotions__card-container {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }

  .promotions__card-container::-webkit-scrollbar {
    width: 8px;
  }

  .promotions__card-container::-webkit-scrollbar-track {
    background: transparent;
  }

  .promotions__card-container::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
  }

  .promotions__button-container {
    display: flex;
    justify-content: center;
  }

  .promotions__button {
    margin-top: 30px;
    height: 52px;
    width: 100%;
    border-radius: 100px;
    border: 2px solid var(--accent-color-blue);
    background: #fff;

    transition: background-color var(--transition);

    @media screen and (min-width: 834px) {
      width: 240px;
    }

    @media screen and (min-width: 1440px) {
      width: 235px;
    }

    &:hover {
      background-color: var(--hover-blue);
    }
  }
`;
