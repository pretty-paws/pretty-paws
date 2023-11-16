import React, { useEffect, useState } from 'react';
import sprite from '../../../../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../../store/AuthProvider';

const Brand = observer(
  ({
    filters,
    isBrandChosen,
    setIsBrandChosen,
    setShowFilterBox,
    showFilterBox,
  }) => {
    const store = useStore();
    const {
      catalog: { resetedFilter },
    } = store;

    const brands = Object.entries(filters?.brands);
    const brandsArray = new Array(brands.length).fill(false);

    const [isChecked, setIsChecked] = useState(brandsArray);

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
      if (isBrandChosen.includes(item)) {
        const index = isBrandChosen.findIndex(
          subcategory => subcategory === item
        );
        const updatedChosen = [...isBrandChosen];
        updatedChosen.splice(index, 1);
        setIsBrandChosen(updatedChosen);
      } else {
        setIsBrandChosen([...isBrandChosen, item]);
      }
    }
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
          <p>Бренд</p>
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
                      handleSubcategoryChoice(brand[1].slug);
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
