import styled from 'styled-components';

export const StyledWishList = styled.div`
  position: relative;

  .wishlist__skeleton {
    display: flex;
    gap: 24px;
    margin: 0 16px 16px;
  }

  @media screen and (min-width: 834px) {
    border-radius: 8px;
    background: ${props => (props.noWhiteBG !== null ? '' : '#fff')};
    height: fit-content;
    padding: ${props => (props.noWhiteBG !== null ? '' : '40px 24px')};
  }
  .wishlist__header-box {
    position: relative;
    margin-bottom: 24px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    background-color: var(--accent-color-beige);

    @media screen and (min-width: 834px) {
      background-color: transparent;
      padding: 0;
    }

    @media screen and (min-width: 1440px) {
      justify-content: space-between;
      margin-bottom: 40px;
    }
  }

  .wishlist__arrow {
    margin-left: 10px;
    transform: rotate(90deg);
  }

  .wishlist__header {
    font-size: 20px;
    font-weight: 500;
    line-height: 130%;
    margin: 0 120px 0 30px;

    @media screen and (min-width: 834px) {
      margin: 0;
      font-size: 24px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }
  }

  .wishList__favourite-container {
    display: flex;
    gap: 24px;
    width: auto;
    overflow-x: scroll;
    margin: 0 16px;

    @media screen and (min-width: 834px) {
      width: 465px;
    }

    @media screen and (min-width: 1440px) {
      width: 756px;
    }

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    & ::-webkit-scrollbar-thumb {
      background-color: #bfbfbf;
      border-radius: 3px;
    }
  }

  .left-arrow {
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    top: 48%;
    left: 0;
    z-index: 1000;
    border-radius: 100px;
    background: #fff;
    box-shadow: 0px 0px 6px 0px rgba(14, 36, 35, 0.1);

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
    top: 48%;
    right: 0;
    z-index: 1000;
    border-radius: 100px;
    background: #fff;
    box-shadow: 0px 0px 6px 0px rgba(14, 36, 35, 0.1);

    svg {
      transform: rotate(-90deg);
    }
  }

  .wishlist__body {
    margin: 0 16px;

    @media screen and (min-width: 834px) {
      margin: 0;
    }
  }
  .wishlist__text {
    margin-top: 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    @media screen and (min-width: 834px) {
      font-weight: 400;
    }
  }

  .wishlist__button {
    margin: 24px 0;
    width: 100%;
    height: 52px;
    border-radius: 100px;
    background: var(--accent-color-blue);
    border: none;

    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: var(--font-color-black);

    @media screen and (min-width: 834px) {
      margin: 40px 0 0;
      width: 235px;
    }

    @media screen and (min-width: 1440px) {
    }

    &:hover {
      background-color: var(--hover-blue);
      opacity: 1;
      color: var(--font-color-black);
    }

    transition: all var(--transition);
  }
`;
