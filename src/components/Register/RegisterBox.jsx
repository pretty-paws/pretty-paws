import React from 'react';
import sprite from '../../img/svg-sprite/sprite.svg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { StyledRegisterBox } from './RegisterBox.styled';

const RegisterBox = () => {
  const [passwordVisibility, setPasswordVisibility] = useState('false');
  const [verificationVisibility, setVerificationVisibility] = useState('false');
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      surname: '',
      phone_number: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  const password = watch('password', '');

  const onSubmit = data => {
    reset();
    console.log(data);
  };

  return (
    <StyledRegisterBox>
      <h2 className="register-header">Реєстрація</h2>
      <p className="register-text">Введіть свої дані:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="register-label">
          Ім’я
          <input
            className="register-input"
            type="text"
            {...register('name', {
              pattern: {
                value: /^[A-Za-zА-Яа-я']+$/,
                message: 'Використовуйте лише літери',
              },
              required: `Будь ласка, введіть ваше ім'я`,
              maxLength: { value: 20, message: `Оберіть коротше ім'я` },
            })}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
        </label>
        {errors.name && (
          <p role="alert" className="register-error">
            {errors.name.message}
          </p>
        )}
        <label className="register-label">
          Прізвище
          <input
            className="register-input"
            type="text"
            {...register('surname', {
              pattern: {
                value: /^[A-Za-zА-Яа-я']+$/,
                message: 'Використовуйте лише літери',
              },
              required: `Будь ласка, введіть ваше прізвище`,
              maxLength: { value: 20, message: `Оберіть коротше прізвище` },
            })}
            aria-invalid={errors.surname ? 'true' : 'false'}
          />
        </label>
        {errors.surname && (
          <p role="alert" className="register-error">
            {errors.surname.message}
          </p>
        )}
        <label className="register-label">
          Телефон
          <input
            className="register-input"
            type="tel"
            placeholder="+380__ ___ __ __"
            {...register('phone_number', {
              pattern: {
                value: /^[+0-9]+$/,
                message:
                  'Введіть коректний номер телефону у форматі +380 __ ___ __ __',
              },
              required: `Будь ласка, введіть ваш номер телефону`,
              maxLength: { value: 13, message: `Не більше 12 символів` },
              minLength: {
                value: 13,
                message: `Введіть номер телефону у форматі +380 __ ___ __ __`,
              },
            })}
            aria-invalid={errors.phone_number ? 'true' : 'false'}
          />
        </label>
        {errors.phone_number && (
          <p role="alert" className="register-error">
            {errors.phone_number.message}
          </p>
        )}
        <label className="register-label">
          Електронна пошта
          <input
            className="register-input"
            type="email"
            {...register('email', {
              pattern: {
                value: /^\S+@\S+$/i,
                message:
                  'Введіть електронну адресу за зразком email@address.com',
              },
              required: `Будь ласка, введіть ваш email`,
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
        </label>
        {errors.email && (
          <p role="alert" className="register-error">
            {errors.email.message}
          </p>
        )}
        <label className="register-label">
          Пароль
          <input
            className="register-input"
            type={passwordVisibility ? 'text' : 'password'}
            {...register('password', {
              pattern: {
                value: /^(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9])[a-zA-Zа-яА-Я0-9]+$/,
                message:
                  'Пароль повинен мати хоча б одну велику літеру та число',
              },
              required: `Будь ласка, введіть ваш пароль`,
              minLength: {
                value: 6,
                message: `Введений пароль має бути довший за 6 символів`,
              },
            })}
            aria-invalid={errors.password ? 'true' : 'false'}
          />
          <svg
            width="24px"
            height="24px"
            className="register-icon-eye"
            onClick={() => setPasswordVisibility(!passwordVisibility)}
          >
            <use href={sprite + '#eye-off'} />
          </svg>
        </label>
        {errors.password && (
          <p role="alert" className="register-error">
            {errors.password.message}
          </p>
        )}
        <label className="register-label">
          Підтвердження пароля
          <input
            className="register-input"
            type={verificationVisibility ? 'text' : 'password'}
            {...register('password_confirmation', {
              required: 'Будь ласка, підтвердіть пароль',
              validate: value =>
                value === password || 'Введені паролі не збігаються.',
            })}
            aria-invalid={errors.password_confirmation ? 'true' : 'false'}
          />
          <svg
            width="24px"
            height="24px"
            className="register-icon-eye"
            onClick={() => setVerificationVisibility(!verificationVisibility)}
          >
            <use href={sprite + '#eye-off'} />
          </svg>
        </label>
        {errors.password_confirmation && (
          <p role="alert" className="register-error">
            {errors.password_confirmation.message}
          </p>
        )}
        <div className="button-checkbox-container">
          <button type="submit" className="register-button">
            Зареєструватися
          </button>
          <div className="checkbox-container">
            <input
              className="register-checkbox"
              type="checkbox"
              placeholder="agree"
              {...register('agree', {})}
            />
            <p className="register-agree">
              Я згоден з обробкою
              <span className="register-personal-data">
                {' '}
                персональних данних
              </span>
            </p>
          </div>
        </div>
      </form>
    </StyledRegisterBox>
  );
};

export default RegisterBox;
