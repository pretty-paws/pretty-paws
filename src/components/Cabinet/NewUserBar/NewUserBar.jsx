import React from 'react';
import { StyledNewsUserBar } from './NewUserBar.styled';

const NewUserBar = () => {
  return (
    <StyledNewsUserBar>
      <div className="new-user-bar__box">
        <div className="new-user-bar__text-box">
          <p className="new-user-bar__text">
            Зроби своє перше замовлення і отримай <b>знижку 5 % </b> на всі
            товари
          </p>
          <button className="new-user-bar__btn" type="button">
            До каталогу
          </button>
        </div>
        <div className="new-user-bar__discount-img" />
      </div>
      <div className="new-user-bar__box">
        <div className="new-user-bar__text-box">
          <p className="new-user-bar__text">
            Задонать на корм для пухнастих улюбленців
          </p>
          <button className="new-user-bar__btn" type="button">
            Детальніше
          </button>
        </div>
        <div className="new-user-bar__cats-img" />
      </div>
    </StyledNewsUserBar>
  );
};

export default NewUserBar;
