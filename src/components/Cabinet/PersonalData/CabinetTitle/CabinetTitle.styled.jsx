import styled from 'styled-components';

export const StyledCabinetTitle = styled.div`
  .cabinetTitle__header-box {
    position: relative;
    margin-bottom: 24px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    background-color: var(--accent-color-beige);

    @media screen and (min-width: 834px) {
      background-color: transparent;
      padding: 0;
    }

    @media screen and (min-width: 1440px) {
      justify-content: space-between;
      margin-bottom: 40px;
    }
  }

  .cabinetTitle__arrow {
    margin-left: 10px;
    transform: rotate(90deg);
  }

  .cabinetTitle__header {
    font-size: 20px;
    font-weight: 500;
    line-height: 130%;
    margin: 0 120px 0 30px;

    @media screen and (min-width: 834px) {
      margin: 0;
      font-size: 24px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }
  }

  .cabinetTitle__edit {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 31px;
    z-index: 2;

    @media screen and (min-width: 834px) {
      top: 0;
      right: 32px;
    }
    @media screen and (min-width: 1440px) {
      top: 5px;
      right: 33px;
    }
  }

  .active-edit::after {
    content: '';
    z-index: 1;
    position: absolute;
    top: 3px;
    right: 23px;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background-color: var(--hover-blue);

    @media screen and (min-width: 834px) {
      top: -7px;
      right: 24px;
    }
    @media screen and (min-width: 1440px) {
      top: -3px;
      right: 25px;
    }
  }
`;
