import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { nameRegExp } from '../../../validation/regexp';
import { surNameMessage } from '../../../validation/messages';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Surname = ({ errors, register }) => {
  const { t } = useTranslation();

  return (
    <label className="register-label">
      {t('Прізвище')}
      <input
        className={errors.surname ? 'register-input error' : 'register-input '}
        type="text"
        placeholder={t('Прізвище')}
        {...register('surname', {
          pattern: {
            value: nameRegExp,
            message: surNameMessage.pattern,
          },
          required: surNameMessage.required,
          maxLength: { value: 20, message: surNameMessage.maxLength },
          minLength: {
            value: 2,
            message: surNameMessage.minLength,
          },
        })}
        aria-invalid={errors.surname ? 'true' : 'false'}
      />
      {errors.surname && (
        <svg className="error-icon" width="24px" height="24px">
          <use href={sprite + '#error'} />
        </svg>
      )}
      {errors.surname && (
        <p role="alert" className="register-error">
          {t(`${errors.surname.message}`)}
        </p>
      )}
    </label>
  );
};

export default Surname;

Surname.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
