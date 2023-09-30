import React, { useState } from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { useForm } from 'react-hook-form';
import {
  emailRegExp,
  nameRegExp,
  passwordRegExp,
  phoneRegExp,
} from '../../../validation/regexp';
import {
  emailMessage,
  nameMessage,
  passwordConfirmMessage,
  passwordMessage,
  phoneMessage,
  surNameMessage,
} from '../../../validation/messages';
import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { StyledEditForm } from './PersonalDataEdit.styled';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import { useTranslation } from 'react-i18next';

const PersonalData = observer(() => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const store = useStore();
  const {
    auth: { user, state },
  } = store;
  const values = user;
  const { screen } = useWindowSize();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
    setError,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: user.name,
      surname: user.surname,
      phone_number: '+38' + `${user.phone_number}`,
      email: user.email,
      password: '',
      password_confirmation: '',
    },
    values,
  });

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [verificationVisibility, setVerificationVisibility] = useState(false);

  //   const phone_number = watch('phone_number', '');
  const password = watch('password', '');
  const password_confirmation = watch('password_confirmation', '');

  const onSubmit = data => {
    console.log(data);
    navigate('/cabinet/personal_data');
    reset();
  };
  return (
    <StyledEditForm>
      {state === 'pending' ? null : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={errors.name ? 'edit-label error' : 'edit-label'}>
            <div className="edit-label-text">{t('Ім’я')}</div>
            <input
              className="edit-input"
              placeholder={t('Ім’я')}
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
              <p role="alert" className="edit-error">
                {t(`${errors.name.message}`)}
              </p>
            )}
          </label>
          <label className={errors.surname ? 'edit-label error' : 'edit-label'}>
            <div className="edit-label-text">{t('Прізвище')}</div>
            <input
              className={errors.surname ? 'edit-input error' : 'edit-input '}
              type="text"
              placeholder={toString('Прізвище')}
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
              <p role="alert" className="edit-error">
                {t(`${errors.surname.message}`)}
              </p>
            )}
          </label>
          <label
            className={errors.phone_number ? 'edit-label error' : 'edit-label'}
          >
            <div className="edit-label-text">{t('Телефон')}</div>
            <input
              onInput={e => {
                e.target.value = e.target.value.replace(/[^0-9+]/g, '');
              }}
              className={
                errors.phone_number
                  ? 'edit-input phone-input error'
                  : 'edit-input phone-input '
              }
              type="text"
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
              <p role="alert" className="edit-error">
                {t(`${errors.phone_number.message}`)}
              </p>
            )}
          </label>
          <label className={errors.email ? 'edit-label error' : 'edit-label'}>
            <div className="edit-label-text">
              {screen !== 'desktop' ? t('Ел. пошта') : t('Електронна пошта')}
            </div>
            <input
              className={errors.email ? 'edit-input error' : 'edit-input  '}
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
              <p role="alert" className="edit-error">
                {t(`${errors.email.message}`)}
              </p>
            )}
          </label>
          <label
            className={errors.password ? 'edit-label error' : 'edit-label'}
          >
            <div className="edit-label-text">{t('Змінити пароль')}</div>
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
              }}
              className={errors.password ? 'edit-input error' : 'edit-input  '}
              placeholder="********"
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
              className="edit-icon-eye"
              onClick={() => setPasswordVisibility(!passwordVisibility)}
            >
              <use
                href={
                  passwordVisibility ? sprite + '#eye' : sprite + '#eye-off'
                }
              />
            </svg>
            {errors.password && (
              <p role="alert" className="edit-error ">
                {t(`{errors.password.message}`)}
              </p>
            )}
          </label>
          <label
            className={
              errors.password_confirmation ? 'edit-label error' : 'edit-label'
            }
          >
            <div className="edit-label-text">
              {screen !== 'desktop'
                ? t('Ще раз пароль')
                : t('Ще раз новий пароль')}
            </div>
            <input
              onInput={e => {
                if (e.target.value.includes(' ')) {
                  e.target.value = e.target.value.replace(' ', '');
                }
              }}
              className={
                errors.password_confirmation
                  ? 'edit-input error'
                  : 'edit-input  '
              }
              placeholder="********"
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
              className="edit-icon-eye"
              onClick={() => setVerificationVisibility(!verificationVisibility)}
            >
              <use
                href={
                  verificationVisibility ? sprite + '#eye' : sprite + '#eye-off'
                }
              />
            </svg>
            {errors.password_confirmation && (
              <p role="alert" className="edit-error">
                {t(`${errors.password_confirmation.message}`)}
              </p>
            )}
          </label>

          <button type="submit" className="edit-button" disabled={!isValid}>
            {t('Зберегти зміни')}
          </button>
        </form>
      )}
    </StyledEditForm>
  );
});

export default PersonalData;
