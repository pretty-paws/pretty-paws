import styled from 'styled-components';

export const StyledHelp = styled.div`
  margin-bottom: 80px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 20px;
  }

  .help__main-title {
    font-size: 20px;
    font-weight: 500;
    line-height: 130%;
  }

  .help__title {
    margin: 23px 0 16px;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;

    @media screen and (min-width: 834px) {
      margin: 60px 0 35px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 32px;
      line-height: 40px;
    }
  }

  p {
    margin-bottom: 18px;
  }

  .section {
    text-align: left;
    .tablet {
      text-align: center;
    }
  }

  img {
    width: 169px;
    height: 76px;
    display: inline;
    margin-bottom: 15px;
  }

  .help_ursa-img {
    width: 169px;
    height: 76px;

    @media screen and (min-width: 1440px) {
      width: 265px;
      height: 116px;
    }
  }

  .help_kind-img {
    width: 229px;
    height: 72px;

    @media screen and (min-width: 1440px) {
      width: 285px;
      height: 92px;
    }
  }

  .help_UAnimals-img {
    width: 295px;
    height: 72px;

    @media screen and (min-width: 1440px) {
      width: 463px;
      height: 109px;
    }
  }

  .help_homeless-img {
    width: 121px;
    height: 72px;

    @media screen and (min-width: 1440px) {
      width: 209px;
      height: 126px;
    }
  }

  ul {
    margin-left: 35px;
    margin-bottom: 15px;
  }

  li {
    list-style: disc;
  }

  button {
    width: 235px;
    height: 52px;
    border: 0;
    border-radius: 100px;
    background-color: var(--accent-color-blue);

    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }

    font-size: 16px;
    font-weight: 500;
    text-decoration-line: underline;
    margin: 24px 0 40px;

    @media screen and (min-width: 834px) {
      margin: 30px 0 80px;
    }
  }
`;
