import React, { useState } from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { passwordConfirmMessage } from '../../../validation/messages';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const PasswordConfirm = ({ errors, register, watch }) => {
  const { t } = useTranslation();
  const password = watch('password', '');
  const [verificationVisibility, setVerificationVisibility] = useState(false);

  return (
    <label className="register-label">
      {t('Підтвердження пароля')}
      <input
        onInput={e => {
          if (e.target.value.includes(' ')) {
            e.target.value = e.target.value.replace(' ', '');
          }
        }}
        className={
          errors.password_confirmation
            ? 'register-input error'
            : 'register-input  '
        }
        placeholder={t('Пароль')}
        type={verificationVisibility ? 'text' : 'password'}
        {...register('password_confirmation', {
          required: passwordConfirmMessage.required,
          validate: value =>
            value === password || passwordConfirmMessage.notMatch,
        })}
        aria-invalid={errors.password_confirmation ? 'true' : 'false'}
      />
      <svg
        width="24px"
        height="24px"
        className="register-icon-eye"
        onClick={() => setVerificationVisibility(!verificationVisibility)}
      >
        <use
          href={verificationVisibility ? sprite + '#eye' : sprite + '#eye-off'}
        />
      </svg>
      {errors.password_confirmation && (
        <p role="alert" className="register-error">
          {t(`${errors.password_confirmation.message}`)}
        </p>
      )}
    </label>
  );
};

export default PasswordConfirm;

PasswordConfirm.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
};
