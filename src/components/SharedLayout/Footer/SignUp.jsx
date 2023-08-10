import React from 'react';
import AnimalsBar from '../AnimalsBar/AnimalsBar';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledSignUp } from './SignUp.styled';

const SignUp = () => {
  return (
    <StyledSignUp>
      <div className="sign-up__container">
        <p className="sign-up__title">Підписатися на спецпропозиції для</p>
        <AnimalsBar />
        <div className="sign-up-input__box">
          <input className="sign-up-input" type="email" placeholder="E-mail" />
          <svg className="sign-up-icon" width="20px" height="17px">
            <use href={sprite + '#subscribe'} />
          </svg>
        </div>
      </div>
    </StyledSignUp>
  );
};

export default SignUp;
