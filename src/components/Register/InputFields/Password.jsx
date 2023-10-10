import React, { useState } from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { passwordRegExp } from '../../../validation/regexp';
import { passwordMessage } from '../../../validation/messages';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Password = ({ errors, register, watch, setError }) => {
  const { t } = useTranslation();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const password_confirmation = watch('password_confirmation', '');

  return (
    <label className="register-label">
      {t('Пароль')}
      <input
        onInput={e => {
          if (e.target.value.includes(' ')) {
            e.target.value = e.target.value.replace(' ', '');
          }
          if (
            e.currentTarget.value !== password_confirmation &&
            password_confirmation !== ''
          )
            setError('password_confirmation', {
              type: 'manual',
              message: passwordMessage.notMatch,
            });
        }}
        className={
          errors.password ? 'register-input error' : 'register-input  '
        }
        placeholder={t('Пароль')}
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
        className="register-icon-eye"
        onClick={() => setPasswordVisibility(!passwordVisibility)}
      >
        <use
          href={passwordVisibility ? sprite + '#eye' : sprite + '#eye-off'}
        />
      </svg>
      {errors.password && (
        <p role="alert" className="register-error ">
          {t(`${errors.password.message}`)}
        </p>
      )}
    </label>
  );
};

export default Password;

Password.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};
