import React from 'react';
import sprite from '../../img/svg-sprite/sprite.svg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { StyledRegisterBox } from './RegisterBox.styled';
import { redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useAuthStore } from '../../store/AuthProvider';
import {
  emailRegExp,
  nameRegExp,
  passwordRegExp,
  phoneRegExp,
} from '../../validation/regexp';
import {
  agreementMessage,
  emailMessage,
  nameMessage,
  passwordConfirmMessage,
  passwordMessage,
  phoneMessage,
  surNameMessage,
} from '../../validation/messages';

const RegisterBox = observer(() => {
  const { signUp, setEmail } = useAuthStore();

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [verificationVisibility, setVerificationVisibility] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
    setError,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      surname: '',
      phone_number: ``,
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  const password = watch('password', '');
  const password_confirmation = watch('password_confirmation', '');

  const onSubmit = data => {
    setEmail(data.email);
    signUp(data);
    redirect('/');
    reset();
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
                value: nameRegExp,
                message: nameMessage.pattern,
              },
              required: nameMessage.required,
              maxLength: { value: 20, message: nameMessage.maxLength },
              minLength: {
                value: 2,
                message: nameMessage.minLength,
              },
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
                value: nameRegExp,
                message: surNameMessage.pattern,
              },
              required: surNameMessage.required,
              maxLength: { value: 20, message: surNameMessage.maxLength },
              minLength: {
                value: 2,
                message: surNameMessage.minLength,
              },
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
          <div className="register__country-code">+38</div>
          <input
            onInput={e => {
              if (e.target.value.includes('+38')) {
                e.target.value = e.target.value.replace(/[+38]/g, '');
              }
              e.target.value = e.target.value.replace(/[^0-9+]/g, '');
            }}
            className="register-input phone-input "
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
                value: emailRegExp,
                message: emailMessage.pattern,
              },
              required: emailMessage.required,
              maxLength: { value: 50, message: emailMessage.maxLength },
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
            onInput={e => {
              if (
                e.currentTarget.value !== password_confirmation &&
                password_confirmation !== ''
              )
                setError('password_confirmation', {
                  type: 'manual',
                  message: passwordMessage.notMatch,
                });
              console.log(e.currentTarget.value);
            }}
            className="register-input"
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
              href={
                verificationVisibility ? sprite + '#eye' : sprite + '#eye-off'
              }
            />
          </svg>
        </label>
        {errors.password_confirmation && (
          <p role="alert" className="register-error">
            {errors.password_confirmation.message}
          </p>
        )}
        <div className="button-checkbox-container">
          <button type="submit" className="register-button" disabled={!isValid}>
            Зареєструватися
          </button>
          <div className="checkbox-container">
            <input
              className="register-checkbox"
              type="checkbox"
              placeholder="agree"
              {...register('agree', {
                required: agreementMessage.required,
              })}
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
        <p role="alert" className="register-error">
          {errors.agree?.message}
        </p>
      </form>
    </StyledRegisterBox>
  );
});

export default RegisterBox;
