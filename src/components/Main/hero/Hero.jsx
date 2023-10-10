import { React, useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import * as ReactDOMServer from 'react-dom/server';
import sprite from '../../../img/svg-sprite/sprite.svg';

import imgCat from '../../../img/hero/cat.png';
import imgDog from '../../../img/hero/dog.jpg';
import imgFish from '../../../img/hero/fish.jpg';
import imgRodents from '../../../img/hero/rodents.jpg';
import imgBird from '../../../img/hero/bird.jpg';
import imgReptiles from '../../../img/hero/reptiles.jpg';

import CategoryType from './CategoryType';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { StyledHero, StyleAnimalsBar } from './Hero.styled';
import { GlobalContainer } from '../../../global/GlobalContainer';

import useWindowSize from '../../../hooks/useWindowSize';
import HeroMobile from './HeroMobile';

const animalsData = [
  { index: 1, icon: 'cat', text: 'Коти', img: imgCat },
  { index: 2, icon: 'dog', text: 'Собаки', img: imgDog },
  { index: 3, icon: 'mouse', text: 'Гризуни', img: imgRodents },
  { index: 4, icon: 'fish', text: 'Риби', img: imgFish },
  { index: 5, icon: 'bird', text: 'Птахи', img: imgBird },
  { index: 6, icon: 'lizard', text: 'Рептилії', img: imgReptiles },
];

const Hero = () => {
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);
  const { screen } = useWindowSize();
  const renderCustom = (swiper, current) => {
    return ReactDOMServer.renderToStaticMarkup(
      animalsData.map(animal => (
        <StyleAnimalsBar
          className="pagination__custom"
          key={animal.index}
          onClick={() => handlePaginationItemClick(animal.index)}
          isActive={animal.index === current}
        >
          <div className="animals-bar-icon-box">
            <svg className="animals-bar-icon" width="24px" height="24px">
              <use href={`${sprite}#${animal.icon}`} />
            </svg>
          </div>
          <span className="animals-bar-text">
            {current === animal.index ? animal.text : ''}
          </span>
        </StyleAnimalsBar>
      ))
    );
  };

  const handlePaginationItemClick = event => {
    const clickedElement = event.target;
    const paginationItems = paginationRef.current.querySelectorAll(
      '.pagination__custom'
    );
    paginationItems.forEach((item, index) => {
      if (item === clickedElement) {
        swiper.slideTo(index);
        // console.log('index of slide  = ', index);
      }
    });
  };
  // console.log(screen === 'mobile');
  useEffect(() => {
    if (paginationRef.current && swiper) {
      paginationRef.current.addEventListener(
        'click',
        handlePaginationItemClick
      );
    }

    return () => {
      if (paginationRef.current && swiper) {
        paginationRef.current.removeEventListener(
          'click',
          handlePaginationItemClick
        );
      }
    };
  }, [swiper]);
  return (
    <>
      {screen !== 'mobile' && (
        <StyledHero>
          <Swiper
            onSwiper={swiper => setSwiper(swiper)}
            allowTouchMove={false}
            pagination={{
              el: paginationRef.current,
              clickable: true,
              type: 'custom',
              renderCustom,
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            speed={1500}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {animalsData.map(animal => (
              <SwiperSlide key={animal.index}>
                <div className="hero-content">
                  <img src={animal.img} alt={animal.text} />
                  <CategoryType />
                </div>
              </SwiperSlide>
            ))}
            <GlobalContainer>
              <div
                onClick={handlePaginationItemClick}
                ref={paginationRef}
                className="pagination-container"
              ></div>
            </GlobalContainer>
          </Swiper>
        </StyledHero>
      )}

      {screen === 'mobile' && <HeroMobile />}
    </>
  );
};

export default Hero;
