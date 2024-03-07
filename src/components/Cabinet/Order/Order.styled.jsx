import styled from 'styled-components';

export const StyledOrderBG = styled.div`
  background-color: #fff;
  padding: 40px 24px;
`;

export const StyledOrder = styled.div`
  background-color: #fff;
  padding: 0 16px 24px;

  .order_title-group {
    display: flex;
    align-items: top;
    /* justify-content: center; */
    gap: 16px;
  }
  .order__title {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 16px;
  }

  .order__table {
    border-bottom: 1px solid #d6d6d6;
  }

  .order__table-row {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;

    display: grid;
    grid-template-columns: 55% 20% 20%;
    margin-bottom: 8px;

    & p:nth-of-type(2) {
      justify-self: center;
    }

    & p:last-child {
      justify-self: end;
    }
  }

  .order__total {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
`;
