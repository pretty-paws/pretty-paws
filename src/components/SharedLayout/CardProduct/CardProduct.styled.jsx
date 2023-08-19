import styled from 'styled-components';

export const StyledCardProduct = styled.div`
  width: 267px;
  height: 363.091px;
  border-radius: 8.802px;
  border: 0.734px solid #cac4d0;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 24.5px;
  & .card-header {
    position: relative;
  }
  & .card-img img {
    border-radius: 8.802px;
  }
  & .card-type {
    min-height: 15.6px;
    min-width: 35.2px;
    position: absolute;
    top: 26.5px;
    left: 29.4px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: #ec320c;
  }
  & .card-type__text {
    color: #fff;
    text-align: center;
    font-size: 8.069px;
    font-weight: 400;
    line-height: 12.103px; /* 150% */
  }
  & .variant-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    border-radius: 14.67px;
    background: var(--unnamed, #fff);
    box-shadow: 0px 1.4670329093933105px 3.6675825119018555px 0px
      rgba(0, 0, 0, 0.2);
  }
  & .card-icon-arrow {
    transform: rotate(90deg);
  }
  & .card-variant {
    position: absolute;
    bottom: 0;
    right: 28.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 3.67px;
  }
  & .card-info {
    padding: 0 31px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & .card-info__name {
    color: #111;
    font-size: 14px;
    font-weight: 400;
    line-height: 132%;
  }
  & .card-info__detail {
    display: flex;
    justify-content: space-between;
  }
  & .card__price {
    display: flex;
    gap: 5.87px;
  }
  & .price__basic {
    color: #f64b15;
    text-align: center;
    font-size: 13.203px;
    font-weight: 400;
    line-height: 19.805px; /* 150% */
  }
  & .price__discount {
    color: #999;
    font-size: 9.536px;
    font-weight: 400;
    line-height: 14.304px; /* 150% */
    text-decoration: line-through;
  }
  & .card-info-country {
    display: inline-flex;
    padding: 1.467px 7.324px 2.037px 6.602px;
    justify-content: center;
    align-items: center;
    gap: 3.668px;
    border-radius: 7.335px;
    background: rgba(231, 169, 115, 0.5);
  }
  & .country__name {
    color: #111;
    text-align: center;
    font-size: 8.069px;
    font-weight: 400;
    line-height: 12.103px; /* 150% */
  }

  & .button-panel {
    padding: 0 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .button-panel__buy {
    display: flex;
    padding: 8.802px 21.705px 8.802px 22.306px;
    justify-content: center;
    align-items: center;
    border-radius: 18.338px;
    border: 0px solid #111;
    background: #53c5bd;

    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 132%; /* 18.48px */
  }
  & .card-icon-button {
    cursor: pointer;
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
