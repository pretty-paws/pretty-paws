import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { emailRegExp } from '../../../validation/regexp';
import { emailMessage } from '../../../validation/messages';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Email = ({
  errors,
  register,
  watch,
  error,
  state,
  errorType,
  setState,
}) => {
  const { t } = useTranslation();
  const email = watch('email', '');

  return (
    <label className="register-label">
      {t('Електронна пошта')}
      <input
        onInput={e => {
          e.target.value = e.target.value.replace(/[!#$%^&*()+=\\<>?,]/g, '');
          email !== e.target.value && setState();
        }}
        className={
          errors.email || (state === 'error' && errorType === 'email')
            ? 'register-input error'
            : 'register-input  '
        }
        type="email"
        placeholder={t('Електронна адреса')}
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
        <p role="alert" className="register-error">
          {t(`${errors.email.message}`)}
        </p>
      )}
      {state === 'error' && errorType === 'email' && !errors.email ? (
        <p role="alert" className="register-error">
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
  error: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  errorType: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
};
