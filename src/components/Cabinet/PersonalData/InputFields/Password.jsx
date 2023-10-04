import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { passwordRegExp } from '../../../../validation/regexp';
import { passwordMessage } from '../../../../validation/messages';
import { observer } from 'mobx-react-lite';

const Password = observer(
  ({
    errors,
    register,
    setError,
    watch,
    handleEditingStart,
    errorType,
    state,
    setState,
  }) => {
    const { t } = useTranslation();
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const new_password_confirmation = watch('new_password_confirmation', '');

    return (
      <label
        className={errors.new_password ? 'edit-label error' : 'edit-label'}
      >
        <div className="edit-label-text">{t('Змінити пароль')}</div>
        <input
          onInput={e => {
            handleEditingStart();
            setState('done');
            if (e.target.value.includes(' ')) {
              e.target.value = e.target.value.replace(' ', '');
            }
            if (
              e.currentTarget.value !== new_password_confirmation &&
              new_password_confirmation !== ''
            )
              setError('new_password_confirmation', {
                type: 'manual',
                message: passwordMessage.notMatch,
              });
          }}
          className={errors.new_password ? 'edit-input error' : 'edit-input  '}
          placeholder="********"
          type={passwordVisibility ? 'text' : 'password'}
          {...register('new_password', {
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
          aria-invalid={errors.new_password ? 'true' : 'false'}
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
        {errors.new_password && (
          <p role="alert" className="edit-error ">
            {t(`${errors.new_password.message}`)}
          </p>
        )}
        {state === 'error' && errorType === 'password-change' ? (
          <p role="alert" className="edit-error ">
            {t('Ви використали старий пароль')}
          </p>
        ) : null}
      </label>
    );
  }
);

export default Password;

Password.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  handleEditingStart: PropTypes.func,
  errorType: PropTypes.string,
  state: PropTypes.string,
  setState: PropTypes.func,
};
