import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { StyledNewClient } from './NewClient.styled';
import { SocialNetsAuth } from './SocialNetsAuth';

const NewClient = () => {
  const { t } = useTranslation();
  return (
    <StyledNewClient>
      <h2 className="new-client__header">{t('Я новий клієнт')}</h2>
      <p className="new-client__text">
        {t('Зареєструйся та отримай 5% знижки на всі покупки')}
      </p>
      <Link to="/register">
        <button type="button" className="new-client__button">
          {t('Зареєструватися')}
        </button>
      </Link>
      <SocialNetsAuth title="або" />
      <p className="new-client__agree">
        {t('Продовжуючи, ви погоджуєтесь з')}
        <span className="new-client__agreement">
          {' '}
          {t('умовами користування')}{' '}
        </span>
        PrettyPaws.ua
      </p>
    </StyledNewClient>
  );
};

export default NewClient;
