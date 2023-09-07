import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CATALOG_ROUTE } from '../../../utils/consts';
import { StyledHeroPromotion } from './HeroPromotion.styled';
const HeroPromotion = ({ text }) => {
  return (
    <StyledHeroPromotion>
      <div className="promotion__text">
        <h1 className="promotion__title">Вигідна пропозиція</h1>
        <p className="promotion__desc">{text}</p>
      </div>

      <button className="promotion__btn">
        <Link to={CATALOG_ROUTE}> До каталогу</Link>
      </button>
    </StyledHeroPromotion>
  );
};

export default HeroPromotion;
HeroPromotion.propTypes = {
  text: PropTypes.string.isRequired,
};
