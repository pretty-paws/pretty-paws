import React, { useState } from 'react';
import { StyledFilterBar } from './FilterBar.styled';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { useStore } from '../../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import CategoriesBox from './CategoriesBox/CategoriesBox';
import SaleAndNewBox from './SaleAndNewBox/SaleAndNewBox';
import Price from './Price/Price';
import Brand from './Brand/Brand';
import Countries from './Countries/Countries';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import useWindowSize from '../../../../hooks/useWindowSize';
import { useTranslation } from 'react-i18next';

const FilterBar = observer(({ setOpenedFilter, active }) => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();
  const [searchParams, setSearchParams] = useSearchParams({});

  const store = useStore();
  const {
    auth: { language },
    catalog: {
      filters,
      categoryID,
      getFilteredProducts,
      resetFilter,
      setFilter,
      setSearchQuery,
      // searchQuery,
      // resetedFilter,
    },
  } = store;

  const [showFilterBox, setShowFilterBox] = useState({
    price: true,
    categoriesBox: true,
    brands: true,
    countries: true,
  });

  const [isNewChosen, setIsNewChosen] = useState('');
  const [isSaleChosen, setIsSaleChosen] = useState('');

  const [isMinPriceChosen, setMinIsPriceChosen] = useState(null);
  const [isMaxPriceChosen, setMaxIsPriceChosen] = useState(null);
  const [categoryQuery, setCategoryQuery] = useState(null);
  const [brandsQuery, setBrandsQuery] = useState(null);
  const [countriesQuery, setCountriesQuery] = useState(null);

  const id = categoryID || localStorage.getItem('categoryID');

  const query =
    (isMinPriceChosen ?? '') +
    (isMaxPriceChosen ?? '') +
    (categoryQuery ?? '') +
    (brandsQuery ?? '') +
    (countriesQuery ?? '') +
    (isNewChosen ?? '') +
    (isSaleChosen ?? '');

  // useEffect(() => {
  //   searchQuery !== '' &&
  //     resetedFilter !== false &&
  //     getFilteredProducts(id, language, searchQuery);
  // }, []);

  useEffect(() => {
    const newItem = searchParams.get('new');
    let query;
    if (newItem) {
      query = `&new=${newItem}`;
    }
    setIsNewChosen(query);
  }, [searchParams]);

  useEffect(() => {
    const sale = searchParams.get('is_promotional');
    let query;
    if (sale) {
      query = `&is_promotional=${sale}`;
    }
    setIsSaleChosen(query);
  }, [searchParams]);

  useEffect(() => {
    const price_min = searchParams.get('price_min');
    let query;
    if (price_min) {
      query = `&price_min=${price_min}`;
    }
    setMinIsPriceChosen(query);
  }, [searchParams]);

  useEffect(() => {
    const price_max = searchParams.get('price_max');
    let query;
    if (price_max) {
      query = `&price_max=${price_max}`;
    }
    setMaxIsPriceChosen(query);
  }, [searchParams]);

  useEffect(() => {
    const chosenSubcategories = searchParams.get('subcategories');
    let subcategoriesArray;
    if (chosenSubcategories) {
      subcategoriesArray = chosenSubcategories.split(',').filter(Boolean);
    }

    const query = subcategoriesArray
      ?.map((item, index) => `&subcategories[${index}]=${item}`)
      .join('');

    setCategoryQuery(query);
  }, [searchParams]);

  useEffect(() => {
    const chosenBrands = searchParams.get('brands');
    let brandsArray;
    if (chosenBrands) {
      brandsArray = chosenBrands.split(',').filter(Boolean);
    }

    const query = brandsArray
      ?.map((item, index) => `&brands[${index}]=${item}`)
      .join('');

    setBrandsQuery(query);
  }, [searchParams]);

  useEffect(() => {
    const chosenCountries = searchParams.get('countries');
    let countriesArray;
    if (chosenCountries) {
      countriesArray = chosenCountries.split(',').filter(Boolean);
    }

    const query = countriesArray
      ?.map((item, index) => `&countries[${index}]=${item}`)
      .join('');

    setCountriesQuery(query);
  }, [searchParams]);

  function handleApplyClick() {
    setFilter();
    getFilteredProducts(id, language, query);
    setSearchQuery(query);
    console.log('query after filter click', query);
    screen !== 'desktop' && setOpenedFilter(false);
  }

  function handleResetClick() {
    resetFilter();
    searchParams.delete('is_promotional');
    searchParams.delete('price_min');
    searchParams.delete('price_max');
    searchParams.delete('new');
    searchParams.delete('subcategories');
    searchParams.delete('brands');
    searchParams.delete('countries');
    setSearchParams(searchParams);
    setSearchQuery('');
    setShowFilterBox(prev => ({
      ...prev,
      brands: false,
      countries: false,
    }));
    screen !== 'desktop' && setOpenedFilter(false);
  }

  return (
    <StyledFilterBar className={active && 'active'}>
      {filters !== undefined ? (
        <>
          {screen !== 'desktop' && (
            <div
              className="filter__mobile-top-bar"
              onClick={() => setOpenedFilter(false)}
            >
              {screen === 'mobile' ? (
                <svg className="filter-icon" width="28px" height="28px">
                  <use href={sprite + '#arrow-black'} />
                </svg>
              ) : (
                <svg className="filter-icon" width="28px" height="28px">
                  <use href={sprite + '#close'} />
                </svg>
              )}
              <p>{t('Фільтри')}</p>
            </div>
          )}
          <div className="filter-bar__all-filters">
            <SaleAndNewBox
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <Price
              filters={filters}
              setShowFilterBox={setShowFilterBox}
              showFilterBox={showFilterBox}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <CategoriesBox
              setShowFilterBox={setShowFilterBox}
              showFilterBox={showFilterBox}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <Brand
              filters={filters}
              setShowFilterBox={setShowFilterBox}
              showFilterBox={showFilterBox}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <Countries
              filters={filters}
              setShowFilterBox={setShowFilterBox}
              showFilterBox={showFilterBox}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />

            <div className="filter__show-more">
              <svg className="filter-plus" width="28px" height="28px">
                <use href={sprite + '#plus'} />
              </svg>
              <p>{t('Показати більше')}</p>
            </div>
            <div className="filter__button-container">
              <button
                className="filter__button-apply"
                type="button"
                onClick={() => {
                  handleApplyClick();
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                {t('Застосувати фільтри')}
              </button>
              <button
                className="filter__button-clear"
                type="button"
                onClick={() => {
                  handleResetClick();
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                {t('Очистити фільтри')}
              </button>
            </div>
          </div>
        </>
      ) : null}
    </StyledFilterBar>
  );
});

export default FilterBar;
