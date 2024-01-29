import styled from 'styled-components';

export const StyledOrderDetails = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 100px;

  .order-details_heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
  }

  .order-details_header {
    font-size: 20px;
    font-weight: 500;
    line-height: 130%;
  }

  .order-details_edit {
    fill: #6c6c6c;
  }

  .order-details__items-list::after {
    display: block;
    content: '';
    height: 1px;
    width: 100%;
    background-color: #d6d6d6;
  }

  .order-details__item {
    margin-bottom: 16px;
    display: flex;
    gap: 16px;

    img {
      height: 76px;
      width: 76px;
      object-fit: cover;
      /* flex: 0.5; */
    }

    .order-details__item-description-block {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;

      .order-details__item-description {
        margin-bottom: 16px;
      }
    }
  }

  .order-details__amount-price-block {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  .amount {
    color: #6c6c6c;
  }

  .new-price-block {
    display: flex;
    gap: 8px;
  }

  .new-price {
    color: #f64b15;
  }

  .old-price {
    color: #6c6c6c;
    text-decoration: line-through;
  }

  .order-details__sum-list {
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

    li {
      display: flex;
      justify-content: space-between;
    }

    li p:nth-child(even) {
      font-size: 16px;
    }
  }

  .checkbox-wrapper {
    margin-bottom: 24px;
  }

  .agreement__label {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
    align-items: center;
    position: relative;
  }

  .agreement__check {
    position: absolute;
  }
  input[type='checkbox'] {
    flex-shrink: 0;
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    width: 24px;
    height: 24px;

    margin-right: 8px;
    background-color: #53c5bd;
    outline: none;
    cursor: pointer;
  }

  input.checked {
    cursor: pointer;
  }

  .agreement__text {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;

    span {
      color: #005a9a;
    }
  }

  .order-details__button {
    width: 100%;
    height: 52px;
    text-align: center;
    border-radius: 100px;
    background-color: #53c5bd;
    transition: background-color 1ms 8ms;
    border: 0;

    &:hover {
      background-color: var(--hover-blue);
    }
  }
`;
