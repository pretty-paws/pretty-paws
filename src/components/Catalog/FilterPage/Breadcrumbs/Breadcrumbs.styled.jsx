import styled from 'styled-components';

export const StyledBreadcrumbs = styled.div`
  display: flex;
  gap: 8px;
  justify-content: left;
  align-items: center;

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  overflow-x: scroll;
  width: fit-content;

  &::-webkit-scrollbar {
    width: 0.1em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .filter__breadcrumbs__page,
  .filter__breadcrumbs__animal,
  .filter__breadcrumbs {
    color: #005a9a;
    white-space: nowrap;
  }

  .filter__breadcrumbs__product-name {
    white-space: nowrap;
  }

  .active {
    color: #0e2423;
  }

  .filter-arrow {
    fill: #6c6c6c;
    stroke: #6c6c6c;
  }
`;
