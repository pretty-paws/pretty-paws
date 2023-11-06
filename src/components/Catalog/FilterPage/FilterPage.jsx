import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../../store/AuthProvider';
// import { Link } from 'react-router-dom';
import { StyledFilterPage } from './FilterPage.styled';
import Breadcrumbs from './Breadcrumbs';
import FilterBar from './FilterBar';
// import sprite from '../../../img/svg-sprite/sprite.svg';

const FilterPage = observer(() => {
  const store = useStore();
  const language = localStorage.getItem('language');
  const {
    catalog: { state, categorySlug, getFilters },
  } = store;

  useEffect(() => {
    let slug;
    categorySlug
      ? (slug = categorySlug)
      : (slug = localStorage.getItem('categorySlug'));
    getFilters(slug, language);
  }, [language]);

  return state === `done` ? (
    <StyledFilterPage>
      <Breadcrumbs />
      <div>
        <FilterBar />
      </div>
    </StyledFilterPage>
  ) : null;
});

export default FilterPage;
