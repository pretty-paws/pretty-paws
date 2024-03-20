import React, { useEffect, useState } from 'react';
import sprite from '../../../../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../../store/AuthProvider';
import { useTranslation } from 'react-i18next';

const Countries = observer(
  ({
    // filters,
    // isCountryChosen,
    // setIsCountryChosen,
    setShowFilterBox,
    showFilterBox,
    searchParams,
    setSearchParams,
  }) => {
    const { t } = useTranslation();

    const store = useStore();
    const {
      catalog: { resetedFilter, filters },
    } = store;

    const countries = Object.entries(filters?.countries);
    const countriesArray = new Array(countries.length).fill(false);
    const [isChecked, setIsChecked] = useState(countriesArray);

    useEffect(() => {
      const chosenCountries = searchParams
        .get('countries')
        ?.split(',')
        .filter(Boolean);
      const initialCheckedState = countries.map((_, index) =>
        chosenCountries?.includes(countries[index][1].slug)
      );

      setIsChecked(initialCheckedState);
    }, []);

    useEffect(() => {
      resetedFilter === true &&
        setIsChecked(new Array(countries.length).fill(false));
    }, [resetedFilter]);

    const handleOnChange = position => {
      const updatedCheckedState = isChecked.map((item, index) => {
        return index === position ? !item : item;
      });

      setIsChecked(updatedCheckedState);
    };

    const handleSubcategoryChoice = item => {
      const currentSearchParams = new URLSearchParams(searchParams);
      const countries = currentSearchParams.get(`countries`);
      if (countries === null) handleQuery(item);
      let countriesArray;
      if (countries !== null) {
        countriesArray = countries.split(',').filter(Boolean);
        if (countriesArray.includes(item)) {
          deleteQuery(item);
        } else {
          handleQuery(item);
        }
      }
    };

    const handleQuery = item => {
      const currentSearchParams = new URLSearchParams(searchParams);
      const existingCountries = currentSearchParams.get('countries');
      if (!existingCountries) {
        currentSearchParams.set('countries', item);
      } else {
        const allCountries = [existingCountries, item];
        currentSearchParams.set('countries', allCountries);
      }

      setSearchParams(currentSearchParams);
    };

    const deleteQuery = itemSlug => {
      const currentSearchParams = new URLSearchParams(searchParams);
      const countries = currentSearchParams
        .get(`countries`)
        .split(',')
        .filter(Boolean);

      const index = countries?.findIndex(item => {
        item === itemSlug;
      });

      countries.splice(index, 1);
      currentSearchParams.set('countries', countries);
      setSearchParams(currentSearchParams);
    };
    return (
      <div>
        <div
          className="filter__price-box"
          onClick={() =>
            setShowFilterBox(prevState => ({
              ...prevState,
              countries: !prevState.countries,
            }))
          }
        >
          <p>{t('Країна')}</p>
          <svg
            className={
              showFilterBox.countries
                ? 'filter__price-arrow'
                : 'filter__price-arrow-hide'
            }
            width="24px"
            height="24px"
          >
            <use href={sprite + '#arrow-black'} />
          </svg>
        </div>
        {showFilterBox.countries && (
          <ul className="filter__list">
            {Object.entries(filters.countries).map((country, index) => {
              return (
                <li key={country[0]} className="filters__list-item">
                  <div
                    className="filters__custom-checkbox"
                    onClick={() => {
                      handleOnChange(index);
                      handleSubcategoryChoice(country[1].slug);
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
                        id={country[0]}
                        name="scales"
                        defaultChecked={isChecked[index]}
                        className={isChecked[index] ? 'checked' : ''}
                      />
                      <span>{country[0]}</span>
                    </label>
                  </div>
                  <span className="filters__list-item-amount">
                    ({country[1].count})
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

export default Countries;
