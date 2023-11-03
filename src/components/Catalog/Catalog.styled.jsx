import styled from 'styled-components';

export const StyledCatalog = styled.div`
  margin: 24px 0 160px;
  display: grid;
  grid-template-columns: 267px auto;

  .catalog__animal-categories {
    display: grid;
    row-gap: 32px;
    grid-template-rows: repeat(6, 60px);
  }

  .catalog__animal-item {
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
  }

  .catalog-arrow {
    justify-self: end;
  }

  .active-animal-category {
    background-color: var(--accent-color-beige);
    opacity: 0.9;

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
`;
