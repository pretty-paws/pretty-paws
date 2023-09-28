import styled from 'styled-components';

export const StyledWishList = styled.div`
  .WishList__header-box {
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

  .WishList__arrow {
    margin-left: 10px;
    transform: rotate(90deg);
  }

  .WishList__header {
    font-size: 20px;
    font-weight: 500;
    line-height: 130%;
    margin: 0 120px 0 30px;

    @media screen and (min-width: 834px) {
      margin: 0;
    }

    @media screen and (min-width: 1440px) {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }
  }

  .WishList__body {
    margin: 0 16px;
  }
  .WishList__text {
    margin-top: 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  .WishList__button {
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
      margin: 0;
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
