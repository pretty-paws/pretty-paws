import styled from 'styled-components';

export const NewProductsContainer = styled.div`
  .title {
    margin: 10px 0 20px;
    @media screen and (min-width: 834px) {
      margin: 0;
    }
  }

  .card-list {
    margin: 24px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }
`;
