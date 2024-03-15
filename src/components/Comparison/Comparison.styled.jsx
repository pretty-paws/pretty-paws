import styled from 'styled-components';

export const StyledComparisonPage = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;

  .compare__title {
    margin: 16px 0 16px;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;

    @media screen and (min-width: 834px) {
      margin: 24px 0 24px;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
    }
  }

  .compare__container {
    display: grid;
    grid-template-columns: 128px auto;
    grid-gap: 8px;
    margin-bottom: 100px;
    @media screen and (min-width: 834px) {
      grid-gap: 16px;
      grid-template-columns: 177px auto;
      margin-bottom: 70px;
    }
    @media screen and (min-width: 1440px) {
      grid-gap: 24px;
      margin-bottom: 160px;
    }
  }

  .compare__table-title {
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media screen and (min-width: 834px) {
      gap: 24px;
    }
  }

  .compare__table-title li:first-child {
    height: 180px;
    @media screen and (min-width: 834px) {
      height: 215px;
    }
    @media screen and (min-width: 1440px) {
      height: 235px;
    }
  }

  .compare__table-title-cell {
    display: block;
    padding: 12px 8px;
    width: 128px;
    background-color: #e7a973;

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

    @media screen and (min-width: 834px) {
      padding: 12px 16px;
      width: 177px;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
    @media screen and (min-width: 1440px) {
    }
  }

  .compare__table-products-container {
    display: grid;
    grid-template-columns: 140px 140px 140px 140px;
    grid-gap: 16px;

    font-size: 12px;
    font-weight: 400;
    line-height: 16px;

    @media screen and (min-width: 834px) {
      grid-template-columns: 176px 176px 176px 176px;
      grid-gap: 16px;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }

    @media screen and (min-width: 1440px) {
      grid-template-columns: 165px 165px 165px 165px;
      grid-gap: 90px;
    }

    @media screen and (max-width: 1440px) {
      overflow-x: scroll;
    }
  }

  .compare__product-table {
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media screen and (min-width: 834px) {
      gap: 24px;
    }
  }

  .compare__product-table li:first-child {
    height: 180px;
    @media screen and (min-width: 834px) {
      height: 215px;
    }
    @media screen and (min-width: 1440px) {
      height: 235px;
    }
  }

  .compare__product-table li:not(:first-child) {
    padding: 13px 4px;
    border-bottom: 1px solid #d6d6d6;
  }

  .product__img-container {
    width: 100%;
    height: 80px;
    background-color: white;
    position: relative;

    @media screen and (min-width: 834px) {
      height: 111px;
    }
  }

  .compare__close-icon {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    fill: #6c6c6c;
  }

  .product__img {
    height: 80px;
    object-fit: contain;
    @media screen and (min-width: 834px) {
      height: 111px;
    }
  }

  .compare__product__description {
    margin-bottom: 8px;
    max-height: calc(3 * 18px);
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    @media screen and (min-width: 834px) {
      margin-bottom: 15px;
    }
  }

  & .product__old-price {
    color: var(--font-color-darkgray);
    text-decoration: line-through;
  }
  & .product__price {
    color: var(--accent-color-orange);
    font-size: 16px;
    font-weight: 500;
  }

  .product__price-cart {
    padding: 0 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product__cart-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;

    width: 40px;
    height: 40px;
    &.added {
      background: #53c5bd;
    }
  }

  .compare__cart-icon {
    cursor: pointer;

    &.added {
      fill: #53c5bd;
      stroke: #53c5bd;
    }
  }

  .empty__title {
    margin: 24px 0 40px;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }

  .empty__description_icon {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 40px;
  }

  .description_and_icon {
    position: relative;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .scale-icon:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40px;
    width: 40px;
    background-color: #17d6c8;
    border-radius: 100px;
    z-index: -2;
  }

  .empty__description {
    margin-bottom: 40px;
  }

  .empty__button {
    width: 235px;
    padding: 16px 32px;
    border-radius: 100px;
    border: 0;
    background: #53c5bd;
    margin-bottom: 180px;
  }
`;
