import React, { useState } from 'react';
import AnimalsBar from '../AnimalsBar/AnimalsBar';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledSignUp } from './SignUp.styled';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/AuthProvider';
import { GlobalContainer } from '../../../global/GlobalContainer';
import { useTranslation } from 'react-i18next';

const SignUp = observer(() => {
  const { t } = useTranslation();
  const [chosenCategory, setChosenCategory] = useState([]);

  const store = useStore();
  const {
    auth: { email, authorised, subscribe, state, errorType, error },
  } = store;

  function getCategory(category) {
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

  function HandleSubscribe() {
    const formData = new FormData();
    formData.append('email', email);
    chosenCategory.forEach(category => {
      formData.append(`${`category_animal_id[${category - 1}]`}`, category);
    });
    subscribe(formData);
  }
  // console.log('state', state);

  // console.log('errorType', errorType);

  return (
    <StyledSignUp>
      <GlobalContainer>
        <div className="sign-up__container">
          <p className="sign-up__title">{t('Підписатися на акції для')}</p>
          <AnimalsBar
            getCategory={getCategory}
            chosenCategory={chosenCategory}
          />
          <div
            className={
              authorised === true
                ? 'sign-up-input__box active'
                : 'sign-up-input__box'
            }
          >
            <input
              className={
                (state === 'error' && errorType === 'both') ||
                (state === 'error' && errorType === 'email') ||
                (state === 'error' && errorType === 'category_animal_id')
                  ? 'sign-up-input error'
                  : 'sign-up-input'
              }
              type="email"
              placeholder="E-mail"
              defaultValue={authorised === true ? email : null}
            />

            <svg
              className="sign-up-icon"
              width="24px"
              height="24px"
              onClick={HandleSubscribe}
            >
              <use href={sprite + '#subscribe'} />
            </svg>
            {state === 'error' && errorType === 'email' ? (
              <div className="sign-up__error">{t(`${error}`)}</div>
            ) : null}
            {state === 'error' && errorType === 'category_animal_id' ? (
              <div className="sign-up__error">{t(`${error}`)}</div>
            ) : null}
            {state === 'error' && errorType === 'both' ? (
              <div className="sign-up__error">{t(`${error}`)}</div>
            ) : null}
          </div>
        </div>
      </GlobalContainer>
    </StyledSignUp>
  );
});

export default SignUp;
