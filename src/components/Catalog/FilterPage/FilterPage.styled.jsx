import styled from 'styled-components';

export const StyledFilterPage = styled.div`
  padding: 19px 0 96px;
  position: relative;

  .filter-page__breadcrumbs {
  }

  .filter__breadcrumbs__page,
  .filter__breadcrumbs__animal {
    color: var(--font-color-darkgray);
  }

  .filter-arrow {
    fill: #6c6c6c;
    stroke: #6c6c6c;
  }

  .filter__block {
    margin-top: 24px;
    display: grid;
    grid-template-columns: 267px 1fr;
    column-gap: 24px;
    @media screen and (min-width: 834px) {
    }
  }

  .filter__mobile-btn-box {
    padding-top: 55px;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 834px) {
      padding-top: 65px;
    }
  }

  .filter__mobile-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 48px;
    width: 157px;
    border-radius: 100px;
    border: 2px solid var(--accent-color-blue);
    background: #fff;

    transition: background-color var(--transition);

    @media screen and (min-width: 834px) {
      width: 201px;
    }

    &:hover {
      border: 0;
      background-color: var(--hover-blue);
    }
  }

  .filter__load-more-btn-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .filter__load-more-btn {
    margin-top: 40px;
    height: 52px;
    width: 100%;
    border-radius: 100px;
    border: 2px solid var(--accent-color-blue);
    background: #fff;
    transition: background-color var(--transition);
    @media screen and (min-width: 834px) {
      width: 235px;
    }

    &:hover {
      border: 0;
      background-color: var(--hover-blue);
    }
  }
  .filters__backdrop {
    @media screen and (min-width: 834px) {
      width: 100%;
      height: 100vh;
      backdrop-filter: blur(2px);
      opacity: 0.5;
      background: #0e2423;
      top: 0;
      right: 0;
      position: fixed;
      z-index: 1000000;
      /* transform: translateX(100%);
      transition: all var(--transition);

      &.active {
        transform: translateX(50%);
      } */
    }
  }
`;
