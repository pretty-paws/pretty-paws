import styled from 'styled-components';

export const StyledBigProductCard = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    margin-top: 24px;
  }

  .product_card {
    padding: 16px;
    border-radius: 8px;
    background: #fff;

    @media screen and (min-width: 1440px) {
      padding: 24px 24px 10px;
      display: flex;
      gap: 40px;
    }
  }

  .product_card__sale-new-icons {
    display: flex;
    justify-content: left;
    gap: 12px;
  }

  .product__sale {
    height: 24px;
    width: 47px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent-color-orange);

    font-size: 12px;
    font-weight: 400;
  }

  .product__new {
    height: 24px;
    width: 65px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #70db5e;

    font-size: 12px;
    font-weight: 400;
  }

  .product_card__country {
    padding: 0 8px;
    width: 82px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    border: 1px solid var(--accent-color-beige);

    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }

  .product-card__image-data-block {
    margin-top: 12px;
    position: relative;

    @media screen and (min-width: 834px) {
      display: flex;
      margin-top: 16px;
    }

    @media screen and (min-width: 1440px) {
    }
  }

  .product-card__image-title {
    display: flex;
    flex-direction: column-reverse;
    gap: 16px;

    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  .product__title {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    @media screen and (min-width: 1440px) {
      font-size: 20px;
      font-weight: 500;
      line-height: 130%;
    }
  }

  .product-card__image-box {
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 160px; */
    @media screen and (min-width: 834px) {
      width: 240px;
    }

    @media screen and (min-width: 1440px) {
      width: 364px;
      height: 380px;
    }
  }

  .product-card__img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .product-card__price-box {
    @media screen and (min-width: 834px) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: left;
      align-items: center;
      gap: 8px;
    }

    @media screen and (min-width: 1440px) {
      margin-top: 24px;
    }
  }

  .product__old-price {
    color: var(--font-color-darkgray);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-decoration: line-through;
    @media screen and (min-width: 834px) {
      font-size: 20px;
    }
  }
  .product__price {
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: var(--accent-color-orange);

    @media screen and (min-width: 834px) {
      font-size: 24px;
    }
  }
  .fav-compare-button-box {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: left;
    gap: 24px;

    @media screen and (min-width: 834px) {
      margin: 40px 0 14px;
    }

    @media screen and (min-width: 1440px) {
      margin: 40px 0 30px;
    }
  }

  .product__quantity {
    position: absolute;
    /* top: -35px; */
    right: 140px;

    border-radius: 8px;
    background-color: #e7a973;
    height: 24px;
    padding: 8px;
    width: fit-content;

    font-size: 12px;
    font-weight: 400;
    line-height: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 834px) {
      top: 0;
      left: 345px;
    }

    @media screen and (min-width: 1440px) {
      top: 24px;
      left: 170px;
    }
  }

  .product__fav-compare {
    position: absolute;
    top: 55%;
    right: 0;
    display: flex;
    gap: 32px;

    @media screen and (min-width: 834px) {
      position: static;
    }
    @media screen and (min-width: 1440px) {
    }
  }

  .product__details-box {
    margin-top: 16px;
    @media screen and (min-width: 834px) {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    @media screen and (min-width: 1440px) {
      margin-top: 24px;
    }
  }

  .product__details {
    display: flex;
    gap: 17px;

    svg {
      flex-shrink: 0;
    }

    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
  }

  .product__button {
    margin-top: 16px;
    height: 52px;
    width: 100%;
    border-radius: 100px;
    background-color: var(--accent-color-blue);
    border: 0;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    transition: background-color var(--transition);

    @media screen and (min-width: 834px) {
      margin-top: 0;
      width: 235px;
    }

    @media screen and (min-width: 1440px) {
    }

    &:hover {
      background-color: var(--hover-blue);
    }

    &.added {
      background-color: var(--hover-blue);
    }
  }

  .product_card-description {
    width: 100vw;
    margin: 0 -16px;
    padding: 16px;
    background: #fff;
    position: relative;

    @media screen and (min-width: 834px) {
      border-radius: 8px;
      margin: 0 0 60px;
      width: auto;
    }

    @media screen and (min-width: 1440px) {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }

  .product_card-description-title {
    @media screen and (min-width: 834px) {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
    }
  }

  .product_card-description-arrow {
    position: absolute;
    top: 16px;
    right: 16px;

    &.rotate {
      transform: rotate(180deg);
    }

    @media screen and (min-width: 834px) {
      top: 16px;
      right: 60%;
    }
  }

  .product_card-description-arrow-desktop {
    &.rotate {
      transform: rotate(180deg);
    }
  }

  .product_card-description-text {
    margin-top: 16px;
  }

  .big-card__show-more {
    display: flex;
    gap: 4px;
    align-items: center;
    cursor: pointer;
  }

  &.product__compare-icon {
    cursor: pointer;
  }

  .product__compare-icon.added {
    fill: #53c5bd;
    stroke: #53c5bd;
  }
`;
