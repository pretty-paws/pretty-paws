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
`;
