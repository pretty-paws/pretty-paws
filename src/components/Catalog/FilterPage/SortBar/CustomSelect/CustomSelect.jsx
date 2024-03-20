import { observer } from 'mobx-react-lite';
import { useRef, useState } from 'react';
import { StyledSelect } from './CustomSelect.styled';
import sprite from '../../../../../img/svg-sprite/sprite.svg';
import { useOutsideClickDetect } from '../../../../../hooks/useOutsideClickDetect';
import { useTranslation } from 'react-i18next';

const CustomSelect = observer(({ options, onChange }) => {
  const { t } = useTranslation();

  const [selectedValue, setSelectedValue] = useState(
    t('Від дешевих до дорогих')
  );
  const [openedOptions, setOpenedOptions] = useState(false);
  const selectRef = useRef(null);
  useOutsideClickDetect(selectRef, setOpenedOptions);

  const handleSelectChange = option => {
    onChange(option.value);
    setSelectedValue(option.label);
    setOpenedOptions(!openedOptions);
  };

  return (
    <StyledSelect
      onClick={() => setOpenedOptions(!openedOptions)}
      ref={selectRef}
    >
      <div className="select__box">
        <p>{selectedValue}</p>
        <svg
          className={openedOptions ? 'select-arrow' : 'select-arrow-hide'}
          width="24px"
          height="24px"
        >
          <use href={sprite + '#arrow-black'} />
        </svg>
      </div>
      {openedOptions
        ? options.map(option => (
            <div
              className={`select__option ${option.value || ''}`}
              key={option.value}
              onClick={e => {
                e.stopPropagation();
                handleSelectChange(option);
              }}
            >
              {t(option.label)}
            </div>
          ))
        : null}
    </StyledSelect>
  );
});

export default CustomSelect;
