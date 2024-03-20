import React from 'react';
import { useStore } from '../../../../store/AuthProvider';
import { StyledSortingBar } from './SortBar.styled';
import CustomSelect from './CustomSelect/CustomSelect';
import { observer } from 'mobx-react-lite';
import useWindowSize from '../../../../hooks/useWindowSize';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const options = [
  { value: 'expensive', label: 'Від дорогих до дешевих' },
  { value: 'cheap', label: 'Від дешевих до дорогих' },
];

const SortBar = observer(() => {
  const { t } = useTranslation();

  const { screen } = useWindowSize();
  const store = useStore();
  const {
    catalog: { sortProducts },
  } = store;

  const [mobileValue, setMobileValue] = useState('expensive');

  const handleSelectChange = value => {
    sortProducts(value);
  };

  const handleMobileSelectChange = value => {
    value === 'expensive' && setMobileValue('cheap');
    value === 'cheap' && setMobileValue('expensive');
    sortProducts(value);
  };

  return (
    <StyledSortingBar>
      <div className="sort-bar__sort-block">
        {screen !== 'mobile' && (
          <>
            {screen === 'desktop' && <p>{t('Сортувати за:')}</p>}
            <CustomSelect options={options} onChange={handleSelectChange} />
          </>
        )}
        {screen === 'mobile' && (
          <div
            className="sort-bar__mobile"
            onClick={() => handleMobileSelectChange(mobileValue)}
          >
            <svg width="24px" height="24px">
              <use href={sprite + '#sort'} />
            </svg>
            <p>{t('Ціна')}</p>
          </div>
        )}
      </div>
    </StyledSortingBar>
  );
});

export default SortBar;
