import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { passwordConfirmMessage } from '../../../../validation/messages';
import useWindowSize from '../../../../hooks/useWindowSize';

const PasswordConfirm = ({ errors, register, password }) => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();

  const [verificationVisibility, setVerificationVisibility] = useState(false);

  return (
    <label
      className={
        errors.password_confirmation ? 'edit-label error' : 'edit-label'
      }
    >
      <div className="edit-label-text">
        {screen !== 'desktop' ? t('Ще раз пароль') : t('Ще раз новий пароль')}
      </div>
      <input
        onInput={e => {
          if (e.target.value.includes(' ')) {
            e.target.value = e.target.value.replace(' ', '');
          }
        }}
        className={
          errors.password_confirmation ? 'edit-input error' : 'edit-input  '
        }
        placeholder="********"
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
        className="edit-icon-eye"
        onClick={() => setVerificationVisibility(!verificationVisibility)}
      >
        <use
          href={verificationVisibility ? sprite + '#eye' : sprite + '#eye-off'}
        />
      </svg>
      {errors.password_confirmation && (
        <p role="alert" className="edit-error">
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
  password: PropTypes.string,
};
