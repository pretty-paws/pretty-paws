import styled from 'styled-components';

export const StyledCatalog = styled.div`
  display: grid;
  @media screen and (max-width: 834px) {
    margin: 10px 0 30px;
    grid-template-columns: 375px;
    grid-template-rows: 150px auto;
  }

  @media screen and (min-width: 834px) {
    margin: 24px 0 160px;
    grid-template-columns: 267px auto;
  }

  .catalog__animal-categories {
    @media screen and (max-width: 833px) {
      display: grid;
      grid-template-columns: 20% 20% 20%;
      grid-template-rows: 1fr 1fr;
      justify-content: center;
      column-gap: 20px;
    }

    @media screen and (min-width: 834px) {
      display: grid;
      row-gap: 32px;
      grid-template-rows: repeat(6, 60px);
    }
  }

  .catalog__animal-item {
    @media screen and (max-width: 833px) {
      padding: 0px 0px;
      display: grid;
      transition: background-color var(--transition);
    }

    @media screen and (min-width: 834px) {
      height: 60px;
      padding: 8px 16px 8px 16px;
      grid-template-columns: auto auto;
      display: grid;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #d6d6d6;
      transition: background-color var(--transition);

      &:hover {
        background-color: var(--accent-color-beige);
        opacity: 0.9;
      }
    }
  }

  .catalog__animal-picture-and-title {
    grid-template-columns: auto auto;
    display: grid;
    gap: 26px;
    align-items: center;
  }

  .catalog-animal-box {
    border-radius: 100px;
    background-color: #fff;
    width: 44px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 834px) {
      &:hover {
        width: 45px;
        height: 45px;
        background-color: var(--accent-color-beige);
        border-radius: 100%;
        opacity: 0.9;
      }
    }
  }

  .catalog-arrow {
    justify-self: end;
  }

  .active-animal-category {
    @media screen and (max-width: 833px) {
      width: 45px;
      height: 45px;
      background-color: var(--accent-color-beige);
      border-radius: 100%;
      opacity: 0.9;
    }

    @media screen and (min-width: 834px) {
      background-color: var(--accent-color-beige);
      opacity: 0.9;
    }

    .catalog-animal-box {
      background-color: transparent;
    }
  }

  .catalog__list-box {
    background-color: #fff;
    height: fit-content;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .animal-name {
    padding: 10px 40px;
    text-align: left;
    height: 46px;
    background: #53c5bd;
    width: 100%;

    font-size: 20px;
    font-weight: 500;
    line-height: 130%;
  }
`;
