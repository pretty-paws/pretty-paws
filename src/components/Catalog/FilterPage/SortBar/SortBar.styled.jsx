import styled from 'styled-components';

export const StyledSortingBar = styled.div`
  display: flex;
  justify-content: space-between;
  /* position: relative; */

  .sort-bar__heading {
    position: absolute;
    top: 60px;
    left: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    @media screen and (min-width: 834px) {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }

    @media screen and (min-width: 1440px) {
      position: static;
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }
  }

  .sort-bar__sort-block {
    display: flex;
    gap: 10px;
    align-items: center;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .sort-bar__mobile {
    cursor: pointer;
    gap: 8px;
    display: flex;
    align-items: center;
  }
`;
