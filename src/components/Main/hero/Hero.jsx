import React from 'react';
import img from '../../../img/hero/reptiles.jpg';
import { StyledHero } from './Hero.styled';
import 'swiper/css';
import 'swiper/css/pagination';
import CategoryType from './CategoryType';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import {
  AnimalsBarContainer,
  StyleAnimalsBar,
} from './NavigationAnimals.styled';
// Инициализируем Swiper
SwiperCore.use([Pagination]);

const animalsData = [
  { icon: 'dog', text: 'Собаки' },
  { icon: 'cat', text: 'Коти' },
  { icon: 'mouse', text: 'Миші' },
  { icon: 'fish', text: 'Риби' },
  { icon: 'bird', text: 'Птахи' },
  { icon: 'lizard', text: 'Рептилії' },
];
const Hero = () => {
  const renderCustomPagination = (swiper, current) => {
    return animalsData.map((animal, index) => (
      <div key={index} onClick={() => swiper.slideTo(index)}>
        <StyleAnimalsBar isActive={index === current}>
          <div className="animals-bar-icon-box">
            <svg className="animals-bar-icon" width="24px" height="24px">
              <use href={`${sprite}#${animal.icon}`} />
            </svg>
          </div>
          <span className="animals-bar-text">{animal.text}</span>
        </StyleAnimalsBar>
      </div>
    ));
  };
  console.log(renderCustomPagination);
  return (
    <StyledHero>
      <Swiper
        slidesPerView={1}
        pagination={{
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: (swiper, current) =>
            renderCustomPagination(swiper, current),
        }}
      >
        {/* Создание слайдов */}
        {animalsData.map((animal, index) => (
          <SwiperSlide key={index}>
            <div className="hero__img">
              <img src={img} alt="reptiles" />
              <CategoryType />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <AnimalsBarContainer>
        <div className="swiper-pagination"></div>
      </AnimalsBarContainer>
    </StyledHero>
  );
};

export default Hero;
