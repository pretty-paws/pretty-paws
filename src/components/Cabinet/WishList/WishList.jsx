import React from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledWishList } from './WishList.styled';

const WishList = () => {
  const { screen } = useWindowSize();
  return (
    <StyledWishList>
      <div className="WishList__header-box">
        {screen === 'mobile' && (
          <Link to={'/cabinet'}>
            <svg width="24px" height="24px" className="WishList__arrow">
              <use href={sprite + '#arrow-down'} />
            </svg>
          </Link>
        )}
        <h2 className="WishList__header">Список бажань</h2>
      </div>
      <div className="WishList__body">
        <p className="WishList__text">
          Ви ще не додавали товари до улюблених. Перегляньте товари в каталозі,
          адже у нас безліч переваг для своїх.
        </p>
        <button type="button" className="WishList__button">
          До каталогу
        </button>
      </div>
    </StyledWishList>
  );
};

export default WishList;
