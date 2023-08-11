import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import CategoryTypeItem from './CategoryTypeItem';
import {
  StyledCategoryType,
  StyledCategoryTypeContainer,
} from './CategoryType.styled';
const CategoryType = () => {
  return (
    <StyledCategoryType>
      <StyledCategoryTypeContainer>
        <CategoryTypeItem x={857} y={76} text="Корм">
          <svg className="category-type__img">
            <use href={sprite + '#paw'} />
          </svg>
        </CategoryTypeItem>
        <CategoryTypeItem x={98} y={142} text="Декорації">
          <svg className="category-type__img">
            <use href={sprite + '#paw'} />
          </svg>
        </CategoryTypeItem>
        <CategoryTypeItem x={954} y={299} text="Ласощі">
          <svg className="category-type__img">
            <use href={sprite + '#paw'} />
          </svg>
        </CategoryTypeItem>
        <CategoryTypeItem x={1} y={408} text="Тераріуми">
          <svg className="category-type__img">
            <use href={sprite + '#paw'} />
          </svg>
        </CategoryTypeItem>
        <CategoryTypeItem x={760} y={424} text="Обладнання">
          <svg className="category-type__img">
            <use href={sprite + '#paw'} />
          </svg>
        </CategoryTypeItem>
      </StyledCategoryTypeContainer>
    </StyledCategoryType>
  );
};

export default CategoryType;
