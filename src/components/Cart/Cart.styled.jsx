import styled from 'styled-components';

export const StyledModalBox = styled.div`
  padding: 0 16px;
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    border-radius: 8px;
    background-color: #fff;
    padding: 40px 24px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  & .cart-modal__title {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  }

  & .cart-modal__product-card {
    display: flex;
    gap: 5px;
    justify-content: space-between;
    padding: 18px 0;
    border-bottom: 0.5px solid #d6d6d6;
    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      gap: 0;
    }
  }

  & .cart-modal__products-block {
    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      height: 330px;
      overflow-y: scroll;
    }
  }
  & .cart-modal__products-block::-webkit-scrollbar {
    width: 5px;
  }

  & .cart-modal__products-block::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  & .cart-modal__products-block::-webkit-scrollbar-thumb {
    background-color: #bfbfbf;
    border-radius: 3px;
  }

  & .cart-modal__image-container {
    width: 100px;
    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      width: 100px;
      height: 100px;
    }
  }

  & .cart-modal__product-img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  & .cart-modal__description {
    flex: 3;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  & .cart-modal__more {
    position: relative;
    flex: 1;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  & .cart-modal__more-btn {
    cursor: pointer;
  }

  & .cart__small-modal {
    text-align: left;
    padding: 15px;
    width: 164px;
    height: 100px;

    position: absolute;
    top: 0;
    left: -150px;
    border-radius: 8px;
    background-color: #fff;
    color: #000;

    font-family: IBM Plex Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      background-color: #efefef;
    }

    & p {
      cursor: pointer;
    }

    & p:first-child {
      margin-bottom: 8px;
    }
  }

  & p.cart-modal__favouride-disabled {
    color: var(--font-color-darkgray);
    cursor: default;
  }

  & .cart-modal__price-box {
    margin-top: 8px;
    display: flex;
    gap: 4px;
    font-size: 16px;
    font-weight: 500;
  }
  & .product__old-price {
    color: var(--font-color-darkgray);
    text-decoration: line-through;
  }

  & .product__price {
    color: var(--accent-color-orange);
  }

  & .cart-modal__amount-box {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 82px;
    height: 36px;
    margin-top: 10px;
    border-radius: 8px;
    border: 1px solid var(--font-color-black);

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    /* line-height: 25px; */
  }

  & .cart-modal__delivery {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    @media screen and (max-width: 833px) {
      p {
        margin: 25px 0;
      }
    }
  }

  & .cart-modal__total {
    display: flex;
    gap: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  & .cart-modal__button {
    @media screen and (max-width: 833px) {
      margin: 40px 0 50px;
    }

    margin-top: 16px;
    width: 100%;
    height: 52px;
    border-radius: 100px;
    border: 0;
    background: var(--accent-color-blue);
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }
  }
`;
