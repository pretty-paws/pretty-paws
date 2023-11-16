import React from 'react';
import { useStore } from '../../../../store/AuthProvider';
import { StyledSortingBar } from './SortBar.styled';
import CustomSelect from './CustomSelect/CustomSelect';
import { observer } from 'mobx-react-lite';

const options = [
  { value: 'expensive', label: 'Від дорогих до дешевих' },
  { value: 'cheap', label: 'Від дешевих до дорогих' },
];

const SortBar = observer(() => {
  const store = useStore();
  const {
    catalog: { categoryName, sortProducts },
  } = store;

  const handleSelectChange = value => {
    console.log('Selected:', value);
    sortProducts(value);
  };

  return (
    <StyledSortingBar>
      <h2 className="sort-bar__heading">{categoryName}</h2>
      <div className="sort-bar__sort-block">
        <p>Сортувати за:</p>
        <CustomSelect options={options} onChange={handleSelectChange} />
      </div>
    </StyledSortingBar>
  );
});

export default SortBar;
