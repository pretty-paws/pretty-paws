import React from 'react';
import { StyledFilterBar } from './FilterBar.styled';
import sprite from '../../../img/svg-sprite/sprite.svg';
// import { useStore } from '../../../store/AuthProvider';

const FilterBar = () => {
  //   const store = useStore();
  //   const {
  //     catalog: {},
  //   } = store;
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
    </StyledFilterBar>
  );
};

export default FilterBar;
