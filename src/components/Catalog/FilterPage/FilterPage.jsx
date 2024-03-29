import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../../store/AuthProvider';
import { StyledFilterPage } from './FilterPage.styled';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import FilterBar from './FilterBar/FilterBar';
import FilterResult from './FilterResult/FilterResult';
import SortBar from './SortBar/SortBar';
import useWindowSize from '../../../hooks/useWindowSize';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FilterPage = observer(() => {
  const { t } = useTranslation();

  const { screen } = useWindowSize();
  const store = useStore();
  const [openedFilter, setOpenedFilter] = useState(false);
  const {
    auth: { language },
    catalog: {
      categorySlug,
      getFilters,
      filterState,
      categoryID,
      getSubcategory,
      subcategoryID,
      getFilteredProducts,
      setSearchQuery,
      searchQuery,
      resetedFilter,
      categoryName,
    },
  } = store;

  useEffect(() => {
    let slug;
    categorySlug
      ? (slug = categorySlug)
      : (slug = localStorage.getItem('categorySlug') || 'food-for-cats');
    getFilters(slug, language);
  }, [language, categorySlug]);

  useEffect(() => {
    searchQuery !== '' &&
      resetedFilter !== false &&
      getFilteredProducts(categoryID, language, searchQuery);
  }, [language]);

  useEffect(() => {
    if (openedFilter) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openedFilter]);

  useEffect(() => {
    const slug = getSubcategory(subcategoryID) || searchQuery;
    resetedFilter === false &&
      getFilteredProducts(
        categoryID || 2,
        language,
        `&subcategories[0]=${slug}` || searchQuery
      );
    !searchQuery &&
      resetedFilter === false &&
      setSearchQuery(`&subcategories[0]=${slug}`);
  }, [subcategoryID, language]);

  return (
    <>
      <StyledFilterPage>
        {filterState === 'done' ? (
          <>
            <Breadcrumbs page="filter" />
            {screen !== 'desktop' && (
              <>
                <div className="filter__mobile-box">
                  <h2 className="sort-bar__heading">{categoryName}</h2>
                  <div className="filter__mobile-btn-box">
                    <button
                      className="filter__mobile-btn"
                      onClick={() => setOpenedFilter(true)}
                    >
                      <svg width="24px" height="24px">
                        <use href={sprite + '#filter'} />
                      </svg>
                      {t('Фільтри')}
                    </button>

                    <SortBar />
                  </div>
                </div>
                <FilterResult />
                <div className="filter__load-more-btn-box">
                  <button className="filter__load-more-btn" type="button">
                    {t('Завантажити ще')}
                  </button>
                </div>
                {openedFilter ? (
                  // createPortal(
                  <>
                    <div
                      className={
                        openedFilter
                          ? 'filters__backdrop active'
                          : 'filters__backdrop'
                      }
                    ></div>
                    <FilterBar
                      active={openedFilter}
                      setOpenedFilter={setOpenedFilter}
                    />
                  </>
                ) : // ,
                // document.body
                // )
                null}
              </>
            )}
            {screen === 'desktop' && (
              <div className="filter__block">
                <FilterBar />

                <div>
                  {!resetedFilter ? (
                    <div className="filter__title__sorting">
                      <h2 className="sort-bar__heading">{categoryName}</h2>
                      <SortBar />
                    </div>
                  ) : (
                    <div className="filter__title__sorting">
                      <h2 className="sort-bar__heading">{categoryName}</h2>
                    </div>
                  )}
                  <FilterResult />
                </div>
              </div>
            )}
          </>
        ) : null}
      </StyledFilterPage>
    </>
  );
});

export default FilterPage;
