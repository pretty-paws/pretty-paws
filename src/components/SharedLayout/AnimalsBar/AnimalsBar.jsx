import React from 'react';
import {
  StyledAnimalsBar,
  StyledVerticalAnimalsBar,
} from './AnimalsBar.styled'; // Импортируйте оба стиля
import { animalsNames } from '../../../utils/animalBarSvgLinks';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';

const AnimalsBar = observer(
  ({
    type,
    getCategory,
    chosenCategory,
    // setChosenCategory,
    isSubmitted,
    setAnimal,
    animal,
    setSubscriptionIDList,
    includesSubscription,
  }) => {
    const store = useStore();
    const {
      catalog: {
        animals,
        // setCategoryID,
        setAnimalName,
        setAnimalSlug,
        setAnimalID,
      },
      subscription: {
        setSubscription,
        //   // subscriptionsIDList,
        //   includesSubscription,
      },
    } = store;

    function includesCategory(category) {
      if (!chosenCategory || isSubmitted) return false;
      return chosenCategory.includes(category);
    }

    return (
      <>
        {/* Используйте StyledAnimalsBar или StyledVerticalAnimalsBar в зависимости от типа */}
        {type === 'vertical' ? (
          <StyledVerticalAnimalsBar>
            {animalsNames.map(({ link, category }) => {
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
            {animals.map(({ title, icon_url, id, slug }) => {
              return (
                <Link key={id}>
                  <div
                    className={
                      type === 'signUp'
                        ? includesSubscription(id)
                          ? 'animals-bar-icon-box chosen'
                          : 'animals-bar-icon-box'
                        : id === animal
                        ? 'animals-bar-icon-box chosen'
                        : 'animals-bar-icon-box'
                    }
                    onClick={() => {
                      type === 'section' &&
                        (setAnimal(id),
                        // setCategoryID(id),
                        setAnimalName(title),
                        setAnimalSlug(slug),
                        setAnimalID(id));
                      type === 'signUp' &&
                        (setSubscriptionIDList(id), setSubscription(id));
                    }}
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
  setAnimal: PropTypes.func,
  animal: PropTypes.number,
};
