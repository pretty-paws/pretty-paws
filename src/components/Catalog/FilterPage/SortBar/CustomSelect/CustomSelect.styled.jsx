import styled from 'styled-components';

export const StyledSelect = styled.div`
  position: relative;
  .select__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-radius: 8px;
    width: 267px;
    height: 48px;
    border: 1px solid #e7a973;
    background: #fff;
    cursor: pointer;

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

    @media screen and (min-width: 834px) {
      border: 1px solid #53c5bd;
      width: 241px;
    }

    @media screen and (min-width: 1440px) {
      border: 1px solid #e7a973;
      width: 267px;
    }
  }

  .select__option {
    padding: 8px 16px;
    display: flex;
    justify-content: left;
    align-items: center;
    position: absolute;
    z-index: 100;
    height: 40px;
    width: 267px;
    border-radius: 8px 8px 8px 8px;
    background: #fff;
    transition: background-color var(--transition);

    font-size: 14px;

    font-weight: 400;
    line-height: 18px;
    cursor: pointer;

    &.cheap {
      top: 50px;
    }

    &.expensive {
      top: 90px;
    }

    :hover {
      /* background-color: #e7a97380; */
      background: linear-gradient(#e7a97380, #e7a97380),
        linear-gradient(white, white);
    }
  }

  .select-arrow {
    transform: rotate(90deg);
  }

  .select-arrow-hide {
    transform: rotate(-90deg);
  }
`;
