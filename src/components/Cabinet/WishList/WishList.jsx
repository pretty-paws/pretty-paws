import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledWishList } from './WishList.styled';

const WishList = () => {
  const { t } = useTranslation();

  const { screen } = useWindowSize();
  return (
    <StyledWishList>
      <div className="wishlist__header-box">
        {screen === 'mobile' && (
          <Link to={'/cabinet'}>
            <svg width="24px" height="24px" className="wishlist__arrow">
              <use href={sprite + '#arrow-down'} />
            </svg>
          </Link>
        )}
        <h2 className="wishlist__header">{t('Список бажань')}</h2>
      </div>
      <div className="wishlist__body">
        <p className="wishlist__text">
          {t('Поки що ви не оформили підписку на акції від PrettyPaws.')}
        </p>
        <button type="button" className="wishlist__button">
          {t('До каталогу')}
        </button>
      </div>
    </StyledWishList>
  );
};

export default WishList;
