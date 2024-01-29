import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../img/svg-sprite/sprite.svg';

import { useStore } from '../../../store/AuthProvider';
import PropTypes from 'prop-types';
import { StyledCategoryMenu } from './CategoryMenu.styled';

import AnimalsIconBar from '../AnimalsIconBar/AnimalsIconBar';
import { observer } from 'mobx-react-lite';

const CategoryMenu = observer(({ mouseLeave, data__visible }) => {
  //   store with user, animals,category
  const store = useStore();
  const {
    // category,.
    auth: { language },
    catalog: {
      animals,
      animalSlug,
      categories,
      categorySlug,
      getCategories,
      filteredSubcategories,
      getFilteredSubcategories,
      setAnimalName,
      setAnimalSlug,
      setCategoryID,
      setCategoryName,
      setCategorySlug,
      setSubcategoryID,
      //   categoryName,
    },
  } = store;
  const [chosenAnimal, setChosenAnimal] = useState([]);
  const [showSubCategory, setShowSubCategory] = useState(false);

  useEffect(() => {
    setChosenAnimal([animals[0]]);
  }, []);

  useEffect(() => {
    if (chosenAnimal.length > 0) {
      let chosenId = chosenAnimal.map(animal => {
        setAnimalName(animal.title);
        setAnimalSlug(animal.slug);
        return animal.id;
      });
      console.log(chosenId);
      getCategories(language, chosenId[0]);
    }
  }, [chosenAnimal]);

  useEffect(() => {
    if (localStorage.getItem('categoryID')) {
      getFilteredSubcategories(language, localStorage.getItem('categoryID'));
    }
  }, [showSubCategory]);

  const closeMenu = () => {
    setShowSubCategory(false);
  };

  const handleAnimalClick = animal => {
    setChosenAnimal([animal]);
  };
  const handleCategoryClick = category => {
    if (category) {
      setCategoryID(category.id);
      setCategoryName(category.title);
      setCategorySlug(category.slug);
      setShowSubCategory(true);
    }
  };

  const handleSubCategoryClick = subcategory => {
    setSubcategoryID(subcategory.id);
    closeMenu();
  };
  return (
    <StyledCategoryMenu onMouseLeave={mouseLeave} data__visible={data__visible}>
      {showSubCategory ? (
        <>
          <div className="subcategores">
            <Link
              to="/catalog"
              onClick={closeMenu}
              className="subcategores__link"
            >
              <svg
                className="subcategores__navigation-icon"
                width="24px"
                height="24px"
              >
                <use href={sprite + '#arrow-black'} />
              </svg>
              <h3 className="subcategores__title">
                {localStorage.getItem('categoryName')}
              </h3>
            </Link>
            <ul className="subcategores__list">
              {filteredSubcategories &&
                filteredSubcategories.map(subCategory => {
                  return (
                    <Link
                      state={{ from: '/catalog/animal' }}
                      to={{
                        pathname: `/catalog/animal/${animalSlug}/category/${categorySlug}`,
                        search: `?subcategories=${subCategory.slug}`,
                      }}
                      onClick={() => handleSubCategoryClick(subCategory)}
                      key={subCategory.id}
                    >
                      <li className="subcategores__list-item">
                        {subCategory.title}
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>
        </>
      ) : (
        <div className="categores__content">
          <AnimalsIconBar
            type="vertical"
            animalsArray={animals}
            getCategory={handleAnimalClick}
            chosenCategory={chosenAnimal}
          />
          <div className="categores__animal">
            <ul className="categores__list">
              {categories.length != 0 &&
                categories.map(category => {
                  return (
                    <Link
                      className="category__link"
                      onClick={() => handleCategoryClick(category)}
                      key={category.id}
                    >
                      <li className="categores__list-item">{category.title}</li>
                      <svg
                        className="navigation-icon"
                        width="24px"
                        height="24px"
                      >
                        <use href={sprite + '#arrow-black'} />
                      </svg>
                    </Link>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
    </StyledCategoryMenu>
  );
});

CategoryMenu.propTypes = {
  mouseLeave: PropTypes.any,
  data__visible: PropTypes.bool,
};
export default CategoryMenu;
