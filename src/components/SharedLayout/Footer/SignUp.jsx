import React from 'react';
import AnimalsBar from '../AnimalsBar/AnimalsBar';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledSignUp } from './SignUp.styled';
import { observer } from 'mobx-react-lite';
import { useAuthStore } from '../../../store/AuthProvider';
import { GlobalContainer } from '../../../global/GlobalContainer';

const SignUp = observer(() => {
  const { email, authorised } = useAuthStore();
  return (
    <StyledSignUp>
      <GlobalContainer>
        <div className="sign-up__container">
          <p className="sign-up__title">Підписатися на акції для</p>
          <AnimalsBar />
          <div
            className={
              authorised === true
                ? 'sign-up-input__box active'
                : 'sign-up-input__box'
            }
          >
            <input
              className="sign-up-input"
              type="email"
              placeholder="E-mail"
              defaultValue={authorised === true ? email : ''}
            />

            <svg className="sign-up-icon" width="24px" height="24px">
              <use href={sprite + '#subscribe'} />
            </svg>
          </div>
        </div>
      </GlobalContainer>
    </StyledSignUp>
  );
});

export default SignUp;
