import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNewClient } from './NewClient.styled';
import { SocialNetsAuth } from './SocialNetsAuth';

const NewClient = () => {
  return (
    <StyledNewClient>
      <h2 className="new-client__header">Я новий клієнт</h2>
      <p className="new-client__text">
        Зареєструйся та отримай 5% знижки на всі покупки
      </p>
      <Link to="/register">
        <button type="button" className="new-client__button">
          Реєстрація
        </button>
      </Link>
      <SocialNetsAuth title="Або реєстрація через" />
      <p className="new-client__agree">
        Продовжуючи, ви погоджуєтесь з
        <span className="new-client__agreement"> умовами користування </span>
        PrettyPaws.ua
      </p>
    </StyledNewClient>
  );
};

export default NewClient;
