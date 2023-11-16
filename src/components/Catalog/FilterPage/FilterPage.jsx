import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../../store/AuthProvider';
// import { Link } from 'react-router-dom';
import { StyledFilterPage } from './FilterPage.styled';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import FilterBar from './FilterBar/FilterBar';
import FilterResult from './FilterResult/FilterResult';
import SortBar from './SortBar/SortBar';
// import { useLocation } from 'react-router-dom';
// import sprite from '../../../img/svg-sprite/sprite.svg';

const FilterPage = observer(() => {
  // const [searchParams] = useSearchParams();
  // const searchQuery = localStorage.getItem('searchQuery') || null;
  // console.log(searchQuery);
  const store = useStore();
  const language = localStorage.getItem('language') || 'ua';
  const {
    catalog: {
      categorySlug,
      getFilters,
      filterState,
      categoryID,
      getSubcategory,
      subcategoryID,
      getFilteredProducts,
    },
  } = store;
  // const location = useLocation();

  useEffect(() => {
    let slug;
    categorySlug
      ? (slug = categorySlug)
      : (slug = localStorage.getItem('categorySlug'));
    getFilters(slug, language);
  }, [language, categorySlug]);

  useEffect(() => {
    const slug = getSubcategory(subcategoryID);
    getFilteredProducts(categoryID, language, `&subcategories[0]=${slug}`);
  }, []);

  return (
    <>
      <StyledFilterPage>
        {filterState === 'done' ? (
          <>
            <Breadcrumbs />
            <div className="filter__block">
              <FilterBar />
              <div>
                <SortBar />
                <FilterResult />
              </div>
            </div>
          </>
        ) : null}
      </StyledFilterPage>
    </>
  );
});

export default FilterPage;
