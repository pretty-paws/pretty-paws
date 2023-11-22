import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import img from '../../../img/card-discount/nexgard_spectra__2.png';
import { StyledCardBlog } from './CardBlog.styled';
const CardBlog = () => {
  return (
    <StyledCardBlog>
      <div className="blog__img-container">
        <img className="blog__img" src={img} alt="" />
      </div>
      <div className="blog__content">
        <div className="blog__text">
          <h5 className="blog__title">
            Де краще взяти тваринку і як про неї піклуватися
          </h5>
          <p className="blog__desc">
            Уподобання майбутніх власників тварин можуть починатися від
            звичайної собаки, і закінчуватися велетенськими рептиліями або
            навіть диких тварин.
          </p>
          <div className="blog__info">
            <svg width=" 24px" height=" 24px">
              <use href={sprite + '#watch'} />
            </svg>
            <p className="blog__info-text">10 хвилин</p>
          </div>
        </div>
        <button className="blog__btn">Детальніше</button>
      </div>
    </StyledCardBlog>
  );
};

export default CardBlog;
