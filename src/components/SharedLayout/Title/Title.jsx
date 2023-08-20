import React from 'react';
import PropTypes from 'prop-types';
import { StyleTitle } from './StyleTitle.styled';

const Title = ({ children }) => {
  return <StyleTitle>{children}</StyleTitle>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
