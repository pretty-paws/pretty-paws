import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { phoneEditRegExp } from '../../../../validation/regexp';
import { phoneMessage } from '../../../../validation/messages';

const PhoneNumber = ({ errors, register }) => {
  const { t } = useTranslation();

  return (
    <label className={errors.phone_number ? 'edit-label error' : 'edit-label'}>
      <div className="edit-label-text">{t('Телефон')}</div>
      <input
        onInput={e => {
          let value = e.target.value.replace(/[^0-9+]/g, '');
          let plusCount = (value.match(/\+/g) || []).length;

          if (plusCount > 1) {
            value = value.slice(0, value.lastIndexOf('+'));
          }
          e.target.value = value;
        }}
        className={
          errors.phone_number
            ? 'edit-input phone-input error'
            : 'edit-input phone-input '
        }
        type="text"
        {...register('phone_number', {
          pattern: {
            value: phoneEditRegExp,
            message: phoneMessage.pattern,
          },
          required: phoneMessage.required,
          maxLength: { value: 13, message: phoneMessage.maxLength },
          minLength: {
            value: 13,
            message: phoneMessage.minLength,
          },
        })}
        aria-invalid={errors.phone_number ? 'true' : 'false'}
      />
      {errors.phone_number && (
        <svg className="error-icon" width="24px" height="24px">
          <use href={sprite + '#error'} />
        </svg>
      )}
      {errors.phone_number && (
        <p role="alert" className="edit-error">
          {t(`${errors.phone_number.message}`)}
        </p>
      )}
    </label>
  );
};

export default PhoneNumber;

PhoneNumber.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
