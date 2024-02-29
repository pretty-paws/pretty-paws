import styled from 'styled-components';

export const StyledCardProduct = styled.div`
  position: relative;
  padding: 16px;
  height: 486px;
  width: 273px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    width: 241px;
  }

  @media screen and (min-width: 1440px) {
    width: 267px;
  }

  & .product__sale {
    padding: 8px;
    border-radius: 8px;
    position: absolute;
    top: 48px;
    left: 8px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--accent-color-orange);

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }

  & .product__new {
    padding: 8px;
    border-radius: 8px;
    position: absolute;
    top: 5px;
    left: 8px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: #70db5e;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }

  & .product__img-container {
    height: 160px;
    flex: 1;
  }

  & .product__img {
    height: 160px;
    /* height: fit-content; */
    object-fit: contain;
  }

  & .product__details {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
  & .product__amount {
    padding: 3px 7px;
    border-radius: 8px;
    background: var(--accent-color-beige);
  }

  & .product__country {
    padding: 3px 7px;
    display: flex;
    gap: 4px;
    border-radius: 8px;
    border: 1px solid var(--accent-color-beige);
  }

  & .product__description {
    min-height: 80px;
    margin-top: 42px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  & .product__price-fav-box {
    margin-top: ${props => (props.biggerMargin ? '20px' : '31px')};
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
    display: flex;
    gap: 32px;
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
    margin-top: ${props => (props.biggerMargin ? '20px' : '28px')};
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
export const StyledCardVariant = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 7.335px;
  background-color: ${props => (props.isActive ? '#53C5BD;' : '#fff')};
  box-shadow: 0px 1.4670329093933105px 3.6675825119018555px 0px
    rgba(0, 0, 0, 0.2);

  & .variant-text {
    color: #212529;
    text-align: center;
    font-size: 8.069px;
    font-weight: 400;
    line-height: 12.103px; /* 150% */
  }
`;
