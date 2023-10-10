import React from 'react';
import { StyledAnimalsBar } from './AnimalsBar.styled';
import { animalsSvg } from '../../../utils/animalBarSvgLinks';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

const AnimalsBar = observer(
  ({ type, getCategory, chosenCategory, isSubmitted }) => {
    // let location = useLocation();

    // const ref = useRef(null);
    // console.log('AnimalsBar', ref.current);

    function includesCategory(category) {
      if (isSubmitted) return false;
      if (!chosenCategory) return;
      const isCategoryChosen = chosenCategory.includes(category);
      return isCategoryChosen;
    }

    return (
      <StyledAnimalsBar type={type}>
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
      </StyledAnimalsBar>
    );
  }
);

export default AnimalsBar;

AnimalsBar.propTypes = {
  type: PropTypes.string,
  getCategory: PropTypes.func,
  chosenCategory: PropTypes.array,
  isSubmitted: PropTypes.bool,
};
