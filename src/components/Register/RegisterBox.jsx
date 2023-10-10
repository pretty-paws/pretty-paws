import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { StyledRegisterBox } from './RegisterBox.styled';
import { redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/AuthProvider';
import useWindowSize from '../../hooks/useWindowSize';
import { SocialNetsAuth } from '../LogIn/SocialNetsAuth';
import { useTranslation } from 'react-i18next';
import Name from './InputFields/Name';
import Surname from './InputFields/Surname';
import PhoneNumber from './InputFields/PhoneNumber';
import Email from './InputFields/Email';
import Password from './InputFields/Password';
import PasswordConfirm from './InputFields/PasswordConfirm';
import Checkbox from './InputFields/Checkbox';

const RegisterBox = observer(() => {
  const { t } = useTranslation();
  const store = useStore();

  const {
    auth: { signUp, setEmail, state, error, errorType, setState },
  } = store;

  const { screen } = useWindowSize();
  // const [phoneFocused, setPhoneFocused] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
    setError,
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      surname: '',
      phone_number: ``,
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  const onSubmit = data => {
    const number = { phone_number: '+380' + data.phone_number };
    const userData = { ...data, ...number };
    setEmail(data.email);
    signUp(userData);
    reset(data, { keepValues: true });
    redirect('/');
  };

  return (
    <StyledRegisterBox>
      <h2 className="register-header">{t('Реєстрація')}</h2>
      {screen === 'mobile' && (
        <p className="login-text">
          {t('Уже маєш акаунт?')}
          <Link to="/login">
            {' '}
            <span className="login-phrase">{t('Увійти')}</span>
          </Link>{' '}
          {t('та користуйся усіма доступними перевагами.')}
        </p>
      )}
      <p className="register-text">{t('Введіть свої дані:')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Name errors={errors} register={register} />
        <Surname errors={errors} register={register} />
        <PhoneNumber
          errors={errors}
          register={register}
          watch={watch}
          error={error}
          state={state}
          errorType={errorType}
          setState={setState}
        />
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
          setError={setError}
        />
        <PasswordConfirm
          errors={errors}
          register={register}
          watch={watch}
          error={error}
          state={state}
          errorType={errorType}
          setError={setError}
        />
        <Checkbox errors={errors} register={register} isValid={isValid} />
      </form>

      <SocialNetsAuth title={t('Або реєстрація через')} />
    </StyledRegisterBox>
  );
});

export default RegisterBox;
