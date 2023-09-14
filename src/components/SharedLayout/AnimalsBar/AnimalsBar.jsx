import React from 'react';
import { StyledAnimalsBar } from './AnimalsBar.styled';
import { animalsSvg } from '../../../utils/animalBarSvgLinks';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AnimalsBar = ({ type, getID }) => {
  // console.log(type);
  return (
    <StyledAnimalsBar type={type}>
      {animalsSvg.map(({ id, link }) => {
        return (
          <Link to="/" key={link}>
            <div className="animals-bar-icon-box" onClick={() => getID(id)}>
              <svg className="animals-bar-icon" width="24px" height="24px">
                <use href={link} />
              </svg>
            </div>
          </Link>
        );
      })}
    </StyledAnimalsBar>
  );
};

export default AnimalsBar;

AnimalsBar.propTypes = {
  type: PropTypes.string,
  getID: PropTypes.func,
};
