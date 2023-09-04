import { React, useState, useEffect } from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import CategoryTypeItem from './CategoryTypeItem';
import {
  StyledCategoryType,
  //   StyledCategoryTypeContainer,
} from './CategoryType.styled';
import { GlobalContainer } from '../../../global/GlobalContainer';
const CategoryType = () => {
  const [parentWidth, setParentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setParentWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledCategoryType>
      <GlobalContainer>
        <CategoryTypeItem y={144} x={parentWidth / 4.7 - 186} text="Корм">
          <svg className="category-type__img">
            <use href={sprite + '#paw'} />
          </svg>
        </CategoryTypeItem>
        <CategoryTypeItem y={6} x={parentWidth / 2.58 - 186} text="Декорації">
          <svg className="category-type__img">
            <use href={sprite + '#paw'} />
          </svg>
        </CategoryTypeItem>
        <CategoryTypeItem y={255} x={parentWidth / 1.55 - 186} text="Ласощі">
          <svg className="category-type__img">
            <use href={sprite + '#paw'} />
          </svg>
        </CategoryTypeItem>
        <CategoryTypeItem y={270} x={parentWidth / 2.65 - 186} text="Тераріуми">
          <svg className="category-type__img">
            <use href={sprite + '#paw'} />
          </svg>
        </CategoryTypeItem>
        <CategoryTypeItem y={150} x={parentWidth / 1.9 - 186} text="Обладнання">
          <svg className="category-type__img">
            <use href={sprite + '#paw'} />
          </svg>
        </CategoryTypeItem>
      </GlobalContainer>
    </StyledCategoryType>
  );
};

export default CategoryType;
