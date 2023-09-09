import styled from 'styled-components';

import dog_desk_1x from '../../../img/help-register-bg/dog_desk_1x.webp';
import dog_desk_2x from '../../../img/help-register-bg/dog_desk_2x.webp';
import dog_tab_1x from '../../../img/help-register-bg/dog_tab_1x.webp';
import dog_tab_2x from '../../../img/help-register-bg/dog_tab_2x.webp';
import dog_mob_1x from '../../../img/help-register-bg/dog_mob_1x.webp';
import dog_mob_2x from '../../../img/help-register-bg/dog_mob_2x.webp';
import cat_desk_1x from '../../../img/help-register-bg/cat_desk_1x.webp';
import cat_desk_2x from '../../../img/help-register-bg/cat_desk_2x.webp';
import cat_tab_1x from '../../../img/help-register-bg/cat_tab_1x.webp';
import cat_tab_2x from '../../../img/help-register-bg/cat_tab_2x.webp';
import cat_mob_1x from '../../../img/help-register-bg/cat_mob_1x.webp';
import cat_mob_2x from '../../../img/help-register-bg/cat_mob_2x.webp';

export const BackgroundContainer = styled.section`
  padding-top: 126px;
  text-align: left;
  color: #fff;

  @media screen and (min-width: 834px) {
    padding: 109px 0;
  }

  @media screen and (min-width: 1440px) {
  }

  .container {
    text-align: left;

    @media screen and (min-width: 834px) {
      width: 45%;
    }
  }

  @media screen and (max-width: 833px) {
    &::before {
      content: '';
      z-index: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(14, 36, 35, 0.5);
      z-index: 1;
    }
  }

  .title {
    position: relative;
    z-index: 1;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 24px;

    @media screen and (min-width: 834px) {
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
    }
  }

  .text {
    position: relative;
    z-index: 1;
    margin-bottom: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    @media screen and (min-width: 834px) {
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
    }
  }

  .button {
    position: relative;
    z-index: 1;
    margin-bottom: 126px;
    width: 240px;
    height: 52px;
    padding: 16px 32px;
    border: 0;
    border-radius: 100px;
    background: var(--accent-color-blue);

    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    @media screen and (min-width: 834px) {
      width: 240px;
      padding: 16px 32px;
      font-size: 16px;
    }
  }

  height: 420px;
  position: relative;

  background: ${props =>
    props.type === 'dog'
      ? ` url(${dog_mob_1x}) center/cover no-repeat`
      : props.type === 'cat'
      ? `url(${cat_mob_1x}) center/cover no-repeat`
      : 'none'};

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: ${props =>
      props.type === 'dog'
        ? ` url(${dog_mob_2x}) center/cover no-repeat`
        : props.type === 'cat'
        ? ` url(${cat_mob_2x}) center/cover no-repeat`
        : 'none'};
  }
  @media (min-width: 834px) {
    height: 430px;
    background-size: cover;
    background-position: center;
    background-image: ${props =>
      props.type === 'dog'
        ? `url(${dog_tab_1x})`
        : props.type === 'cat'
        ? `url(${cat_tab_1x})`
        : 'none'};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${props =>
        props.type === 'dog'
          ? `url(${dog_tab_2x})`
          : props.type === 'cat'
          ? `url(${cat_tab_2x})`
          : 'none'};
    }
    @media (min-width: 1440px) {
      height: 429px;
      background-size: cover;
      background-position: center;
      background-image: ${props =>
        props.type === 'dog'
          ? `url(${dog_desk_1x})`
          : props.type === 'cat'
          ? `url(${cat_desk_1x})`
          : 'none'};

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: ${props =>
          props.type === 'dog'
            ? `url(${dog_desk_2x})`
            : props.type === 'cat'
            ? `url(${cat_desk_2x})`
            : 'none'};
      }
    }
  }
`;
