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
import { useEffect } from 'react';
import { useState } from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

const AnimalsBar = observer(
  ({ type, getCategory, chosenCategory, isSubmitted, setAnimal, animal }) => {
    const store = useStore();
    const {
      catalog: { animals },
      auth: { setSubscription, subscriptions },
    } = store;
    console.log('subscriptions', subscriptions);

    function includesCategory(category) {
      if (!chosenCategory || isSubmitted) return false;
      return chosenCategory.includes(category);
    }

    const [subscription, setSubscriptions] = useState(subscriptions);

    function includesSubscription(id) {
      if (isSubmitted) return false;
      return subscription.includes(id);
    }

    useEffect(() => {
      setSubscriptions(subscriptions);
    }, [subscriptions]);

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
            {animals.map(({ title, icon_url, id }) => {
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
                      type === 'section' && setAnimal(id);
                      type === 'signUp' && setSubscription(id);
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
};
