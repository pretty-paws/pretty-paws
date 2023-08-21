import React from 'react';
import sprite from '../../img/svg-sprite/sprite.svg';
import { useForm } from 'react-hook-form';
import { StyledLoginWithPhone } from './LoginWithPhone.styled';
// import { useState } from 'react';

// import store from '../../store';

const LoginWithPhone = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
          <input
            className="login-input"
            type="number"
            placeholder="+380__ ___ __ __"
            {...register('phone_number', {
              pattern: {
                value: /^[+0-9]+$/,
                message:
                  'Введіть коректний номер телефону у форматі +380 __ ___ __ __',
              },
              required: `Будь ласка, введіть ваш номер телефону`,
              maxLength: { value: 12, message: `Не більше 12 символів` },
              minLength: {
                value: 12,
                message: `Введіть номер телефону у форматі +380 __ ___ __ __`,
              },
            })}
            aria-invalid={errors.phone_number ? 'true' : 'false'}
          />
        </label>
        {errors.phone_number && (
          <p role="alert" className="login-error">
            {errors.phone_number.message}
          </p>
        )}

        <div className="button-checkbox-container">
          <button type="submit" className="login-button">
            Надіслати код підтвердження
          </button>
          <svg className="login-arrow" width="36px" height="36px">
            <use href={sprite + '#arrow'} />
          </svg>
        </div>
      </form>
    </StyledLoginWithPhone>
  );
};

export default LoginWithPhone;