import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CATALOG_ROUTE } from '../../../utils/consts';
import { StyledHeroPromotion } from './HeroPromotion.styled';
import { observer } from 'mobx-react-lite';

// need for visible html doc with back end
import DOMPurify from 'dompurify';

const HeroPromotion = observer(({ type, text }) => {
  const sanitizedText = DOMPurify.sanitize(text);

  return (
    <StyledHeroPromotion>
      <div className="promotion__text">
        <h1 className="promotion__title">{type}</h1>
        <p
          className="promotion__desc"
          dangerouslySetInnerHTML={{
            __html: sanitizedText,
          }}
        ></p>
      </div>

      <button className="promotion__btn">
        <Link to={CATALOG_ROUTE}> До каталогу</Link>
      </button>
    </StyledHeroPromotion>
  );
});

export default HeroPromotion;
HeroPromotion.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
