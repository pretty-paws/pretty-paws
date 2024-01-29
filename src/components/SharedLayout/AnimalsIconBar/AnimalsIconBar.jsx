import React from 'react';
import {
  StyledAnimalsIconBar,
  StyledVerticalAnimalsIconBar,
} from './AnimalsIconBar.styled'; // Импортируйте оба стиля
// import { animalsSvg } from '../../../utils/animalBarSvgLinks';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

// const AnimalsIconBar = observer(({ type, animalsArray }) => {
const AnimalsIconBar = observer(
  ({ type, getCategory, chosenCategory, animalsArray }) => {
    function includesCategory(category) {
      //   if (isSubmitted) return false;
      if (!chosenCategory) return;
      const isCategoryChosen = chosenCategory.includes(category);
      return isCategoryChosen;
    }

    return (
      <>
        {type === 'vertical' && animalsArray.length !== 0 ? (
          <StyledVerticalAnimalsIconBar>
            {animalsArray.map(animal => {
              return (
                <Link key={animal.id}>
                  <div
                    className={
                      includesCategory(animal)
                        ? 'animals-bar-icon-box chosen'
                        : 'animals-bar-icon-box'
                    }
                    // className={'animals-bar-icon-box chosen'}
                    onClick={() => getCategory(animal)}
                  >
                    <img src={animal.icon_url} alt={animal.title} />
                  </div>
                </Link>
              );
            })}
          </StyledVerticalAnimalsIconBar>
        ) : (
          <StyledAnimalsIconBar type={type}>
            {animalsArray.map(animal => {
              return (
                <Link key={animal.id}>
                  <div
                    className={
                      includesCategory(animal)
                        ? 'animals-bar-icon-box chosen'
                        : 'animals-bar-icon-box'
                    }
                    // className={'animals-bar-icon-box chosen'}
                    onClick={() => getCategory(animal)}
                  >
                    <img src={animal.icon_url} alt={animal.title} />
                  </div>
                </Link>
              );
            })}
          </StyledAnimalsIconBar>
        )}
        {/* Используйте StyledAnimalsBar или StyledVerticalAnimalsBar в зависимости от типа
        {type === 'vertical' ? (
          <StyledVerticalAnimalsIconBar>
            {animalsSvg.map(({ link, category }) => {
              return (
                <Link key={link}>
                  <div
                    className={
                      includesCategory(category)
                        ? 'animals-bar-icon-box chosen'
                        : 'animals-bar-icon-box'
                    }
                    onClick={() => getCategory(category)}
                  >
                    <svg
                      className="animals-bar-icon"
                      width="24px"
                      height="24px"
                    >
                      <use href={link} />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </StyledVerticalAnimalsIconBar>
        ) : ( */}
        {/* <StyledAnimalsIconBar type={type}>
          {animalsSvg.map(({ link, category }) => {
            return (
              <Link key={link}>
                <div
                  className={
                    includesCategory(category)
                      ? 'animals-bar-icon-box chosen'
                      : 'animals-bar-icon-box'
                  }
                  onClick={() => getCategory(category)}
                >
                  <svg className="animals-bar-icon" width="24px" height="24px">
                    <use href={link} />
                  </svg>
                </div>
              </Link>
            );
          })}
        </StyledAnimalsIconBar>
        )} */}
      </>
    );
  }
);

export default AnimalsIconBar;

AnimalsIconBar.propTypes = {
  type: PropTypes.string.isRequired,
  //   getCategory: PropTypes.func,
  //   chosenCategory: PropTypes.array,
  //   isSubmitted: PropTypes.bool,
  animalsArray: PropTypes.array.isRequired,
};
