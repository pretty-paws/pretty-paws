import React from 'react';
import { StyledCategoryTypeItem } from './CategoryTypeItem.styled';
import PropTypes from 'prop-types';

const CategoryTypeItem = ({ children, text, x, y }) => {
  return (
    <StyledCategoryTypeItem x={x} y={y}>
      {children}
      <p className="category-type__text">{text}</p>
    </StyledCategoryTypeItem>
  );
};

export default CategoryTypeItem;

CategoryTypeItem.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};
