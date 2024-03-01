import styled from 'styled-components';

export const StyledCatalogList = styled.div`
  .list__category-box {
    @media screen and (max-width: 833px) {
      margin: 0 40px;
      padding: 0 0 16px;
      border-bottom: 1px solid #d6d6d6;
    }
  }

  @media screen and (min-width: 834px) {
    margin: 10px 40px;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 30px;
  }
  @media screen and (min-width: 1440px) {
    margin: 10px 40px;
    display: grid;
    grid-template-columns: repeat(3, 231px);
    gap: 40px;
  }

  .list__category-title {
    @media screen and (max-width: 833px) {
      margin: 15px 0 20px;
    }

    @media screen and (min-width: 834px) {
      margin: 10px 0 32px;
    }
  }

  .list__subcategories {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 833px) {
      gap: 8px;
    }

    @media screen and (min-width: 834px) {
      gap: 20px;
    }
  }
`;
