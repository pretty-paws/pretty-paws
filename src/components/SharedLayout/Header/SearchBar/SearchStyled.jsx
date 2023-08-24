import styled from 'styled-components';

export const SearchBox = styled.div`
  position: relative;

  & .search-box__search-icon {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 834px) {
      top: 50%;
      left: 20px;
    }

    @media screen and (min-width: 1440px) {
      transform: none;
      top: 12px;
      left: 24px;
      width: 20px;
      height: 20px;
    }
  }

  & .search-box__input::placeholder {
    font-size: 13px;
    color: var(--accent-color-blue);
  }

  & .search-box__input {
    width: 32px;
    height: 32px;
    border-radius: 99px;
    border: 1px solid #53c5bd;
    outline: none;

    &.search-box__input::placeholder {
      color: transparent;
    }

    @media screen and (min-width: 834px) {
      width: 86px;
      height: 34px;
    }

    @media screen and (min-width: 1440px) {
      padding: 12px 24px 12px 54px;
      width: 413px;
      height: 44px;
    }
  }
`;
