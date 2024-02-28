import styled from 'styled-components';

export const StyledMobileCardProduct = styled.div`
  position: relative;
  padding: 8px 16px;
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;

  & .product__sale {
    padding: 6px 8px;
    border-radius: 8px;
    position: absolute;
    top: 8px;
    left: 16px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--accent-color-orange);

    font-size: 12px;
    font-weight: 400;
  }

  & .product__new {
    padding: 6px 8px;
    border-radius: 8px;
    position: absolute;
    top: 36px;
    left: 16px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: #70db5e;
    font-size: 12px;
    font-weight: 400;
  }

  & .product__img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    /* flex: 1; */
  }

  & .product__img {
    height: 95px;
    width: 100%;

    object-fit: contain;
  }

  & .product__details {
    margin-top: 12px;
    display: flex;
    gap: 12px;
    justify-content: space-between;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
  & .product__amount {
    display: inline-flex;
    padding: 3px 7px;
    border-radius: 8px;
    background: var(--accent-color-beige);
  }

  & .product__country {
    padding: 3px 7px;
    display: inline-flex;
    gap: 4px;
    border-radius: 8px;
    border: 1px solid var(--accent-color-beige);
  }

  & .product__description {
    display: grid;
    grid-template-columns: 100px 147px 40px;
    grid-column-gap: 12px;
    min-height: 80px;

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  & .product__price-fav-box {
    margin-top: ${props => (props.biggerMargin ? '12px' : '15px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    /* gap: 60px; */
  }

  & .product__fav-icon {
    cursor: pointer;
  }

  & .product__old-price {
    color: var(--font-color-darkgray);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-decoration: line-through;
  }
  & .product__price {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    color: var(--accent-color-orange);
  }

  & .product__fav-compare {
    margin-top: 6px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: left;
    align-items: flex-end;
    gap: 25px;
  }

  & .product__error-message {
    position: absolute;
    top: -10px;
    left: -30px;
    width: 322px;
    padding: 16px;
    border-radius: 8px;
    background-color: #efefef;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    span {
      color: #005a9a;
    }
  }

  & .product__button {
    margin-top: ${props => (props.biggerMargin ? '8px' : '8px')};
    height: 52px;
    width: 100%;
    border-radius: 100px;
    background-color: var(--accent-color-blue);
    border: 0;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }

    &.added {
      background-color: var(--hover-blue);
    }
  }
`;
