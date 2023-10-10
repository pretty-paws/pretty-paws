import React, { useState } from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { passwordRegExp } from '../../../validation/regexp';
import { passwordMessage } from '../../../validation/messages';

const Password = ({
  errors,
  register,
  watch,
  setState,
  errorType,
  state,
  error,
}) => {
  const { t } = useTranslation();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const password = watch('password', '');

  return (
    <label className="login-label">
      {t('Пароль')}
      <input
        onInput={e => {
          // console.log(e.target.value);
          if (e.target.value.includes(' ')) {
            e.target.value = e.target.value.replace(' ', '');
          }

          password !== e.target.value && setState();
        }}
        placeholder={t('Пароль')}
        className={
          errors.password || (state === 'error' && errorType === 'password')
            ? 'login-input error'
            : 'login-input '
        }
        type={passwordVisibility ? 'text' : 'password'}
        {...register('password', {
          pattern: {
            value: passwordRegExp,
            message: passwordMessage.pattern,
          },
          required: passwordMessage.required,
          minLength: {
            value: 6,
            message: passwordMessage.minLength,
          },
          maxLength: { value: 50, message: passwordMessage.maxLength },
        })}
        aria-invalid={errors.password ? 'true' : 'false'}
      />
      <svg
        width="24px"
        height="24px"
        className="login-icon-eye"
        onClick={() => setPasswordVisibility(!passwordVisibility)}
      >
        <use
          href={passwordVisibility ? sprite + '#eye' : sprite + '#eye-off'}
        />
      </svg>
      {errors.password && (
        <p role="alert" className="login-error">
          {t(`${errors.password.message}`)}
        </p>
      )}
      {state === 'error' && errorType === 'password' ? (
        <p role="alert" className="login-error">
          {t(`${error}`)}
        </p>
      ) : null}
    </label>
  );
};

export default Password;

Password.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  errorType: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};
