import React, { useEffect, useState } from 'react';
import AnimalsBar from '../AnimalsBar/AnimalsBar';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledSignUp } from './SignUp.styled';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/AuthProvider';
import { GlobalContainer } from '../../../global/GlobalContainer';
import { useTranslation } from 'react-i18next';
import { emailRegExp } from '../../../validation/regexp';
import { emailMessage } from '../../../validation/messages';
import { useForm } from 'react-hook-form';
// import AnimalsBarSubscriptions from '../AnimalsBar/AnimalsBarSubscriptions';

const SignUp = observer(() => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout;
    if (isSubmitted === true) {
      timeout = setTimeout(() => {
        setVisible(false);
        setIsSubmitted(false);
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [isSubmitted]);

  const store = useStore();
  const {
    auth: { email, authorised, setState, refresh },
    subscription: {
      state,
      subscribe,
      setSubscriptionIDList,
      subscriptions,
      setEmptySubscriptions,
      // subscriptionsIDList,
      includesSubscription,
      errorType,
      error,
    },
  } = store;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: email,
    },
  });

  const handleSubscribe = data => {
    // console.log('data', data, subscriptions);
    const formData = new FormData();
    formData.append('email', data.email);
    subscriptions.forEach(category => {
      formData.append(`${`animal_id[${category - 1}]`}`, category);
    });
    subscribe(formData).then(() => authorised && refresh());
    setIsSubmitted(true);
    setVisible(true);
    setEmptySubscriptions();
  };

  return (
    <StyledSignUp>
      <GlobalContainer>
        <div className="sign-up__container">
          <p className="sign-up__title">{t('Підписатися на акції для')}</p>
          <AnimalsBar
            type={'signUp'}
            // chosenCategory={chosenCategory}
            // setChosenCategory={setChosenCategory}
            isSubmitted={isSubmitted}
            setSubscriptionIDList={setSubscriptionIDList}
            includesSubscription={includesSubscription}
          />
          {/* <AnimalsBarSubscriptions /> */}
          <div
            className={
              authorised === true
                ? 'sign-up-input__box active'
                : 'sign-up-input__box'
            }
          >
            <form>
              <label className="register-label">
                <input
                  onInput={e => {
                    email !== e.target.value && setState('error');
                  }}
                  className={
                    (state === 'error' && errorType === 'both') ||
                    (state === 'error' && errorType === 'email') ||
                    errors.email ||
                    (state === 'error' && errorType === 'category_animal_id')
                      ? 'sign-up-input error'
                      : 'sign-up-input'
                  }
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
                <svg
                  className="sign-up-icon"
                  width="24px"
                  height="24px"
                  onClick={handleSubmit(handleSubscribe)}
                  disabled={isValid}
                >
                  <use href={sprite + '#subscribe'} />
                </svg>
                {errors.email && (
                  <p role="alert" className="sign-up__error">
                    {t(`${errors.email.message}`)}
                  </p>
                )}
                {state === 'error' &&
                errorType === 'email' &&
                !errors.email &&
                visible ? (
                  <p role="alert" className="sign-up__error">
                    {t(`${error}`)}
                  </p>
                ) : null}
                {state === 'error' && errorType === 'email' && visible ? (
                  <div className="sign-up__error">{t(`${error}`)}</div>
                ) : null}
                {state === 'error' && errorType === 'animal_id' && visible ? (
                  <div className="sign-up__error">{t(`${error}`)}</div>
                ) : null}
                {state === 'error' && errorType === 'both' && visible ? (
                  <div className="sign-up__error">{t(`${error}`)}</div>
                ) : null}
                {state === 'done' && isSubmitted && !errors.email && visible ? (
                  <div className=" sign-up__error success">
                    {t(`${'Ви успішно підписались'}`)}
                  </div>
                ) : null}
              </label>
            </form>
          </div>
        </div>
      </GlobalContainer>
    </StyledSignUp>
  );
});

export default SignUp;
