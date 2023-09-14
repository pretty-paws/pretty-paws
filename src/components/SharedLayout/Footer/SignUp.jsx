import React from 'react';
import AnimalsBar from '../AnimalsBar/AnimalsBar';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledSignUp } from './SignUp.styled';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/AuthProvider';
import { GlobalContainer } from '../../../global/GlobalContainer';

const SignUp = observer(() => {
  const store = useStore();
  const {
    auth: { email, authorised },
  } = store;
  const idArr = [];
  function getID(id) {
    if (idArr.includes(id)) {
      const index = idArr.indexOf(id);
      idArr.splice(index, 1);
    } else {
      idArr.push(id);
    }

    console.log(idArr);
  }
  return (
    <StyledSignUp>
      <GlobalContainer>
        <div className="sign-up__container">
          <p className="sign-up__title">Підписатися на акції для</p>
          <AnimalsBar getID={getID} />
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
