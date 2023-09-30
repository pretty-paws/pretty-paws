import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledLoginWithPhone } from './LoginWithPhone.styled';
import { phoneRegExp } from '../../validation/regexp';
import { phoneMessage } from '../../validation/messages';
import sprite from '../../img/svg-sprite/sprite.svg';
// import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LoginWithPhone = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    // watch,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      phone_number: '',
    },
  });
  // const [phoneFocused, setPhoneFocused] = useState(false);

  // const phone_number = watch('phone_number', '');

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <StyledLoginWithPhone>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="login-label">
          {t('Телефон')}
          <p className="login__country-code">+380</p>
          <input
            // onFocus={() => setPhoneFocused(true)}
            // onBlur={() => setPhoneFocused(false)}
            onInput={e => {
              e.target.value = e.target.value.replace(/[^0-9+]/g, '');
            }}
            className={
              errors.phone_number
                ? 'login-input phone-input error'
                : 'login-input phone-input'
            }
            type="number"
            // placeholder={phoneFocused ? '' : '+380__ ___ ___'}
            // value={phoneFocused ? phone_number : ''}
            {...register('phone_number', {
              pattern: {
                value: phoneRegExp,
                message: phoneMessage.pattern,
              },
              required: phoneMessage.required,
              maxLength: { value: 9, message: phoneMessage.maxLength },
              minLength: {
                value: 9,
                message: phoneMessage.minLength,
              },
            })}
            aria-invalid={errors.phone_number ? 'true' : 'false'}
          />
          {errors.phone_number && (
            <svg className="error-icon" width="24px" height="24px">
              <use href={sprite + '#error'} />
            </svg>
          )}
          {errors.phone_number && (
            <p role="alert" className="login-error">
              {t(`${errors.phone_number.message}`)}
            </p>
          )}
        </label>

        <div className="button-checkbox-container">
          <button type="submit" className="login-button" disabled={!isValid}>
            {t('Надіслати код підтвердження')}
          </button>
        </div>
      </form>
    </StyledLoginWithPhone>
  );
};

export default LoginWithPhone;
