import styled from 'styled-components';

export const StyledSortingBar = styled.div`
  display: flex;
  justify-content: space-between;

  .sort-bar__heading {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  }

  .sort-bar__sort-block {
    display: flex;
    gap: 10px;
    align-items: center;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;
