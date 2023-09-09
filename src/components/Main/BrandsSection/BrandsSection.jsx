import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../SharedLayout/Title/Title';
import { brands } from '../../../img/brands';
import { BrandsContainer } from './BrandsSection.styled';
import useWindowSize from '../../../hooks/useWindowSize';

const BrandsSection = () => {
  const { screen } = useWindowSize();
  const slicedBrands = brands => {
    if (screen !== 'desktop') return brands.slice(0, brands.length - 4);
    return brands;
  };
  //   console.log(slicedBrands(brands));
  return (
    <BrandsContainer>
      <Title>
        <h2 className="brands__title">Бренди</h2>
      </Title>
      <div className="brands__box">
        {slicedBrands(brands).map(brand => {
          return (
            <Link key={brand}>
              <div className="brands__bg">
                <img
                  src={brand}
                  className="brands__img"
                  alt=""
                  width="138px"
                  height="44px"
                ></img>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="brands__button-container">
        <button type="button" className="brands__button">
          До каталогу
        </button>
      </div>
    </BrandsContainer>
  );
};

export default BrandsSection;
