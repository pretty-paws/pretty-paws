import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../img/svg-sprite/sprite.svg';

import { useStore } from '../../../store/AuthProvider';
import PropTypes from 'prop-types';
import { StyledCategoryMenu } from './CategoryMenu.styled';

import AnimalsBar from '../AnimalsBar/AnimalsBar';

const CategoryMenu = ({ mouseLeave, data__visible }) => {
  //   store with user, animals,category
  const store = useStore();
  const { category } = store;
  const [chosenAnimal, setChosenAnimal] = useState([1]);
  const [chosenCategory, setChosenCategory] = useState();
  const [showSubCategory, setShowSubCategory] = useState(false);

  const handleAnimalClick = animal => {
    setChosenAnimal([animal]);
  };

  const closeMenu = () => {
    setShowSubCategory(false);
  };

  const handleCategoryClick = category => {
    if (category) {
      setChosenCategory(category);
      setShowSubCategory(true);
    }
  };

  const filteredAnimalCategory = category.categores.filter(
    category => category.category_animal_id === chosenAnimal[0]
  );

  const filteredSubCategory = category.subCategory.filter(
    subCtg => subCtg.category_id === chosenCategory
  );

  function getCategoryName(categoryId) {
    const categoryID = category.categores.find(
      category => category.id === categoryId
    );
    if (categoryID) {
      return categoryID.title;
    } else {
      return 'Категорію не знайдено';
    }
  }

  return (
    <StyledCategoryMenu onMouseLeave={mouseLeave} data__visible={data__visible}>
      {showSubCategory ? (
        <>
          <div className="subcategores">
            <Link to="" onClick={closeMenu} className="subcategores__link">
              <svg
                className="subcategores__navigation-icon"
                width="24px"
                height="24px"
              >
                <use href={sprite + '#arrow-black'} />
              </svg>
              <h3 className="subcategores__title">
                {getCategoryName(chosenCategory)}
              </h3>
            </Link>
            <ul className="subcategores__list">
              {filteredSubCategory.map(subCtg => {
                return (
                  <Link to="" onClick={closeMenu} key={subCtg.id}>
                    <li className="subcategores__list-item">{subCtg.title}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <div className="categores__content">
          <AnimalsBar
            type="vertical"
            getCategory={handleAnimalClick}
            chosenCategory={chosenAnimal}
          />
          <div className="categores__animal">
            <ul className="categores__list">
              {filteredAnimalCategory.map(ctg => {
                return (
                  <Link
                    //   to=""
                    className="category__link"
                    onClick={() => handleCategoryClick(ctg.id)}
                    key={ctg.id}
                  >
                    <li className="categores__list-item">{ctg.title}</li>
                    <svg className="navigation-icon" width="24px" height="24px">
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
};
CategoryMenu.propTypes = {
  mouseLeave: PropTypes.any,
  data__visible: PropTypes.bool, // Ожидаем, что data__visible будет булевым значением
};
export default CategoryMenu;
