import React from 'react';
import sprite from '../../img/svg-sprite/sprite.svg';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { StyledRegisterBox } from './RegisterBox.styled';
import { redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/AuthProvider';
import useWindowSize from '../../hooks/useWindowSize';
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
import { SocialNetsAuth } from '../LogIn/SocialNetsAuth';

const RegisterBox = observer(() => {
  const store = useStore();
  const {
    auth: { signUp, setEmail },
  } = store;

  const { screen } = useWindowSize();
  const [phoneFocused, setPhoneFocused] = useState(false);
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
      phone_number: `+380`,
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  const phone_number = watch('phone_number', '');
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
      {screen === 'mobile' && (
        <p className="login-text">
          Уже маєш акаунт?
          <Link to="/login">
            {' '}
            <span className="login-phrase">Увійти</span>
          </Link>{' '}
          та користуйся усіма доступними перевагами.
        </p>
      )}
      <p className="register-text">Введіть свої дані:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="register-label">
          Ім’я
          <input
            className={errors.name ? 'register-input error' : 'register-input'}
            placeholder="Ім’я"
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
          {errors.name && (
            <svg className="error-icon" width="24px" height="24px">
              <use href={sprite + '#error'} />
            </svg>
          )}
          {errors.name && (
            <p role="alert" className="register-error">
              {errors.name.message}
            </p>
          )}
        </label>
        <label className="register-label">
          Прізвище
          <input
            className={
              errors.surname ? 'register-input error' : 'register-input '
            }
            type="text"
            placeholder="Прізвище"
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
          {errors.surname && (
            <svg className="error-icon" width="24px" height="24px">
              <use href={sprite + '#error'} />
            </svg>
          )}
          {errors.surname && (
            <p role="alert" className="register-error">
              {errors.surname.message}
            </p>
          )}
        </label>
        <label className="register-label">
          Телефон
          <input
            onFocus={() => setPhoneFocused(true)}
            onBlur={() => setPhoneFocused(false)}
            onInput={e => {
              // if (e.target.value.includes('+38')) {
              //   e.target.value = e.target.value.replace(/[+38]/g, '');
              // }
              e.target.value = e.target.value.replace(/[^0-9+]/g, '');
            }}
            className={
              errors.phone_number
                ? 'register-input phone-input error'
                : 'register-input phone-input '
            }
            type="text"
            placeholder={phoneFocused ? '' : '+380__ ___ ___'}
            value={phoneFocused ? phone_number : ''}
            {...register('phone_number', {
              pattern: {
                value: phoneRegExp,
                message: phoneMessage.pattern,
              },
              required: phoneMessage.required,
              maxLength: { value: 13, message: phoneMessage.maxLength },
              minLength: {
                value: 13,
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
            <p role="alert" className="register-error">
              {errors.phone_number.message}
            </p>
          )}
        </label>
        <label className="register-label">
          Електронна пошта
          <input
            className={
              errors.email ? 'register-input error' : 'register-input  '
            }
            type="email"
            placeholder="Електронна адреса"
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
          {errors.email && (
            <svg className="error-icon" width="24px" height="24px">
              <use href={sprite + '#error'} />
            </svg>
          )}
          {errors.email && (
            <p role="alert" className="register-error">
              {errors.email.message}
            </p>
          )}
        </label>
        <label className="register-label">
          Пароль
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
              // console.log(e.currentTarget.value);
            }}
            className={
              errors.password ? 'register-input error' : 'register-input  '
            }
            placeholder="Пароль"
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
              {errors.password.message}
            </p>
          )}
        </label>
        <label className="register-label">
          Підтвердження пароля
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
            placeholder="Пароль"
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
          {errors.password_confirmation && (
            <p role="alert" className="register-error">
              {errors.password_confirmation.message}
            </p>
          )}
        </label>
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
            <span className="register-personal-data"> персональних данних</span>
          </p>
          <p role="alert" className="register-error">
            {errors.agree?.message}
          </p>
        </div>
        <div className="button-checkbox-container">
          <button type="submit" className="register-button" disabled={!isValid}>
            Зареєструватися
          </button>
        </div>
      </form>

      <SocialNetsAuth title="Або реєстрація через" />
    </StyledRegisterBox>
  );
});

export default RegisterBox;
