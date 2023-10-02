import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { phoneRegExp } from '../../../validation/regexp';
import { phoneMessage } from '../../../validation/messages';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const PhoneNumber = ({
  errors,
  register,
  watch,
  error,
  state,
  errorType,
  setState,
}) => {
  const { t } = useTranslation();

  const phone_number = watch('phone_number', '');

  return (
    <label className="register-label">
      {t('Телефон')}
      <div style={{ position: 'relative' }}>
        <p className="register__country-code">+380</p>
        <input
          onInput={e => {
            const inputValue = e.target.value;
            if (inputValue.startsWith('+380')) {
              e.target.value = inputValue.slice(4);
            }
            e.target.value = e.target.value.replace(/[^0-9]/g, '');

            phone_number !== e.target.value && setState();
          }}
          className={
            errors.phone_number ||
            (state === 'error' && errorType === 'phone_number')
              ? 'register-input phone-input error'
              : 'register-input phone-input '
          }
          type="text"
          {...register('phone_number', {
            pattern: {
              value: phoneRegExp,
              message: phoneMessage.pattern,
            },
            required: phoneMessage.required,
            maxLength: { value: 9, message: phoneMessage.maxLength },
            minLength: {
              value: 9,
              message: phoneMessage.minLength,
            },
          })}
          aria-invalid={errors.phone_number ? 'true' : 'false'}
        />
      </div>
      {errors.phone_number ||
      (state === 'error' && errorType === 'phone_number') ? (
        <svg className="error-icon" width="24px" height="24px">
          <use href={sprite + '#error'} />
        </svg>
      ) : null}
      {errors.phone_number && (
        <p role="alert" className="register-error">
          {t(`${errors.phone_number.message}`)}
        </p>
      )}
      {state === 'error' &&
      errorType === 'phone_number' &&
      !errors.phone_number ? (
        <p role="alert" className="register-error">
          {t(`${error}`)}
        </p>
      ) : null}
    </label>
  );
};

export default PhoneNumber;

PhoneNumber.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  errorType: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
};
