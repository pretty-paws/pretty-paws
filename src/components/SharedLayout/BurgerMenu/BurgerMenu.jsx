import React from 'react';
import { StyledBackdrop, StyledBurger } from './BurgerMenu.styled';
import PropTypes from 'prop-types';
import UserBar from '../Header/UserBar';
import sprite from '../../../img/svg-sprite/sprite.svg';
import AnimalsBar from '../AnimalsBar/AnimalsBar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { publicRoutes } from '../../../routes';

const BurgerMenu = ({ active, setActive }) => {
  const [openedCatalogue, setOpenedCatalogue] = useState(false);
  return (
    <>
      <StyledBackdrop
        className={active ? 'active burger__backdrop' : 'burger__backdrop'}
        onClick={() => setActive(false)}
      />
      <StyledBurger
        className={active && 'active'}
        onClick={() => setActive(false)}
      >
        <div onClick={e => e.stopPropagation()}>
          <div className="burger__head">
            <svg className="burger-language-uk-icon" width="24px" height="24px">
              <use href={sprite + '#uk'} />
            </svg>
            <Link to="/login" onClick={() => setActive(false)}>
              <button
                className="burger__login-button"
                type="button"
                //   onClick={() => showModal(true)}
              >
                Вхід для своїх
              </button>
            </Link>
            <svg
              className="burger-close-icon"
              width="24px"
              height="24px"
              onClick={() => setActive(false)}
            >
              <use href={sprite + '#close'} />
            </svg>
          </div>
          <div className="burger__user-bar">
            <UserBar setActive={setActive} />
          </div>

          <div className="burger__main">
            <div className="burger__catalogue">
              <svg
                className={
                  openedCatalogue ? 'burger__arrow opened' : 'burger__arrow'
                }
                width="24px"
                height="24px"
              >
                <use href={sprite + '#arrow-down'} />
              </svg>
              <p onClick={() => setOpenedCatalogue(!openedCatalogue)}>
                Каталог товарів
              </p>
            </div>
            {openedCatalogue && <AnimalsBar type="burger" />}
            {publicRoutes.slice(1).map(({ name, path }) => {
              return (
                <Link to={path} key={name} onClick={() => setActive(false)}>
                  <p>{name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </StyledBurger>
    </>
  );
};

export default BurgerMenu;

BurgerMenu.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};
