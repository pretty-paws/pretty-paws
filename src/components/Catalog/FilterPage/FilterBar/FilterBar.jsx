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

const FilterBar = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams({});
  console.log(searchParams);

  const store = useStore();
  const {
    catalog: {
      filters,
      categoryID,
      getFilteredProducts,
      resetFilter,
      setFilter,
    },
  } = store;

  const [showFilterBox, setShowFilterBox] = useState({
    price: true,
    categoriesBox: true,
    brands: true,
    countries: true,
  });

  const [isCategoryChosen, setIsCategoryChosen] = useState([]);
  const [isBrandChosen, setIsBrandChosen] = useState([]);
  const [isCountryChosen, setIsCountryChosen] = useState([]);
  const [isNewChosen, setIsNewChosen] = useState('');
  const [isSaleChosen, setIsSaleChosen] = useState('');

  const priceQuery = `&price_min=${filters.prices[0]}&price_max=${filters.prices[1]}`;
  const [isPriceChosen, setIsPriceChosen] = useState(priceQuery);

  const categoryQuery = isCategoryChosen
    .map((item, index) => `&subcategories[${index}]=${item}`)
    .join('');
  const brandQuery = isBrandChosen
    .map((item, index) => {
      return `&brands[${index}]=${item}`;
    })
    .join('');
  const countryQuery = isCountryChosen
    .map((item, index) => {
      return `&countries[${index}]=${item}`;
    })
    .join('');

  // useEffect(() => {
  //   const newSearchParams = new URLSearchParams();

  //   newSearchParams.set('sale', isSaleChosen);
  //   newSearchParams.set('new', isNewChosen);
  //   newSearchParams.set('price', isPriceChosen);

  //   isCategoryChosen.forEach(item => {
  //     newSearchParams.append(`subcategories`, item);
  //   });

  //   isBrandChosen.forEach(item => {
  //     newSearchParams.append(`brands`, item);
  //   });

  //   isCountryChosen.forEach(item => {
  //     newSearchParams.append(`countries`, item);
  //   });

  //   setSearchParams(newSearchParams.toString());
  // }, [
  //   isCategoryChosen,
  //   isBrandChosen,
  //   isPriceChosen,
  //   isSaleChosen,
  //   isNewChosen,
  //   isCountryChosen,
  // ]);

  // useEffect(() => {
  //   const price = searchParams.get('price');
  //   const subcategories = searchParams.getAll('subcategories');
  //   const countries = searchParams.getAll('countries');
  //   const brands = searchParams.getAll('brands');
  //   const sale = searchParams.get('sale');
  //   const newProducts = searchParams.get('new');

  //   console.log(subcategories);
  //   const subcategoriesQuery = subcategories
  //     .map((item, index) => `&subcategories[${index}]=${item}`)
  //     .join('');
  //   const countriesQuery = countries
  //     .map((item, index) => `&countries[${index}]=${item}`)
  //     .join('');
  //   const brandsQuery = brands
  //     .map((item, index) => `&brands[${index}]=${item}`)
  //     .join('');
  //   const query =
  //     price +
  //     sale +
  //     newProducts +
  //     subcategoriesQuery +
  //     countriesQuery +
  //     brandsQuery +
  //     isNewChosen +
  //     isSaleChosen;

  //   getFilteredProducts(id, language, query);
  // }, []);

  const language = localStorage.getItem('language') || 'ua';
  const id = categoryID || localStorage.getItem('categoryID');
  const query =
    isPriceChosen +
    categoryQuery +
    brandQuery +
    countryQuery +
    isNewChosen +
    isSaleChosen;

  function handleApplyClick() {
    setFilter();
    setSearchParams({ sale: isSaleChosen });
    setSearchParams({ new: isNewChosen });
    setSearchParams({ price: isPriceChosen });
    getFilteredProducts(id, language, query);

    // const newSearchParams = new URLSearchParams();

    // newSearchParams.set('sale', isSaleChosen);
    // newSearchParams.set('new', isNewChosen);
    // newSearchParams.set('price', isPriceChosen);

    // isCategoryChosen.forEach(item => {
    //   newSearchParams.append(`subcategories`, item);
    // });

    // isBrandChosen.forEach(item => {
    //   newSearchParams.append(`brands`, item);
    // });

    // isCountryChosen.forEach(item => {
    //   newSearchParams.append(`countries`, item);
    // });

    // setSearchParams(newSearchParams.toString());
    // localStorage.setItem('searchQuery', JSON.stringify(newSearchParams));
  }

  function handleResetClick() {
    setIsSaleChosen('');
    setIsNewChosen('');
    setIsCategoryChosen([]);
    setIsBrandChosen([]);
    setIsCountryChosen([]);
    resetFilter();
  }

  return (
    <StyledFilterBar>
      {filters !== undefined ? (
        <>
          <div className="filter-bar__all-filters">
            <SaleAndNewBox
              setIsNewChosen={setIsNewChosen}
              setIsSaleChosen={setIsSaleChosen}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <Price
              filters={filters}
              setIsPriceChosen={setIsPriceChosen}
              setShowFilterBox={setShowFilterBox}
              showFilterBox={showFilterBox}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <CategoriesBox
              filters={filters}
              isCategoryChosen={isCategoryChosen}
              setIsCategoryChosen={setIsCategoryChosen}
              setShowFilterBox={setShowFilterBox}
              showFilterBox={showFilterBox}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <Brand
              filters={filters}
              isBrandChosen={isBrandChosen}
              setIsBrandChosen={setIsBrandChosen}
              setShowFilterBox={setShowFilterBox}
              showFilterBox={showFilterBox}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <Countries
              filters={filters}
              isCountryChosen={isCountryChosen}
              setIsCountryChosen={setIsCountryChosen}
              setShowFilterBox={setShowFilterBox}
              showFilterBox={showFilterBox}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />

            <div className="filter__show-more">
              <svg className="filter-plus" width="28px" height="28px">
                <use href={sprite + '#plus'} />
              </svg>
              <p>Показати більше</p>
            </div>
          </div>
          <div className="filter__button-container">
            <button
              className="filter__button-apply"
              type="button"
              onClick={() => handleApplyClick()}
            >
              Застосувати фільтри
            </button>
            <button
              className="filter__button-clear"
              type="button"
              onClick={() => handleResetClick()}
            >
              Очистити фільтри
            </button>
          </div>
        </>
      ) : null}
    </StyledFilterBar>
  );
});

export default FilterBar;
