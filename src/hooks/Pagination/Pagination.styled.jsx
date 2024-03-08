import styled from 'styled-components';

export const StyledPagination = styled.ul`
  margin: 40px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  position: relative;
  @media screen and (min-width: 834px) {
    gap: 30px;
  }

  .pagination-item {
    cursor: pointer;
    color: #6c6c6c;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    @media screen and (min-width: 834px) {
      font-size: 16px;
    }
  }

  .pagination__arrow-back {
    cursor: pointer;
    transform: rotate(180deg);
  }

  .disabled {
    opacity: 0;
    pointer-events: none;
  }

  .selected {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0e2423;
    font-weight: 500;
    position: relative; /* Add this line */
  }

  .selected:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #53c5bd;
    z-index: -10;

    @media screen and (min-width: 834px) {
      height: 40px;
      width: 40px;
    }
  }
`;
