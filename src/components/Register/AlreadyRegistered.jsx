import React from 'react';
import { Link } from 'react-router-dom';
import { StyledAlreadyRegisteredBox } from './AlreadyRegistered.styled';
import { SocialNetsAuth } from '../LogIn/SocialNetsAuth';
import { useTranslation } from 'react-i18next';

const AlreadyRegistered = () => {
  const { t } = useTranslation();
  return (
    <StyledAlreadyRegisteredBox>
      <h2 className="already-registered-header">
        {t('Зареєстрований користувач?')}
      </h2>
      <Link to="/login">
        <button type="button" className="already-registered-button">
          {t('Увійти')}
        </button>
      </Link>
      <SocialNetsAuth title={t('або')} />

      <p className="already-registered-agree">
        {t('Продовжуючи, ви погоджуєтесь з')}
        <span className="already-registered-agreement">
          {' '}
          {t('умовами користування')}{' '}
        </span>
        PrettyPaws.ua
      </p>
    </StyledAlreadyRegisteredBox>
  );
};

export default AlreadyRegistered;
