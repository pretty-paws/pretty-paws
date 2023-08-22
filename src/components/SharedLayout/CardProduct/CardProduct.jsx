import React from 'react';
import { StyledCardProduct, StyledCardVariant } from './CardProduct.styled';
import sprite from '../../../img/svg-sprite/sprite.svg';
import imgNextGard from '../../../img/card-discount/nexgard_spectra.jpg';
const CardProduct = () => {
  return (
    <StyledCardProduct>
      {/* header card */}
      <div className="card-header">
        <div className="card-img">
          <img src={imgNextGard} alt="imgNextGard" />
        </div>
        <div className="card-type">
          <p className="card-type__text">Акція</p>
        </div>
        {/* variant type card */}
        <div className="card-variant">
          <StyledCardVariant>
            <p className="variant-text">2-3.5 кг</p>
          </StyledCardVariant>
          <StyledCardVariant isActive={1}>
            <p className="variant-text">3.5 7.5 кг</p>
          </StyledCardVariant>
          <StyledCardVariant>
            <p className="variant-text">7.5-15 кг</p>
          </StyledCardVariant>
          <div className="variant-arrow">
            <svg className="card-icon-arrow" width="10px" height="10px">
              <use href={sprite + '#arrow-black'} />
            </svg>
          </div>
        </div>
      </div>
      {/* general info of card product */}
      <div className="card-info">
        <p className="card-info__name">
          <b>Nexgard Spectra</b> (Нексгард Спектра) - Пігулки проти бліх, кліщів
          і гельмінтів для собак (1 пігулка) (3,5-7,5 кг.)
        </p>
        <div className="card-info__detail">
          <div className="card__price price">
            <p className="price__basic">318.00 ₴</p>
            <p className="price__discount">335.00 ₴</p>
          </div>
          <div className="card-info-country">
            {/* Іконка країни */}
            <svg
              className="card-icon-country"
              width=" 7.335px"
              height=" 7.335px"
            >
              <use href={sprite + '#germany'} />
            </svg>
            <p className="country__name">Німеччина</p>
          </div>
        </div>
      </div>
      {/* button panel card */}
      <div className="card-button-panel button-panel">
        <button className="button-panel__buy">До кошика</button>
        {/* Іконка улюблене */}
        <svg className="card-icon-button" width=" 24px" height=" 24px">
          <use href={sprite + '#favourite'} />
        </svg>
        {/* Іконка порівняння */}
        <svg className="card-icon-button" width=" 24px" height=" 24px">
          <use href={sprite + '#scale'} />
        </svg>
      </div>
    </StyledCardProduct>
  );
};

export default CardProduct;
