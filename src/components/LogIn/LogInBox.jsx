import React from 'react';
import sprite from '../../img/svg-sprite/sprite.svg';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { StyledLoginBox } from './LogInBox.styled';

import LoginWithPhone from './LoginWithPhone';
import { SocialNetsAuth } from './SocialNetsAuth';
import { useStore } from '../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { emailRegExp, passwordRegExp } from '../../validation/regexp';
import { emailMessage, passwordMessage } from '../../validation/messages';
import useWindowSize from '../../hooks/useWindowSize';
import { useTranslation } from 'react-i18next';

const LogInBox = observer(() => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();

  const store = useStore();
  const {
    auth: { logIn, setRememberMe },
  } = store;

  const getValueFromStorage = () => {
    const value = localStorage.getItem('rememberMe');
    if (value === 'true') return true;
    if (value === 'false') return false;
    return false;
  };

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
      rememberMe: getValueFromStorage(),
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
      <h2 className="login-header">{t('Вхід для своїх')}</h2>
      {screen === 'mobile' && (
        <p className="register-text">
          {t('Ще не маєш акаунту?')}{' '}
          <Link to="/register">
            <span className="register-phrase">{t('Зареєструйся')} </span>
          </Link>{' '}
          {t('та отримай 5% знижки на всі покупки')}
        </p>
      )}
      <p className="login-text">{t('Увійти за номером телефону')}</p>
      <LoginWithPhone />
      <p className="login-text">{t('Або увійти за ел. адресою')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="login-label">
          {t('Електронна пошта')}
          <input
            className={errors.email ? 'login-input error' : 'login-input '}
            type="email"
            placeholder={t('Електронна адреса')}
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
            <p role="alert" className="login-error">
              {t(`${errors.email.message}`)}
            </p>
          )}
        </label>
        <label className="login-label">
          {t('Пароль')}
          <input
            onInput={e => {
              if (e.target.value.includes(' ')) {
                e.target.value = e.target.value.replace(' ', '');
              }
            }}
            placeholder={t('Пароль')}
            className={errors.password ? 'login-input error' : 'login-input '}
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
          {errors.password && (
            <p role="alert" className="login-error">
              {t(`${errors.password.message}`)}
            </p>
          )}
        </label>
        <div className="button-checkbox-container">
          <div className="checkbox-container">
            <input
              className="login-checkbox"
              type="checkbox"
              placeholder="rememberMe"
              onClick={e => onRememberMeChange(e)}
              {...register('rememberMe')}
            />
            <p className="login-agree">{t('Запам’ятати мене')}</p>
          </div>
          <p className="login-agree">{t('Забули пароль?')}</p>
        </div>
        <button type="submit" className="login-button" disabled={!isValid}>
          {t('Увійти')}
        </button>
      </form>
      <SocialNetsAuth title="Або увійти через" />
    </StyledLoginBox>
  );
});

export default LogInBox;
8;
