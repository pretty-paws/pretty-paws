import React, { useEffect, useState } from 'react';
import sprite from '../../../../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../../store/AuthProvider';
import { useTranslation } from 'react-i18next';

const Brand = observer(
  ({ setShowFilterBox, showFilterBox, searchParams, setSearchParams }) => {
    const { t } = useTranslation();
    const store = useStore();
    const {
      catalog: { resetedFilter, filters },
    } = store;

    const brands = Object.entries(filters?.brands);
    const brandsArray = new Array(brands.length).fill(false);
    const [isChecked, setIsChecked] = useState(brandsArray);

    useEffect(() => {
      const chosenSubcategories = searchParams
        .get('brands')
        ?.split(',')
        .filter(Boolean);
      const initialCheckedState = brands.map((_, index) =>
        chosenSubcategories?.includes(brands[index][1].slug)
      );

      setIsChecked(initialCheckedState);
    }, []);

    useEffect(() => {
      resetedFilter === true &&
        setIsChecked(new Array(brands.length).fill(false));
    }, [resetedFilter]);

    const handleOnChange = position => {
      const updatedCheckedState = isChecked.map((item, index) => {
        return index === position ? !item : item;
      });

      setIsChecked(updatedCheckedState);
    };

    function handleSubcategoryChoice(item) {
      const currentSearchParams = new URLSearchParams(searchParams);
      const brands = currentSearchParams.get(`brands`);
      if (brands === null) handleQuery(item);
      let brandsArray;
      if (brands !== null) {
        brandsArray = brands.split(',').filter(Boolean);
        if (brandsArray.includes(item)) {
          deleteQuery(item);
        } else {
          handleQuery(item);
        }
      }
    }
    function handleQuery(item) {
      const currentSearchParams = new URLSearchParams(searchParams);
      const existingBrands = currentSearchParams.get('brands');
      if (!existingBrands) {
        currentSearchParams.set('brands', item);
      } else {
        const allBrands = [existingBrands, item];
        currentSearchParams.set('brands', allBrands);
      }

      setSearchParams(currentSearchParams);
    }
    const deleteQuery = itemSlug => {
      const currentSearchParams = new URLSearchParams(searchParams);
      const brands = currentSearchParams
        .get(`brands`)
        .split(',')
        .filter(Boolean);

      const index = brands?.findIndex(item => {
        item === itemSlug;
      });

      brands.splice(index, 1);
      currentSearchParams.set('brands', brands);
      setSearchParams(currentSearchParams);
    };

    return (
      <div>
        <div
          className="filter__price-box"
          onClick={() =>
            setShowFilterBox(prevState => ({
              ...prevState,
              brands: !prevState.brands,
            }))
          }
        >
          <p>{t('Бренд')}</p>
          <svg
            className={
              showFilterBox.brands
                ? 'filter__price-arrow'
                : 'filter__price-arrow-hide'
            }
            width="24px"
            height="24px"
          >
            <use href={sprite + '#arrow-black'} />
          </svg>
        </div>
        {showFilterBox.brands && (
          <ul className="filter__list">
            {Object.entries(filters.brands).map((brand, index) => {
              return (
                <li key={brand[0]} className="filters__list-item">
                  <div
                    className="filters__custom-checkbox"
                    onClick={() => {
                      handleOnChange(index);
                      handleSubcategoryChoice(brand[1].slug, index);
                    }}
                  >
                    <label className="filters__list-label-box">
                      {isChecked[index] ? (
                        <svg
                          className="filter-check"
                          width="24px"
                          height="24px"
                        >
                          <use href={sprite + '#check'} />
                        </svg>
                      ) : null}
                      <input
                        type="checkbox"
                        id={brand[0]}
                        name="scales"
                        defaultChecked={isChecked[index]}
                        className={isChecked[index] ? 'checked' : ''}
                      />
                      <span>{brand[0]}</span>
                    </label>
                  </div>
                  <span className="filters__list-item-amount">
                    ({brand[1].count})
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
);

export default Brand;
