import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { StyledLoginBox } from './LogInBox.styled';

import LoginWithPhone from './LoginWithPhone';
import { SocialNetsAuth } from './SocialNetsAuth';
import { useStore } from '../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import useWindowSize from '../../hooks/useWindowSize';
import { useTranslation } from 'react-i18next';
import Password from './InputFields/Password';
import Email from './InputFields/Email';
import Checkbox from './InputFields/Checkbox';

const LogInBox = observer(() => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();

  const store = useStore();
  const {
    auth: { logIn, setRememberMe, state, error, errorType, setState },
  } = store;

  const getValueFromStorage = () => {
    const value = localStorage.getItem('rememberMe');
    if (value === 'true') return true;
    if (value === 'false') return false;
    return false;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({
    mode: 'all',
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
        <Email
          errors={errors}
          register={register}
          watch={watch}
          error={error}
          state={state}
          errorType={errorType}
          setState={setState}
        />
        <Password
          errors={errors}
          register={register}
          watch={watch}
          error={error}
          state={state}
          errorType={errorType}
          setState={setState}
        />
        <Checkbox
          onRememberMeChange={onRememberMeChange}
          register={register}
          isValid={isValid}
        />
      </form>
      <SocialNetsAuth title="Або увійти через" />
    </StyledLoginBox>
  );
});

export default LogInBox;
8;
