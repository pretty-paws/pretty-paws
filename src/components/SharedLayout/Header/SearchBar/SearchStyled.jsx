import styled from 'styled-components';

export const SearchBox = styled.div`
  position: relative;

  & .search-box__search-icon {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 13px;
    left: 12px;

    @media screen and (min-width: 834px) {
      top: 13px;
      left: 14px;
    }

    @media screen and (min-width: 1440px) {
      top: 12px;
      left: 15px;
    }
  }

  & .search-box__input::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: var(--font-color-darkgray);
  }

  & .search-box__input {
    width: 100%;
    height: 48px;
    border-radius: 99px;
    border: none;
    outline: none;
    padding-left: 55px;

    @media screen and (min-width: 834px) {
      width: 369px;
    }

    @media screen and (min-width: 1440px) {
      width: 460px;
    }
  }
`;
