import React, { useEffect, useState } from 'react';
import sprite from '../../../../../img/svg-sprite/sprite.svg';
// import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../../store/AuthProvider';

const CategoriesBox = observer(
  ({
    filters,
    isCategoryChosen,
    setIsCategoryChosen,
    setShowFilterBox,
    showFilterBox,
    searchParams,
    setSearchParams,
  }) => {
    const store = useStore();
    const {
      catalog: { subcategorySlug, resetedFilter },
    } = store;

    const subcategories = Object.entries(filters?.subcategories);
    const subcategoriesArray = new Array(subcategories.length).fill(false);
    const index = subcategories.findIndex(item => {
      return item[1].slug === subcategorySlug;
    });
    subcategoriesArray[index] = true;

    useEffect(() => {
      setIsCategoryChosen([...isCategoryChosen, subcategorySlug]);
    }, []);

    useEffect(() => {
      resetedFilter === true &&
        setIsChecked(new Array(subcategories.length).fill(false));
    }, [resetedFilter]);

    const [isChecked, setIsChecked] = useState(subcategoriesArray);

    const handleOnChange = position => {
      const updatedCheckedState = isChecked.map((item, index) => {
        return index === position ? !item : item;
      });

      setIsChecked(updatedCheckedState);
    };

    function handleSubcategoryChoice(item) {
      const index = isCategoryChosen.findIndex(
        subcategory => subcategory === item
      );

      if (index !== -1) {
        const index = isCategoryChosen.findIndex(
          subcategory => subcategory === item
        );
        const updatedChosen = [...isCategoryChosen];
        updatedChosen.splice(index, 1);
        console.log('before delete', item, index);
        setIsCategoryChosen(updatedChosen);
        deleteQuery(isCategoryChosen[index], index);
      } else {
        setIsCategoryChosen([...isCategoryChosen, item]);
        handleQuery(item, index);
      }
    }

    function handleQuery(value, index) {
      console.log(value);
      console.log(index);
      const currentSearchParams = new URLSearchParams(searchParams);
      currentSearchParams.set(`category${index}`, value);
      setSearchParams(currentSearchParams.toString());
    }

    function deleteQuery(value, index) {
      console.log(value);
      console.log(index);

      const currentSearchParams = new URLSearchParams(searchParams);
      currentSearchParams.delete(`category${index}`);
      setSearchParams(currentSearchParams.toString());
    }

    return (
      <div>
        <div
          className="filter__price-box"
          onClick={() =>
            setShowFilterBox(prevState => ({
              ...prevState,
              categoriesBox: !prevState.categoriesBox,
            }))
          }
        >
          <p>Категорії</p>
          <svg
            className={
              showFilterBox.categoriesBox
                ? 'filter__price-arrow'
                : 'filter__price-arrow-hide'
            }
            width="24px"
            height="24px"
          >
            <use href={sprite + '#arrow-black'} />
          </svg>
        </div>
        {showFilterBox.categoriesBox && (
          <ul className="filter__list">
            {Object.entries(filters.subcategories).map((subcategory, index) => {
              return (
                <li className="filters__list-item" key={subcategory[0]}>
                  <div
                    className="filters__custom-checkbox"
                    onClick={() => {
                      handleOnChange(index);
                      handleSubcategoryChoice(subcategory[1].slug);
                      handleQuery(subcategory[1].slug, index);
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
                        defaultChecked={isChecked[index]}
                        className={isChecked[index] ? 'checked' : ''}
                      />
                      <span>{subcategory[0]}</span>
                    </label>
                  </div>
                  <span className="filters__list-item-amount">
                    ({subcategory[1].count})
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

export default CategoriesBox;
