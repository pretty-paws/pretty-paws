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
  padding: 49px 0;
  text-align: left;
  color: #fff;

  @media screen and (min-width: 834px) {
    padding: 109px 0;
  }

  @media screen and (min-width: 1440px) {
  }

  .container {
    width: 50%;
  }

  .title {
    font-size: 25px;
    font-weight: 500;
    line-height: 33px;

    @media screen and (min-width: 834px) {
      font-size: 30px;
      font-weight: 700;
      line-height: 36px;
    }
  }

  .text {
    margin: 16px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 18.48px;
    @media screen and (min-width: 834px) {
      font-size: 16px;
      font-weight: 500;
      line-height: 21.12px;
    }
  }

  .button {
    width: 164px;
    padding: 8px 16px;
    border: 0;
    border-radius: 66px;
    background: var(--accent-color-blue);

    color: #fff;
    font-size: 10px;
    font-weight: 500;
    line-height: 14.195px;

    @media screen and (min-width: 834px) {
      border-radius: 99px;
      width: 244px;
      padding: 12px 24px;
      font-size: 16px;
    }
  }

  height: 262px;
  background-size: cover;
  background-position: center;
  background-image: ${props =>
    props.type === 'dog'
      ? `url(${dog_mob_1x})`
      : props.type === 'cat'
      ? `url(${cat_mob_1x})`
      : 'none'};

  background-repeat: no-repeat;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${props =>
      props.type === 'dog'
        ? `url(${dog_mob_2x})`
        : props.type === 'cat'
        ? `url(${cat_mob_2x})`
        : 'none'};
  }
  @media (min-width: 834px) {
    height: 352px;
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
      height: 352px;
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
