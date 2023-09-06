import React from 'react';
// import sprite from '../../img/svg-sprite/sprite.svg';
import { useForm } from 'react-hook-form';
import { StyledLoginWithPhone } from './LoginWithPhone.styled';
import { phoneRegExp } from '../../validation/regexp';
import { phoneMessage } from '../../validation/messages';
import sprite from '../../img/svg-sprite/sprite.svg';

const LoginWithPhone = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      phone_number: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <StyledLoginWithPhone>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="login-label">
          Телефон
          <div className="login__country-code">+38</div>
          <input
            onInput={e => {
              if (e.target.value.includes('+38')) {
                e.target.value = e.target.value.replace(/[+38]/g, '');
              }
              e.target.value = e.target.value.replace(/[^0-9+]/g, '');
            }}
            className={
              errors.phone_number
                ? 'login-input phone-input error'
                : 'login-input phone-input'
            }
            type="text"
            {...register('phone_number', {
              pattern: {
                value: phoneRegExp,
                message: phoneMessage.pattern,
              },
              required: phoneMessage.required,
              maxLength: { value: 10, message: phoneMessage.maxLength },
              minLength: {
                value: 10,
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
              {errors.phone_number.message}
            </p>
          )}
        </label>

        <div className="button-checkbox-container">
          <button type="submit" className="login-button" disabled={!isValid}>
            Надіслати код підтвердження
          </button>
        </div>
      </form>
    </StyledLoginWithPhone>
  );
};

export default LoginWithPhone;
