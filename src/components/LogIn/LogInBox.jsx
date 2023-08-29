import React from 'react';
import sprite from '../../img/svg-sprite/sprite.svg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { StyledLoginBox } from './LogInBox.styled';

import LoginWithPhone from './LoginWithPhone';
import { SocialNetsAuth } from './SocialNetsAuth';
import { useAuthStore } from '../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { emailRegExp, passwordRegExp } from '../../validation/regexp';
import { emailMessage, passwordMessage } from '../../validation/messages';

const LogInBox = observer(() => {
  const { logIn, setRememberMe } = useAuthStore();

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: localStorage.getItem('email') || '',
      password: '',
      rememberMe: localStorage.getItem('rememberMe') || false,
    },
  });

  const onRememberMeChange = e => {
    const isChecked = e.target.checked;
    localStorage.setItem('rememberMe', isChecked);
    setRememberMe(isChecked);
  };

  const onSubmit = data => {
    const { email, password } = data;
    logIn({ email, password });
    reset();
  };

  return (
    <StyledLoginBox>
      <h2 className="login-header">Вхід для своїх</h2>
      <p className="login-text">Увійти за номером телефону</p>
      <LoginWithPhone />
      <p className="login-text">Або увійти за ел. адресою</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="login-label">
          Електронна пошта
          <input
            className="login-input"
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
          <p role="alert" className="login-error">
            {errors.email.message}
          </p>
        )}
        <label className="login-label">
          Пароль
          <input
            onInput={e => {
              if (e.target.value.includes(' ')) {
                e.target.value = e.target.value.replace(' ', '');
              }
            }}
            className="login-input"
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
            className="login-icon-eye"
            onClick={() => setPasswordVisibility(!passwordVisibility)}
          >
            <use
              href={passwordVisibility ? sprite + '#eye' : sprite + '#eye-off'}
            />
          </svg>
        </label>
        {errors.password && (
          <p role="alert" className="login-error">
            {errors.password.message}
          </p>
        )}
        <div className="button-checkbox-container">
          <button type="submit" className="login-button" disabled={!isValid}>
            Увійти
          </button>
          <svg className="login-button__icon" width="36px" height="36px">
            <use href={sprite + '#arrow'} />
          </svg>
          <div className="checkbox-container">
            <input
              className="login-checkbox"
              type="checkbox"
              placeholder="rememberMe"
              onClick={e => onRememberMeChange(e)}
              {...register('rememberMe')}
            />
            <p className="login-agree">Запам’ятати мене</p>
          </div>
        </div>
        <p role="alert" className="login-error">
          {errors.agree?.message}
        </p>
      </form>
      <SocialNetsAuth title="Або увійти через" />
    </StyledLoginBox>
  );
});

export default LogInBox;
