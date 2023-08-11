import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import {
  AnimalsBarContainer,
  StyleAnimalsBar,
} from './NavigationAnimals.styled';
// import { useState } from 'react';

const NavigationAnimals = () => {
  //   const [isActive, setIsActive] = useState(false);

  //   const handleItemClick = event => {
  //     // Получаем атрибут data-index из нажатого элемента
  //     const index = event.target.getAttribute('data-index');
  //     if (index !== null) {
  //       // Переключаем активное состояние блока с заданным индексом
  //       toggleActive(parseInt(index, 10));
  //     }
  //   };

  //   const toggleActive = () => {
  //     setIsActive(!isActive);
  //     console.log(isActive);
  //   };
  return (
    <AnimalsBarContainer>
      <div className="animals-bar__container">
        <StyleAnimalsBar>
          <div className="animals-bar-icon-box">
            <svg className="animals-bar-icon" width="24px" height="24px">
              <use href={sprite + '#dog'} />
            </svg>
          </div>
          <span></span>
        </StyleAnimalsBar>
        <StyleAnimalsBar>
          <div className="animals-bar-icon-box">
            <svg className="animals-bar-icon" width="24px" height="24px">
              <use href={sprite + '#cat'} />
            </svg>
          </div>
          <span></span>
        </StyleAnimalsBar>
        <StyleAnimalsBar>
          <div className="animals-bar-icon-box">
            <svg className="animals-bar-icon" width="24px" height="24px">
              <use href={sprite + '#mouse'} />
            </svg>
          </div>
          <span></span>
        </StyleAnimalsBar>
        <StyleAnimalsBar>
          <div className="animals-bar-icon-box">
            <svg className="animals-bar-icon" width="24px" height="24px">
              <use href={sprite + '#fish'} />
            </svg>
          </div>
          <span></span>
        </StyleAnimalsBar>
        <StyleAnimalsBar>
          <div className="animals-bar-icon-box">
            <svg className="animals-bar-icon" width="24px" height="24px">
              <use href={sprite + '#bird'} />
            </svg>
          </div>
          <span></span>
        </StyleAnimalsBar>
        <StyleAnimalsBar>
          <div className="animals-bar-icon-box">
            <svg className="animals-bar-icon" width="24px" height="24px">
              <use href={sprite + '#lizard'} />
            </svg>
          </div>
          <span className="animals-bar-text">Рептилія</span>
        </StyleAnimalsBar>
      </div>
    </AnimalsBarContainer>
  );
};

export default NavigationAnimals;
