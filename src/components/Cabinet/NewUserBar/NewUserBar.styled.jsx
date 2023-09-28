import styled from 'styled-components';

import discount from '../../../img/cabinet/food_examples.webp';
import cats from '../../../img/cabinet/cats_eating.webp';

export const StyledNewsUserBar = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 16px;

  @media screen and (min-width: 834px) {
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 1440px) {
    height: 207px;
  }

  & .new-user-bar__box {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    border-radius: 8px;
    background: #fff;

    @media screen and (min-width: 834px) {
      flex-direction: row;
    }

    @media screen and (min-width: 1440px) {
      height: 207px;
    }
  }

  & .new-user-bar__text-box {
    flex: 1;
    margin: 24px 16px;
    text-align: center;
    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      text-align: left;
      margin: 40px 16px;
    }
  }

  & .new-user-bar__text {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    @media screen and (min-width: 834px) {
      text-align: left;
    }

    @media screen and (min-width: 1440px) {
      font-size: 20px;
      font-weight: 400;
      line-height: 120%;
    }
  }

  & .new-user-bar__btn {
    width: 100%;
    margin-top: 24px;
    padding: 16px 32px;
    border-radius: 100px;
    background: var(--accent-color-blue);
    border: 0;

    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    transition: background-color var(--transition);
    &:hover {
      background-color: var(--hover-blue);
    }

    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      width: 235px;
    }
  }

  & .new-user-bar__discount-img {
    border-radius: 8px;
    width: 343px;
    height: 170px;
    background: url(${discount}) center/cover no-repeat;

    @media screen and (min-width: 834px) {
      width: 190px;
      height: 216px;
    }

    @media screen and (min-width: 1440px) {
      width: 364px;
      height: 207px;
    }
  }

  & .new-user-bar__cats-img {
    border-radius: 8px;
    width: 343px;
    height: 170px;
    background: url(${cats}) center/cover no-repeat;

    @media screen and (min-width: 834px) {
      width: 190px;
      height: 196px;
    }

    @media screen and (min-width: 1440px) {
      width: 364px;
      height: 207px;
    }
  }
`;
