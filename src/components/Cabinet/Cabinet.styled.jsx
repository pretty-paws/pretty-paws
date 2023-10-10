import styled from 'styled-components';

export const CabinetContainer = styled.div`
  @media screen and (min-width: 834px) {
    width: 834px;
    margin-left: auto;
    margin-right: auto;
    padding: 28px 30px;
    display: flex;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 30px 150px;
    /* padding: 0; */
  }
`;

export const StyledCabinet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 16px;

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 16px;
    /* width: 273px; */
    padding: 0;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }

  & .cabinet__menu {
    @media screen and (min-width: 834px) {
      width: 273px;
      background: #fff;
      height: fit-content;
      border-radius: 8px;
    }

    @media screen and (min-width: 1440px) {
      border-radius: 8px;
      width: 364px;
    }
  }

  & .cabinet__header {
    /* margin: 23px 0; */
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    @media screen and (min-width: 834px) {
      padding: 40px 16px;
    }

    @media screen and (min-width: 1440px) {
      padding: 0;
      margin: 40px 16px;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
    }
  }

  & .cabinet__menu-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px;
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }
    @media screen and (min-width: 834px) {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
  }

  & .cabinet__line-box {
    border-bottom: 1px solid #d6d6d6;
  }

  & .cabinet-logout {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 107px;
    padding: 16px;
    cursor: pointer;

    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }
  }

  & .cabinet-logout-btn {
    padding-left: 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    border: 0;
    background-color: transparent;
  }

  & .active-item {
    display: block;
    background-color: var(--accent-color-beige);
    &:hover {
      background-color: var(--hover-blue);
    }
  }
`;
