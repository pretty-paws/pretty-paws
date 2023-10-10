import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledNewsUserBar } from './NewUserBar.styled';

const NewUserBar = () => {
  const { t } = useTranslation();

  return (
    <StyledNewsUserBar>
      <div className="new-user-bar__box">
        <div className="new-user-bar__text-box">
          <p className="new-user-bar__text">
            {t('Зроби своє перше замовлення і отримай')}{' '}
            <b>{t('знижку 5 % ')}</b> {t('на всі товари')}
          </p>
          <button className="new-user-bar__btn" type="button">
            {t('До каталогу')}
          </button>
        </div>
        <div className="new-user-bar__discount-img" />
      </div>
      <div className="new-user-bar__box">
        <div className="new-user-bar__text-box">
          <p className="new-user-bar__text">
            {t('Задонать на корм для пухнастих улюбленців')}
          </p>
          <button className="new-user-bar__btn" type="button">
            {t('Детальніше')}
          </button>
        </div>
        <div className="new-user-bar__cats-img" />
      </div>
    </StyledNewsUserBar>
  );
};

export default NewUserBar;
