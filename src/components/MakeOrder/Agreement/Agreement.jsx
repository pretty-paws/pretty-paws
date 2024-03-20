import { observer } from 'mobx-react-lite';
import React from 'react';
import { useState } from 'react';
import { StyledAgreement } from './Agreement.styled';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { useTranslation } from 'react-i18next';

const Agreement = observer(({ handleChange, register }) => {
  const { t } = useTranslation();

  const [checked, setChecked] = useState(true);
  return (
    <StyledAgreement className="checkbox-wrapper">
      <label className="agreement__label">
        <input
          className={checked ? 'checked' : ''}
          {...register('agreement', {
            required: true,
          })}
          type="checkbox"
          checked={checked}
          onChange={e => {
            setChecked(e.currentTarget.checked);
            handleChange('agreement', e.currentTarget.checked);
          }}
        />
        {checked ? (
          <svg width="24px" height="24px" className="agreement__check">
            <use href={sprite + '#check'} />
          </svg>
        ) : null}
        <span className="agreement__text">
          {t('Не телефонуйте мені для підтвердження замовлення')}
        </span>
      </label>
    </StyledAgreement>
  );
});

export default Agreement;
