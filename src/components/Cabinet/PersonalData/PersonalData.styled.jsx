import styled from 'styled-components';

export const StyledPersonalData = styled.div`
  background: #fff;
  width: 100%;
  @media screen and (min-width: 834px) {
    border-radius: 8px;
    background: #fff;
    height: fit-content;
    padding: 40px 24px;
  }

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
      margin: 40px 24px;
      background-color: transparent;
      padding: 0;
    }

    @media screen and (min-width: 1440px) {
      gap: 24px;
      align-items: flex-end;
      margin: 0 0 40px;
    }
  }

  .personal-data__arrow {
    margin: 0 10px;
    transform: rotate(90deg);
  }

  .personal-data__header {
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

  .personal-data__edit {
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

  @media screen and (max-width: 834px) {
    .personal-data__body {
      padding: 0 26px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .personal-data__body .cabinet-logout {
      align-items: left;
    }
  }

  table {
    /* margin: 0 26px; */
    @media screen and (min-width: 834px) {
      margin: 0 16px;
    }
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
