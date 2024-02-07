import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

const Checkbox = observer(({ onRememberMeChange, register, isValid }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="button-checkbox-container">
        <div className="checkbox-container">
          <input
            className="login-checkbox"
            type="checkbox"
            placeholder="rememberMe"
            onClick={e => onRememberMeChange(e)}
            {...register('rememberMe')}
          />
          <p className="login-agree">{t('Запам’ятати мене')}</p>
        </div>
        <p className="login-agree">{t('Забули пароль?')}</p>
      </div>

      <button type="submit" className="login-button" disabled={!isValid}>
        {t('Увійти')}
      </button>
    </>
  );
});

export default Checkbox;

Checkbox.propTypes = {
  onRememberMeChange: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};
