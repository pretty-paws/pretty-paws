import React from 'react';
import { Link } from 'react-router-dom';
import { StyledAlreadyRegisteredBox } from './AlreadyRegistered.styled';
import { SocialNetsAuth } from '../LogIn/SocialNetsAuth';

const AlreadyRegistered = () => {
  return (
    <StyledAlreadyRegisteredBox>
      <h2 className="already-registered-header">Зареєстрований користувач?</h2>
      <Link to="/login">
        <button type="button" className="already-registered-button">
          Увійти
        </button>
      </Link>
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
