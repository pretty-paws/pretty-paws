import React, { useEffect } from 'react';
import {
  StyledBackdrop,
  StyledBurger,
  StyledAnimalCatalog,
} from './BurgerMenu.styled';
import PropTypes from 'prop-types';
import UserBar from '../Header/UserBar';
import sprite from '../../../img/svg-sprite/sprite.svg';
import AnimalsBar from '../AnimalsBar/AnimalsBar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { publicRoutes } from '../../../routes';
import { animalsSvg } from '../../../utils/animalBarSvgLinks';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../../store/AuthProvider';

import { observer } from 'mobx-react-lite';
// import { useStore } from '../../../store/AuthProvider';

const BurgerMenu = observer(({ active, setActive }) => {
  const [openedCatalogue, setOpenedCatalogue] = useState(false);
  const [showAnimalCatalog, setShowAnimalCatalog] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState();
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'en'
  );

  const store = useStore();
  const {
    auth: { authorised },
    category,
    animal,
  } = store;

  const { i18n, t } = useTranslation();

  const handleLanguageChange = lang => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  //   object with UseStore
  // const store = useStore();
  // const { category, animal } = store;

  //  function that get id animal clicked
  const handleAnimalClick = animalid => {
    setSelectedAnimal(animalid);
    console.log(animalsSvg[animalid].link);
  };

  const closeAnimalCatalog = () => {
    setShowAnimalCatalog(false);
    setSelectedAnimal(null);
  };

  const closeMenu = () => {
    setShowAnimalCatalog(false);
    setSelectedAnimal(null);
    setActive(false);
  };
  //   fuction get animal name with selected element
  function getAnimalName(animalId) {
    const animalID = animal.animal.find(animal => animal.id === animalId);

    if (animalID) {
      return animalID.title;
    } else {
      return 'Тваринку не знайдено';
    }
  }

  useEffect(() => {
    // console.log('changed id ');
    // console.log('selected animal', selectedAnimal);
    if (selectedAnimal != undefined) {
      // console.log('changed id ', selectedAnimal);

      setShowAnimalCatalog(true);
      setOpenedCatalogue(false);
      // console.log(getAnimalName(selectedAnimal));
    }
  }, [selectedAnimal]);

  const filteredCategory = category.categores.filter(
    ctg => ctg.category_animal_id === selectedAnimal
  );

  const categoryItems = filteredCategory.map(ctg => {
    const filteredSubCategory = category.subCategory.filter(
      subCtg => subCtg.category_id === ctg.id
    );
    return (
      <div className="subburger__animal" key={ctg.id}>
        <Link to="" onClick={closeMenu}>
          <h3 className="animal__title">{ctg.title}</h3>
        </Link>
        <ul className="animal__list">
          {filteredSubCategory.map(subCategory => (
            <Link to="" onClick={closeMenu} key={subCategory.id}>
              <li className="animal__list-item">{subCategory.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  });
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [active]);

  return (
    <>
      <StyledBackdrop
        className={active ? 'active burger__backdrop' : 'burger__backdrop'}
        onClick={() => setActive(false)}
      />
      {showAnimalCatalog ? (
        <>
          <StyledAnimalCatalog className={showAnimalCatalog && 'active'}>
            <div className="subburger__content">
              <div className="subburger__head" onClick={closeAnimalCatalog}>
                <svg className="subburger__arrow" width="24px" height="24px">
                  <use href={sprite + '#arrow-down'} />
                </svg>
                <h3 className="subburger__title">
                  {getAnimalName(selectedAnimal)}
                </h3>
              </div>
              {categoryItems}
              <div className="subburger__footer">
                <AnimalsBar type="burger" getID={handleAnimalClick} />
              </div>
            </div>
          </StyledAnimalCatalog>
        </>
      ) : (
        <>
          <StyledBurger
            className={active && 'active'}
            onClick={() => setActive(false)}
          >
            <div onClick={e => e.stopPropagation()}>
              <div className="burger__head">
                {language === 'en' && (
                  <div onClick={() => handleLanguageChange('ua')}>
                    <svg
                      className="burger-language-icon"
                      width="24px"
                      height="24px"
                    >
                      <use href={sprite + '#ua'} />
                    </svg>
                  </div>
                )}

                {language === 'ua' && (
                  <div onClick={() => handleLanguageChange('en')}>
                    <svg
                      className="burger-language-icon"
                      width="24px"
                      height="24px"
                    >
                      <use href={sprite + '#uk'} />
                    </svg>
                  </div>
                )}
                <Link
                  to={authorised ? '/cabinet' : '/login'}
                  onClick={() => setActive(false)}
                >
                  <button
                    className="burger__login-button"
                    type="button"
                    //   onClick={() => showModal(true)}
                  >
                    {authorised ? t('Кабінет') : t('Вхід для своїх')}
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
                <div
                  className="burger__catalogue"
                  onClick={() => setOpenedCatalogue(!openedCatalogue)}
                >
                  <svg
                    className={
                      openedCatalogue ? 'burger__arrow opened' : 'burger__arrow'
                    }
                    width="24px"
                    height="24px"
                  >
                    <use href={sprite + '#arrow-down'} />
                  </svg>
                  <p>{t('Каталог товарів')}</p>
                </div>
                {openedCatalogue && (
                  <AnimalsBar type="burger" getID={handleAnimalClick} />
                )}
                {publicRoutes.slice(1).map(({ name, path }) => {
                  return (
                    <Link to={path} key={name} onClick={() => setActive(false)}>
                      <p>{t(`${name}`)}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </StyledBurger>
        </>
      )}
    </>
  );
});

export default BurgerMenu;

BurgerMenu.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};
