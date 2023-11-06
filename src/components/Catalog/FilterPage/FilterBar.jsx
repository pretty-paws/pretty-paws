import React from 'react';
import { StyledFilterBar } from './FilterBar.styled';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { useStore } from '../../../store/AuthProvider';

const FilterBar = () => {
  const store = useStore();
  const {
    catalog: { filters },
  } = store;

  console.log(filters.brands);
  return (
    <StyledFilterBar>
      <div>
        <p>Акційні товари</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        <p>Новинки</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        <div>
          <p>Ціна</p>
          <svg className="filter-arrow" width="24px" height="24px">
            <use href={sprite + '#arrow-gray'} />
          </svg>
        </div>
        <div>
          <label className="">
            Min
            <input type="number" />
            <span className=""></span>
          </label>
          <div></div>
          <label className="">
            Max
            <input type="number" />
            <span className=""></span>
          </label>
        </div>
      </div>
      <div>
        <div>
          <p>Категорії</p>
          <svg className="filter-arrow" width="24px" height="24px">
            <use href={sprite + '#arrow-gray'} />
          </svg>
        </div>
        {/* <div>{animals.</div> */}
      </div>
      <div>
        <div>
          <p>Бренд</p>
          <svg className="filter-arrow" width="24px" height="24px">
            <use href={sprite + '#arrow-gray'} />
          </svg>
        </div>
        {/* <ul> */}
        {/* {Object.entries(filters.brands).map(brand => {
            return (
              <li key={brand[0]}>
                <div>
                  <input type="checkbox" id={brand[0]} name="scales" />
                  <label htmlFor={brand[0]}>{brand[0]}</label>
                </div>
                <div>({brand[1]})</div>
              </li>
            );
          })}
        </ul> */}
      </div>
    </StyledFilterBar>
  );
};

export default FilterBar;
