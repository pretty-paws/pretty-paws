import styled from 'styled-components';

export const StyledComparisonPage = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;

  .compare__title {
    margin: 24px 0 24px;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }

  .compare__container {
    display: grid;
    grid-template-columns: 170px auto;
    grid-gap: 24px;
    margin-bottom: 160px;
  }

  .compare__table-title {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .compare__table-title li:first-child {
    height: 235px;
  }

  .compare__table-title-cell {
    display: block;
    padding: 12px 16px;
    width: 170px;
    background-color: #e7a973;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .compare__table-products-container {
    display: grid;
    grid-template-columns: 165px 165px 165px 165px;
    grid-gap: 90px;

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  .compare__product-table {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .compare__product-table li:first-child {
    height: 235px;
  }

  .compare__product-table li:not(:first-child) {
    padding: 13px 4px;
    border-bottom: 1px solid #d6d6d6;
  }

  .product__img-container {
    width: 100%;
    height: 111px;
    background-color: white;
    position: relative;
  }

  .compare__close-icon {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    fill: #6c6c6c;
  }

  .product__img {
    height: 111px;
    object-fit: contain;
  }

  .compare__product__description {
    margin-bottom: 15px;
    max-height: calc(3 * 18px);
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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
