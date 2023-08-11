import React from 'react';
import img from '../../../img/hero/reptiles.jpg';
import { StyledHero } from './Hero.styled';
import CategoryType from './CategoryType';
import Navigation from './NavigationAnimals';

const Hero = () => {
  return (
    <StyledHero>
      <img className="hero__img" src={img} alt="reptiles" />
      <CategoryType></CategoryType>
      <Navigation></Navigation>
    </StyledHero>
  );
};

export default Hero;
