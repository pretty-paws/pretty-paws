import React from 'react';
import { StyledAnimalsBar } from './AnimalsBar.styled';
import { animalsSvg } from '../../../utils/animalBarSvgLinks';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AnimalsBar = ({ type, getCategory, chosenCategory }) => {
  function includesCategory(category) {
    if (!chosenCategory) return;
    const isCategoryChosen = chosenCategory.includes(category);
    // console.log(isCategoryChosen);
    return isCategoryChosen;
  }
  // console.log('in AnimalsBar', chosenCategory);
  // console.log(type);
  return (
    <StyledAnimalsBar type={type}>
      {animalsSvg.map(({ link, category }) => {
        return (
          <Link to="/" key={link}>
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
    </StyledAnimalsBar>
  );
};

export default AnimalsBar;

AnimalsBar.propTypes = {
  type: PropTypes.string,
  getCategory: PropTypes.func,
  chosenCategory: PropTypes.array,
};
