import styled from 'styled-components';

export const StyledFilterResults = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media screen and (min-width: 834px) {
    margin-top: 40px;
    gap: 14px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
    width: 850px;
  }

  .filter-reset {
    display: flex;
    flex-direction: column;
  }

  .filter-result__no-products {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 80px;
  }

  .filter-result__no-products-title {
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  }

  .filter__sale-products {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  .filter__button-container {
    display: flex;
    justify-content: center;
  }

  .filter_sale-button {
    margin-top: 40px;
    height: 52px;
    width: 100%;
    border-radius: 100px;
    border: 2px solid var(--accent-color-blue);
    background: #fff;

    transition: background-color var(--transition);

    @media screen and (min-width: 834px) {
      width: 240px;
    }

    @media screen and (min-width: 1440px) {
      width: 235px;
    }

    &:hover {
      background-color: var(--hover-blue);
    }
  }
`;
