import React from 'react';
import { Link } from 'react-router-dom';
import { StyledAlreadyRegisteredBox } from './AlreadyRegistered.styled';
import sprite from '../../img/svg-sprite/sprite.svg';
import { SocialNetsAuth } from '../LogIn/SocialNetsAuth';

const AlreadyRegistered = () => {
  return (
    <StyledAlreadyRegisteredBox>
      <h2 className="already-registered-header">Зареєстрований користувач?</h2>
      <div className="already-registered-button-container">
        <Link to="/login">
          <button type="button" className="already-registered-button">
            Увійти
          </button>
          <svg className="already-registered-icon" width="36px" height="36px">
            <use href={sprite + '#arrow'} />
          </svg>
        </Link>
      </div>
      <SocialNetsAuth title="Або увійти через" />

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
