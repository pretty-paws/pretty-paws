import React from 'react';
import { BackgroundContainer } from './HelpRegisterSection.styled';
import PropTypes from 'prop-types';
import { GlobalContainer } from '../../../global/GlobalContainer';

const HelpRegisterSection = ({ title, text, button, animal }) => {
  return (
    <BackgroundContainer type={animal}>
      <GlobalContainer>
        <div className="container">
          <h3 className="title">{title}</h3>
          <p className="text">{text}</p>
          <button className="button">{button}</button>
        </div>
      </GlobalContainer>
    </BackgroundContainer>
  );
};

export default HelpRegisterSection;

HelpRegisterSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
};
