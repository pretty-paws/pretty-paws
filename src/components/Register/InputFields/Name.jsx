import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { nameRegExp } from '../../../validation/regexp';
import { nameMessage } from '../../../validation/messages';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Name = ({ errors, register }) => {
  const { t } = useTranslation();
  return (
    <label className="register-label">
      {t('Ім’я')}
      <input
        className={errors.name ? 'register-input error' : 'register-input'}
        placeholder={t('Ім’я')}
        type="text"
        {...register('name', {
          pattern: {
            value: nameRegExp,
            message: nameMessage.pattern,
          },
          required: nameMessage.required,
          maxLength: { value: 20, message: nameMessage.maxLength },
          minLength: {
            value: 2,
            message: nameMessage.minLength,
          },
        })}
        aria-invalid={errors.name ? 'true' : 'false'}
      />
      {errors.name && (
        <svg className="error-icon" width="24px" height="24px">
          <use href={sprite + '#error'} />
        </svg>
      )}
      {errors.name && (
        <p role="alert" className="register-error">
          {t(`${errors.name.message}`)}
        </p>
      )}
    </label>
  );
};

export default Name;

Name.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
