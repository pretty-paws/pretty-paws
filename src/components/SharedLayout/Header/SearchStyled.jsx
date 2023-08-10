import styled from 'styled-components';

export const SearchBox = styled.div`
  position: relative;
  & .search-box__search-icon {
    position: absolute;
    top: 12px;
    left: 24px;
    width: 20px;
    height: 20px;
  }

  & .search-box__input::placeholder {
    font-size: 13px;
    color: var(--accent-color-blue);
  }

  & .search-box__input {
    width: 413px;
    padding: 12px 24px 12px 54px;
    border-radius: 99px;
    border: 1px solid #53c5bd;
    outline: none;
  }
`;
