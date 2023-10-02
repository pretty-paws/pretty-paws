import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { passwordRegExp } from '../../../../validation/regexp';
import { passwordMessage } from '../../../../validation/messages';

const Password = ({ errors, register, setError, watch }) => {
  const { t } = useTranslation();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const password_confirmation = watch('password_confirmation', '');

  return (
    <label className={errors.password ? 'edit-label error' : 'edit-label'}>
      <div className="edit-label-text">{t('Змінити пароль')}</div>
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
        className={errors.password ? 'edit-input error' : 'edit-input  '}
        placeholder="********"
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
        className="edit-icon-eye"
        onClick={() => setPasswordVisibility(!passwordVisibility)}
      >
        <use
          href={passwordVisibility ? sprite + '#eye' : sprite + '#eye-off'}
        />
      </svg>
      {errors.password && (
        <p role="alert" className="edit-error ">
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
  setError: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
};
