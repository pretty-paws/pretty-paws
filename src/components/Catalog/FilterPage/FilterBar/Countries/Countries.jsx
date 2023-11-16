import React, { useEffect, useState } from 'react';
import sprite from '../../../../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../../store/AuthProvider';

const Countries = observer(
  ({
    filters,
    isCountryChosen,
    setIsCountryChosen,
    setShowFilterBox,
    showFilterBox,
  }) => {
    const store = useStore();
    const {
      catalog: { resetedFilter },
    } = store;

    const countries = Object.entries(filters?.countries);
    const countriesArray = new Array(countries.length).fill(false);
    const [isChecked, setIsChecked] = useState(countriesArray);

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

    function handleSubcategoryChoice(item) {
      if (isCountryChosen.includes(item)) {
        const index = isCountryChosen.findIndex(
          subcategory => subcategory === item
        );
        const updatedChosen = [...isCountryChosen];
        updatedChosen.splice(index, 1);
        setIsCountryChosen(updatedChosen);
      } else {
        setIsCountryChosen([...isCountryChosen, item]);
      }
    }

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
          <p>Країна</p>
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
