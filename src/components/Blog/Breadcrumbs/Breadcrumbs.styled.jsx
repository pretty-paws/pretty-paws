import styled from 'styled-components';

export const StyledBreadcrumbs = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  @media screen and (min-width: 834px) {
    gap: 8px;
    font-size: 14px;
  }

  .breadcrumbs__page,
  .breadcrumbs__animal,
  .breadcrumbs {
    color: #6c6c6c;
    white-space: nowrap;
  }

  .breadcrumbs__product-name {
    text-align: left;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .filter-arrow {
    fill: #6c6c6c;
    stroke: #6c6c6c;
  }
`;
