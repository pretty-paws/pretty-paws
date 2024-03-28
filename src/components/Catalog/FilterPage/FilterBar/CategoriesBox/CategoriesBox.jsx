import React, { useEffect, useState } from 'react';
import sprite from '../../../../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../../store/AuthProvider';
import { useTranslation } from 'react-i18next';

const CategoriesBox = observer(
  ({ setShowFilterBox, showFilterBox, searchParams, setSearchParams }) => {
    const { t } = useTranslation();

    const store = useStore();
    const {
      catalog: { resetedFilter, filters },
    } = store;

    const subcategories = Object.entries(filters?.subcategories);
    const subcategoriesArray = new Array(subcategories.length).fill(false);
    const [isChecked, setIsChecked] = useState(subcategoriesArray);

    useEffect(() => {
      const chosenSubcategories = searchParams
        .get('subcategories')
        ?.split(',')
        .filter(Boolean);
      const initialCheckedState = subcategories.map((_, index) =>
        chosenSubcategories?.includes(subcategories[index][1].slug)
      );
      setIsChecked(initialCheckedState);
    }, []);

    useEffect(() => {
      resetedFilter === true &&
        setIsChecked(new Array(subcategories.length).fill(false));
    }, [resetedFilter]);

    const handleOnChange = position => {
      const updatedCheckedState = isChecked.map((item, index) => {
        return index === position ? !item : item;
      });

      setIsChecked(updatedCheckedState);
    };

    const handleSubcategoryChoice = item => {
      const currentSearchParams = new URLSearchParams(searchParams);
      const subcategories = currentSearchParams.get(`subcategories`);
      if (subcategories === null) handleQuery(item);
      let subcategoriesArray;
      if (subcategories !== null) {
        subcategoriesArray = subcategories.split(',').filter(Boolean);
        if (subcategoriesArray.includes(item)) {
          deleteQuery(item);
        } else {
          handleQuery(item);
        }
      }
    };

    const handleQuery = item => {
      const currentSearchParams = new URLSearchParams(searchParams);
      const existingCategories = currentSearchParams.get('subcategories');
      if (!existingCategories) {
        currentSearchParams.set('subcategories', item);
      } else {
        const allCategories = [existingCategories, item];
        currentSearchParams.set('subcategories', allCategories);
      }

      setSearchParams(currentSearchParams);
    };

    const deleteQuery = itemSlug => {
      const currentSearchParams = new URLSearchParams(searchParams);
      const subcategories = currentSearchParams
        .get(`subcategories`)
        .split(',')
        .filter(Boolean);

      const index = subcategories?.findIndex(item => {
        item === itemSlug;
      });

      subcategories.splice(index, 1);
      currentSearchParams.set('subcategories', subcategories);
      setSearchParams(currentSearchParams);
    };

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
          <p>{t('Категорії')}</p>
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
