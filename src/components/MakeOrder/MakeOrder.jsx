import React from 'react';
import { GlobalContainer } from '../../global/GlobalContainer';
import { Link } from 'react-router-dom';
import sprite from '../../img/svg-sprite/sprite.svg';
import { StyledMakeOrder } from './MakeOrder.styled';
import { useStore } from '../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  emailRegExp,
  nameRegExp,
  phoneEditRegExp,
} from '../../validation/regexp';
import {
  emailMessage,
  nameMessage,
  phoneMessage,
  surNameMessage,
} from '../../validation/messages';
import { useTranslation } from 'react-i18next';

const MakeOrder = observer(() => {
  const { t } = useTranslation();
  const store = useStore();
  const {
    auth: { user, updateProfile },
  } = store;
  const values = user;

  const [openedSection, setOpenedSection] = useState({
    personalData: false,
    delivery: true,
    payment: true,
  });

  function formatPhoneNumber(phoneNumber) {
    const cleanedNumber = phoneNumber?.replace(/\D/g, '');
    const formattedNumber = cleanedNumber?.replace(
      /^(\d{3})(\d{2})(\d{4})(\d{3})$/,
      '+$1 $2 $3 $4'
    );
    return formattedNumber;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: user.name,
      surname: user.surname,
      phone_number: user.phone_number,
      email: user.email,
    },
    values,
  });

  const onSubmit = data => {
    updateProfile(data);
  };
  return (
    <GlobalContainer>
      <StyledMakeOrder>
        <Link to="/cart">
          <div className="make-order__back">
            <svg width="24px" height="24px">
              <use href={sprite + '#arrow-blue'} />
            </svg>
            <p>До кошика</p>
          </div>
        </Link>
        <h2 className="make-order__title">Оформлення замовлення</h2>
        {openedSection.personalData ? (
          <div className="make-order__personal-data-edit">
            <div className="make-order__personal-data-title">
              <p>1. Особисті дані</p>
              <svg
                width="24px"
                height="24px"
                onClick={() =>
                  setOpenedSection(prevState => ({
                    ...prevState,
                    personalData: false,
                  }))
                }
              >
                <use href={sprite + '#arrow-black'} />
              </svg>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label
                className={errors.name ? 'edit-label error' : 'edit-label'}
              >
                <div className="edit-label-text">{t('Ім’я')}</div>
                <input
                  className={errors.name ? 'edit-input error' : 'edit-input'}
                  placeholder={t('Ім’я')}
                  type="text"
                  onInput={e =>
                    setValue(e.currentTarget.name, e.currentTarget.value)
                  }
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
              <label
                className={errors.surname ? 'edit-label error' : 'edit-label'}
              >
                <div className="edit-label-text">{t('Прізвище')}</div>
                <input
                  className={
                    errors.surname ? 'edit-input error' : 'edit-input '
                  }
                  type="text"
                  placeholder={toString('Прізвище')}
                  //   onInput={() => handleEditingStart()}
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
                className={errors.email ? 'edit-label error' : 'edit-label'}
              >
                <div className="edit-label-text">
                  {screen !== 'desktop'
                    ? t('Ел. пошта')
                    : t('Електронна пошта')}
                </div>
                <input
                  className={errors.email ? 'edit-input error' : 'edit-input  '}
                  type="email"
                  placeholder={t('Електронна адреса')}
                  //   onInput={() => handleEditingStart()}
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
                className={
                  errors.phone_number ? 'edit-label error' : 'edit-label'
                }
              >
                <div className="edit-label-text">{t('Телефон')}</div>
                <input
                  onInput={e => {
                    // handleEditingStart();
                    let value = e.target.value.replace(/[^0-9+]/g, '');
                    let plusCount = (value.match(/\+/g) || []).length;

                    if (plusCount > 1) {
                      value = value.slice(0, value.lastIndexOf('+'));
                    }
                    e.target.value = value;
                  }}
                  className={
                    errors.phone_number
                      ? 'edit-input phone-input error'
                      : 'edit-input phone-input '
                  }
                  type="text"
                  {...register('phone_number', {
                    pattern: {
                      value: phoneEditRegExp,
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
            </form>
          </div>
        ) : (
          <div className="make-order__personal-data">
            <div className="make-order__personal-data-title">
              <p>1. Особисті дані</p>
              <svg
                width="24px"
                height="24px"
                onClick={() =>
                  setOpenedSection(prevState => ({
                    ...prevState,
                    personalData: true,
                  }))
                }
              >
                <use href={sprite + '#edit'} />
              </svg>
            </div>
            <ul className="make-order__personal-data__list">
              <li>
                <p>Ім’я та прізвище:</p>
                <p>
                  {user.name} {user.surname}
                </p>
              </li>
              <li>
                <p>Телефон:</p>
                <p>{formatPhoneNumber(user.phone_number)}</p>
              </li>
              <li>
                <p>Email:</p>
                <p>{user.email.slice(0, 16) + '...'}</p>
              </li>
            </ul>
          </div>
        )}

        <div className="make-order__delivery"></div>
        <div className="make-order__payment"></div>
        <div className="make-order__order"></div>
      </StyledMakeOrder>
    </GlobalContainer>
  );
});

export default MakeOrder;
