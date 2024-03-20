import styled from 'styled-components';

export const StyledModalBox = styled.div`
  @media screen and (min-width: 834px) {
    padding: 0;
    margin-top: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: auto;
    margin-right: auto;
    width: 1440px;
    padding: 0 150px;
    display: grid;
    grid-template-columns: 655px 461px;
    grid-column-gap: 24px;
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
      height: fit-content;
      min-height: 600px;
      overflow-y: scroll;
    }

    @media screen and (min-width: 1440px) {
      padding: 0;
      width: 655px;
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
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
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
      gap: 24px;
    }
  }

  & .cart-modal__products-block {
    @media screen and (min-width: 834px) {
      /* margin-top: 24px; */
    }

    @media screen and (min-width: 1440px) {
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

    @media screen and (min-width: 1440px) {
      bottom: 40px;
      right: 55%;
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
      margin-top: 0;
      max-width: 461px;
      padding: 0;
    }
  }

  .cart__additional-info-box__desktop {
    @media screen and (min-width: 1440px) {
      max-width: 461px;
      height: 442px;
      margin-top: 80px;
      display: flex;
      flex-direction: column-reverse;
      justify-content: left;
      background: #fff;
      border-radius: 8px;
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

    @media screen and (min-width: 1440px) {
      margin-top: 24px;
      margin-bottom: 0;
      padding: 0 24px;
      gap: 19px;
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

    @media screen and (min-width: 1440px) {
      z-index: 1;
      background: none;
      position: static;
      max-width: 461px;
      flex-direction: column;
      gap: 24px;
      align-items: normal;
      padding: 40px 24px 0;
      margin-top: 0;
      /* padding: 0px 150px; */
    }
  }

  .cart-modal__delivery-box {
    flex: 2;

    @media screen and (min-width: 1440px) {
    }
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

    @media screen and (min-width: 1440px) {
      flex: none;
      width: 100%;
      height: 52px;
    }
  }

  .cart-modal__button-continue {
    width: 100%;
    height: 52px;
    border-radius: 100px;
    border: 0;
    background: #fff;
    transition: background-color var(--transition);
    border: 2px solid var(--accent-color-blue);

    &:hover {
      background-color: var(--hover-blue);
    }
    @media screen and (min-width: 1440px) {
      flex: none;
      width: 100%;
      height: 52px;
    }
  }

  .cart__empty-info {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 50px;
  }

  .cart__empty-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .cart__additional-info.empty {
    padding: 40px 24px;
    border-radius: 8px;
    margin-bottom: 160px;
  }
`;
