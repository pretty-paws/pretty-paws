import styled from 'styled-components';

export const BrandsContainer = styled.div`
  margin: 160px 0 152px;

  & .brands__box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;

    @media screen and (min-width: 834px) {
      gap: 24px;
    }

    @media screen and (min-width: 1440px) {
      gap: 16px;
    }
  }

  & .brands__bg {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: #fff;
    width: 164px;
    height: 92px;
    @media screen and (min-width: 834px) {
      width: 170px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 24px;
    }
  }

  & .brands__img {
    width: 60%;
    height: 60%;
    object-fit: fit;
  }

  & .brands__button-container {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .brands__button {
    padding: 16px 32px;
    width: 235px;
    border-radius: 100px;
    border: none;
    background-color: var(--accent-color-blue);
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }
  }
`;
