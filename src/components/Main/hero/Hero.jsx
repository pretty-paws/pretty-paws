import React from 'react';
import imgReptiles from '../../../img/hero/reptiles.jpg';
import imgBird from '../../../img/hero/bird.jpg';
import imgCat from '../../../img/hero/cat.png';
import imgDog from '../../../img/hero/dog.jpg';
import imgFish from '../../../img/hero/fish.jpg';
import imgRodents from '../../../img/hero/rodents.jpg';
import {
  StyledHero,
  AnimalsBarContainer,
  StyleAnimalsBar,
} from './Hero.styled';
import 'swiper/css';
import 'swiper/css/pagination';
import CategoryType from './CategoryType';
import SwiperCore from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import sprite from '../../../img/svg-sprite/sprite.svg';

import * as ReactDOMServer from 'react-dom/server';
// Инициализируем Swiper
SwiperCore.use([Pagination, Autoplay]);

const animalsData = [
  { index: 1, icon: 'cat', text: 'Коти', img: imgCat },
  { index: 2, icon: 'dog', text: 'Собаки', img: imgDog },
  { index: 3, icon: 'mouse', text: 'Гризуни', img: imgRodents },
  { index: 4, icon: 'fish', text: 'Риби', img: imgFish },
  { index: 5, icon: 'bird', text: 'Птахи', img: imgBird },
  { index: 6, icon: 'lizard', text: 'Рептилії', img: imgReptiles },
];
const Hero = () => {
  const renderCustomPagination = (swiper, current) => {
    return ReactDOMServer.renderToStaticMarkup(
      animalsData.map(animal => (
        <div key={animal.index} onClick={() => swiper.slideTo(animal.index)}>
          <StyleAnimalsBar isActive={animal.index === current}>
            <div className="animals-bar-icon-box">
              <svg className="animals-bar-icon" width="24px" height="24px">
                <use href={`${sprite}#${animal.icon}`} />
              </svg>
            </div>
            {current === animal.index ? (
              <span className="animals-bar-text">{animal.text}</span>
            ) : (
              <span></span>
            )}
          </StyleAnimalsBar>
        </div>
      ))
    );
  };

  return (
    <StyledHero>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={1500}
        pagination={{
          el: '.swiper-pagination',
          type: 'custom',
          clickable: true,
          renderCustom: renderCustomPagination,
        }}
      >
        {/* Create slide */}
        {animalsData.map(animal => (
          <SwiperSlide key={animal.index}>
            <div className="hero__img">
              <img src={animal.img} alt="reptiles" />
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
