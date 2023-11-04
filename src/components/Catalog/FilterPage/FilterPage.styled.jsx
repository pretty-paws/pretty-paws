import styled from 'styled-components';

export const StyledFilterPage = styled.div`
  padding: 27px 0 96px;
  .filter-page__breadcrumbs {
    display: flex;
    gap: 8px;
    justify-content: left;

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  .filter__breadcrumbs__page,
  .filter__breadcrumbs__animal {
    color: var(--font-color-darkgray);
  }

  .filter-arrow {
    fill: #6c6c6c;
    stroke: #6c6c6c;
  }
`;
