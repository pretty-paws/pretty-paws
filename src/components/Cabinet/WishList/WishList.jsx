import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledWishList } from './WishList.styled';
import CabinetTitle from '../PersonalData/CabinetTitle/CabinetTitle';

const WishList = () => {
  const { t } = useTranslation();

  return (
    <StyledWishList>
      <CabinetTitle header={'Список бажань'} />
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
