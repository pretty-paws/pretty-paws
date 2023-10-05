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

const SignUp = observer(() => {
  console.log(document.body.lastElementChild.childNodes[0].childNodes[3]);
  const { t } = useTranslation();
  const [chosenCategory, setChosenCategory] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout;
    if (isSubmitted === true) {
      timeout = setTimeout(() => {
        setVisible(false);
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [isSubmitted]);

  const store = useStore();
  const {
    auth: { email, authorised, state, setState, errorType, error, subscribe },
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

  function getCategory(category) {
    setIsSubmitted(false);
    setState('done');
    const isCategoryChosen = chosenCategory.includes(category);
    if (isCategoryChosen) {
      const newChosenCategory = [...chosenCategory];
      const index = newChosenCategory.indexOf(category);
      newChosenCategory.splice(index, 1);
      setChosenCategory(newChosenCategory);
    } else {
      setChosenCategory(prevChosenCategory => [
        ...prevChosenCategory,
        category,
      ]);
    }
  }

  const HandleSubscribe = data => {
    const formData = new FormData();
    formData.append('email', data.email);
    chosenCategory.forEach(category => {
      formData.append(`${`category_animal_id[${category - 1}]`}`, category);
    });
    subscribe(formData);
    setIsSubmitted(true);
    setVisible(true);
    setChosenCategory([]);
  };

  return (
    <StyledSignUp>
      <GlobalContainer>
        <div className="sign-up__container">
          <p className="sign-up__title">{t('Підписатися на акції для')}</p>
          <AnimalsBar
            getCategory={getCategory}
            chosenCategory={chosenCategory}
            isSubmitted={isSubmitted}
          />
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
                  onClick={handleSubmit(HandleSubscribe)}
                  disabled={isValid}
                >
                  <use href={sprite + '#subscribe'} />
                </svg>
                {errors.email && (
                  <p role="alert" className="sign-up__error">
                    {t(`${errors.email.message}`)}
                  </p>
                )}
                {state === 'error' && errorType === 'email' && !errors.email ? (
                  <p role="alert" className="sign-up__error">
                    {t(`${error}`)}
                  </p>
                ) : null}
                {state === 'error' && errorType === 'email' ? (
                  <div className="sign-up__error">{t(`${error}`)}</div>
                ) : null}
                {state === 'error' && errorType === 'category_animal_id' ? (
                  <div className="sign-up__error">{t(`${error}`)}</div>
                ) : null}
                {state === 'error' && errorType === 'both' ? (
                  <div className="sign-up__error">{t(`${error}`)}</div>
                ) : null}
                {isSubmitted &&
                state !== 'error' &&
                !errors.email &&
                visible ? (
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
