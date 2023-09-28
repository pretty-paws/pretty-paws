import styled from 'styled-components';

export const StyledPersonalData = styled.div`
  background: #fff;
  width: 100%;
  /* padding: 10px 16px; */

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 24px;
    border-radius: 8px;
  }

  .personal-data__header-box {
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

  .personal-data__arrow {
    margin-left: 10px;
    transform: rotate(90deg);
  }

  .personal-data__header {
    font-size: 20px;
    font-weight: 500;
    line-height: 130%;
    margin: 0 120px 0 30px;

    @media screen and (min-width: 834px) {
      margin: 0;
    }

    @media screen and (min-width: 1440px) {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
    }
  }

  .personal-data__edit {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 31px;
    z-index: 2;
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
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
  }

  @media screen and (max-width: 834px) {
    .personal-data__body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  table {
    margin: 0 16px;
  }

  table td {
    border: 10px solid transparent;
    padding-bottom: 16px;

    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      padding-bottom: 22px;
    }
  }

  table tbody tr td:first-child {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding-right: 24px;
  }

  table tbody tr td:last-child {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  & .cabinet-logout {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    padding: 16px 32px;
    cursor: pointer;
  }

  & .cabinet-logout-btn {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    border: 0;
    background-color: transparent;
  }
`;
