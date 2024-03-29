import React, { useEffect } from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { emailRegExp } from '../../../validation/regexp';
import { emailMessage } from '../../../validation/messages';

const Email = ({
  errors,
  register,
  watch,
  setState,
  errorType,
  state,
  error,
}) => {
  useEffect(() => {
    setState();
  }, []);

  const { t } = useTranslation();
  const email = watch('email', '');

  return (
    <label className="login-label">
      {t('Ваша електронна адреса')}
      <input
        onFocus={() => {
          setState();
        }}
        onInput={e => {
          const sanitizedValue = e.target.value.replace(
            /[!#$%^&*()+=\\<>?,]/g,
            ''
          );

          e.target.value = sanitizedValue;

          email !== sanitizedValue && setState();
        }}
        className={
          errors.email || (state === 'error' && errorType === 'email')
            ? 'login-input error'
            : 'login-input '
        }
        type="email"
        placeholder={t('Електронна адреса ')}
        {...register('email', {
          pattern: {
            value: emailRegExp,
            message: emailMessage.pattern,
          },
          required: emailMessage.required,
          maxLength: { value: 50, message: emailMessage.maxLength },
        })}
        aria-invalid={errors.email ? 'true' : 'false'}
      />
      {errors.email || (state === 'error' && errorType === 'email') ? (
        <svg className="error-icon" width="24px" height="24px">
          <use href={sprite + '#error'} />
        </svg>
      ) : null}
      {errors.email && (
        <p role="alert" className="login-error">
          {t(`${errors.email.message}`)}
        </p>
      )}
      {state === 'error' && errorType === 'email' && !errors.email ? (
        <p role="alert" className="login-error">
          {t(`${error}`)}
        </p>
      ) : null}
    </label>
  );
};
export default Email;

Email.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  errorType: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};
