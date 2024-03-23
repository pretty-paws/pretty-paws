import React, { useEffect } from 'react';
import {
  StyledBackdrop,
  StyledBurger,
  StyledAnimalCatalog,
} from './BurgerMenu.styled';
import PropTypes from 'prop-types';
import UserBar from '../Header/UserBar';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { publicRoutes } from '../../../routes';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../../store/AuthProvider';

import { observer } from 'mobx-react-lite';

import AnimalsIconBar from '../AnimalsIconBar/AnimalsIconBar';

const BurgerMenu = observer(({ active, setActive }) => {
  //  main catalog burger menu
  const [openedCatalogue, setOpenedCatalogue] = useState(false);
  //   state for subcategory animals
  const [showAnimalCatalog, setShowAnimalCatalog] = useState(false);
  //   chosen category with animals bar
  const [chosenAnimal, setChosenAnimal] = useState([]);
  // const [language, setLanguage] = useState(
  //   localStorage.getItem('language') || 'en'
  // );

  //   store with user, animals,category
  const store = useStore();

  const {
    auth: { authorised, language, setLanguage },
    catalog: {
      animals,
      animalSlug,
      categories,
      getCategories,
      setAnimalSlug,
      setAnimalName,
      setCategoryID,
      setCategoryName,
      setCategorySlug,
      setSubcategoryID,
    },
  } = store;

  const { i18n, t } = useTranslation();

  const handleLanguageChange = lang => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    if (chosenAnimal.length > 0) {
      let chosenId = chosenAnimal.map(pet => {
        setAnimalName(pet.title);
        setAnimalSlug(pet.slug);
        return pet.id;
      });

      getCategories(language, chosenId[0]);
    }
  }, [chosenAnimal]);

  //  function that get id animal clicked
  const handleAnimalClick = animal => {
    setChosenAnimal([animal]);
    setOpenedCatalogue(false);
    setShowAnimalCatalog(true);
  };

  const closeAnimalCatalog = () => {
    setShowAnimalCatalog(false);
    setChosenAnimal([]);
  };

  const closeMenu = () => {
    setShowAnimalCatalog(false);
    setActive(false);
    setOpenedCatalogue(false);
  };

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

  const handleCategoryClick = category => {
    setCategoryID(category.id);
    setCategoryName(category.title);
    setCategorySlug(category.slug);
    closeMenu();
  };

  const handleSubCategoryClick = (category, subcategory) => {
    setCategoryID(category.id);
    setCategoryName(category.title);
    setCategorySlug(category.slug);
    setSubcategoryID(subcategory.id);
    closeMenu();
  };
  //   const [subCategories, setSubCategories] = useState([]);

  //   const [visible, setVisible] = useState(false);

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
                  {localStorage.getItem('animalName')}
                </h3>
              </div>
              {categories &&
                categories.map(category => {
                  return (
                    <div className="subburger__animal" key={category.id}>
                      <Link
                        state={{ from: '/catalog/animal' }}
                        to={{
                          pathname: `/catalog/animal/${animalSlug}/category/${category.slug}`,
                          //   search: `?subcategories=`,
                        }}
                        onClick={() => handleCategoryClick(category)}
                      >
                        <h3 className="animal__title">{category.title}</h3>
                      </Link>
                      <ul className="animal__list">
                        {category.subcategories.map(subCategory => {
                          return (
                            <Link
                              state={{ from: '/catalog/animal' }}
                              to={{
                                pathname: `/catalog/animal/${animalSlug}/category/${category.slug}`,
                                search: `?subcategories=${subCategory.slug}`,
                              }}
                              key={subCategory.id}
                              onClick={() =>
                                handleSubCategoryClick(category, subCategory)
                              }
                            >
                              <li className="animal__list-item">
                                {subCategory.title}
                              </li>
                            </Link>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              <div className="subburger__footer">
                <AnimalsIconBar
                  type="burger"
                  animalsArray={animals}
                  getCategory={handleAnimalClick}
                  chosenCategory={chosenAnimal}
                />
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
                  <div
                    onClick={() => {
                      handleLanguageChange('ua');
                      setActive(false);
                    }}
                  >
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
                  <div
                    onClick={() => {
                      handleLanguageChange('en');
                      setActive(false);
                    }}
                  >
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
                  <AnimalsIconBar
                    type="burger"
                    animalsArray={animals}
                    getCategory={handleAnimalClick}
                    chosenCategory={chosenAnimal}
                  />
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
