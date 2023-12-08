import styled from 'styled-components';

export const StyledModalBox = styled.div`
  @media screen and (min-width: 834px) {
    padding: 0;
    margin-top: 16px;
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

  .cart__products-container {
    padding: 0 16px;
    @media screen and (min-width: 375px) {
      width: 375px;
      margin-left: auto;
      margin-right: auto;
    }

    @media screen and (min-width: 834px) {
      padding: 0 40px;
      width: 834px;
    }

    @media screen and (min-width: 1440px) {
      width: 1440px;
      padding: 0px 150px;
    }
  }

  .cart__continue-shopping {
    display: flex;
    align-items: center;
    gap: 8px;

    color: #005a9a;
    font-family: IBM Plex Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

    svg {
      transform: rotate(180deg);
    }
  }

  & .cart-modal__title {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;

    @media screen and (min-width: 834px) {
      margin-top: 36px;
      font-size: 24px;
    }

    @media screen and (min-width: 1440px) {
    }
  }

  & .cart-modal__product-card {
    position: relative;
    display: flex;
    gap: 24px;
    justify-content: space-between;
    padding: 18px 0;
    border-bottom: 0.5px solid #d6d6d6;

    @media screen and (min-width: 834px) {
      padding: 24px 0;
    }

    @media screen and (min-width: 1440px) {
      gap: 0;
    }
  }

  & .cart-modal__products-block {
    @media screen and (min-width: 834px) {
      /* margin-top: 24px; */
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
    width: 76px;
    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      width: 100px;
      height: 100px;
    }
  }

  & .cart-modal__product-img {
    object-fit: cover;
    /* height: 100%; */
    /* width: 100%; */
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

  .cart__remove-btn {
    padding: 8px;
    @media screen and (min-width: 834px) {
      display: flex;
      align-items: end;
    }
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
    margin-top: 12px;
    display: flex;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
  }
  & .product__old-price {
    color: var(--font-color-darkgray);
    text-decoration: line-through;
  }

  & .product__one-price {
    margin-top: 12px;
    color: var(--accent-color-orange);
    font-size: 16px;
    font-weight: 500;
  }

  & .product__price {
    color: var(--accent-color-orange);
  }

  & .cart-modal__amount-box {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 101px;
    height: 48px;
    margin-top: 10px;
    border-radius: 8px;
    border: 1px solid var(--font-color-black);

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    @media screen and (min-width: 834px) {
      margin-top: 16px;
    }
  }

  .cart__amount-price {
    position: absolute;
    bottom: 34px;
    right: 45px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

    @media screen and (min-width: 834px) {
      bottom: 34px;
      right: 65%;
    }
  }

  .cart__additional-info-box {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    margin-top: 24px;

    @media screen and (min-width: 834px) {
      padding: 0 40px;
      max-width: 834px;
    }

    @media screen and (min-width: 1440px) {
      width: 1440px;
      padding: 0px 150px;
    }
  }

  .cart__additional-info {
    padding: 8px 16px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (min-width: 834px) {
      gap: 16px;
      margin-bottom: 60px;
    }

    & div {
      display: flex;
      gap: 8px;
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      & svg {
        flex-shrink: 0;
      }
    }
  }

  .cart__delivery-total-box {
    width: 100vw;
    margin-top: 24px;
    padding: 16px 16px;
    background: #fff;

    @media screen and (min-width: 834px) {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 1111111111;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 180px;
    }
  }

  .cart-modal__delivery-box {
    flex: 2;
  }

  .sticky {
    margin-top: 16px;
    margin-left: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100000;
  }

  & .cart-modal__delivery {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  & .cart-modal__total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }

  .cart__total-price {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: var(--accent-color-orange);
  }

  & .cart-modal__button {
    flex: 1;
    margin: 24px 0 0;
    width: 100%;
    height: 52px;
    border-radius: 100px;
    border: 0;
    background: var(--accent-color-blue);
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }

    @media screen and (min-width: 834px) {
      margin: 0;
      width: 235px;
      height: 52px;
    }
  }
`;
