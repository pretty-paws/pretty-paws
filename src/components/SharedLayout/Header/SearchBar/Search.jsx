import React from 'react';
import { useTranslation } from 'react-i18next';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { SearchBox } from './SearchStyled';

const Search = () => {
  const { t } = useTranslation();
  return (
    <SearchBox>
      <svg className="search-box__search-icon">
        <use href={sprite + '#search'} />
      </svg>
      <input
        className="search-box__input"
        type="search"
        placeholder={t('Шукати продукт або бренд')}
        name="search"
      />
    </SearchBox>
  );
};

export default Search;
