import React from 'react';
import { agreementMessage } from '../../../validation/messages';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Checkbox = ({ errors, register, isValid }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="checkbox-container">
        <input
          className="register-checkbox"
          type="checkbox"
          placeholder="agree"
          {...register('agree', {
            required: agreementMessage.required,
          })}
        />
        <p className="register-agree">
          {t('Я згоден з обробкою')}
          <span className="register-personal-data">
            {' '}
            {t('персональних данних')}
          </span>
        </p>
        {errors.agree?.message !== undefined && (
          <p role="alert" className="register-error">
            {t(`${errors.agree?.message}`)}
          </p>
        )}
      </div>
      <div className="button-checkbox-container">
        <button type="submit" className="register-button" disabled={!isValid}>
          {t('Зареєструватися')}
        </button>
      </div>
    </>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};
