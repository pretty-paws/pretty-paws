import React from 'react';
import {
  StyledAnimalsBar,
  StyledVerticalAnimalsBar,
} from './AnimalsBar.styled'; // Импортируйте оба стиля
import { animalsSvg } from '../../../utils/animalBarSvgLinks';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/AuthProvider';

const AnimalsBar = observer(
  ({ type, getCategory, chosenCategory, isSubmitted, setAnimal, animal }) => {
    const store = useStore();
    const {
      catalog: {
        animals,
        // getFilteredNewProducts, getFilteredSaleProducts
      },
    } = store;

    function includesCategory(category) {
      if (isSubmitted) return false;
      if (!chosenCategory) return;
      const isCategoryChosen = chosenCategory.includes(category);
      return isCategoryChosen;
    }

    return (
      <>
        {/* Используйте StyledAnimalsBar или StyledVerticalAnimalsBar в зависимости от типа */}
        {type === 'vertical' ? (
          <StyledVerticalAnimalsBar>
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
          </StyledVerticalAnimalsBar>
        ) : (
          <StyledAnimalsBar type={type}>
            {animals.map(({ category, title, icon_url, id }) => {
              return (
                <Link key={title}>
                  <div
                    className={
                      includesCategory(category) || id === animal
                        ? 'animals-bar-icon-box chosen'
                        : 'animals-bar-icon-box'
                    }
                    onClick={() => setAnimal(id)}
                  >
                    <div
                      className="animals-bar-icon"
                      width="24px"
                      height="24px"
                    >
                      <img alt={title} src={icon_url} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </StyledAnimalsBar>
        )}
      </>
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
