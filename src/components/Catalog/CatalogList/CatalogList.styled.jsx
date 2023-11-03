import styled from 'styled-components';

export const StyledCatalogList = styled.div`
  margin: 10px 40px;
  display: grid;
  grid-template-columns: repeat(3, 231px);
  gap: 40px;

  .list__category-title {
    margin: 10px 0 32px;
  }

  .list__subcategories {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
