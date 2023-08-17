import React from 'react';
import { StyledAlreadyRegisteredBox } from './AlreadyRegistered.styled';
import sprite from '../../img/svg-sprite/sprite.svg';

const AlreadyRegistered = () => {
  return (
    <StyledAlreadyRegisteredBox>
      <h2 className="already-registered-header">Зареєстрований користувач?</h2>
      <div className="already-registered-button-container">
        <button type="button" className="already-registered-button">
          Увійти
        </button>
        <svg className="already-registered-icon" width="36px" height="36px">
          <use href={sprite + '#arrow'} />
        </svg>
      </div>

      <p className="already-registered-text">Або реєстрація через</p>
      <div className="already-registered-social-icons">
        <svg className="already-registered-icons" width="36px" height="36px">
          <use href={sprite + '#facebook'} />
        </svg>
        <svg className="already-registered-icons" width="36px" height="36px">
          <use href={sprite + '#google'} />
        </svg>
      </div>
      <p className="already-registered-agree">
        Продовжуючи, ви погоджуєтесь з
        <span className="already-registered-agreement">
          {' '}
          умовами користування{' '}
        </span>
        PrettyPaws.ua
      </p>
    </StyledAlreadyRegisteredBox>
  );
};

export default AlreadyRegistered;
