import styled from 'styled-components';

export const StyledSortingBar = styled.div`
  display: flex;
  justify-content: space-between;

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
