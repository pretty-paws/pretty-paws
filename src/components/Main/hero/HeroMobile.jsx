import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { StyledHeroMobile } from './HeroMobile.styled';
import 'swiper/css';

import imgCat from '../../../img/hero/cat.png';
import imgDog from '../../../img/hero/dog.jpg';
import imgFish from '../../../img/hero/fish.jpg';
import imgRodents from '../../../img/hero/rodents.jpg';
import imgBird from '../../../img/hero/bird.jpg';
import imgReptiles from '../../../img/hero/reptiles.jpg';
import HeroPromotion from './HeroPromotion';

const HeroMobile = () => {
  return (
    <StyledHeroMobile>
      <Swiper
        spaceBetween={16}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={1500}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img className="promotion__img-bg" src={imgCat} alt="imgCat" />
          <span></span>
          <HeroPromotion
            text={'Купуйте сухий корм для котів від ACANA  зі знижкою 20%'}
          ></HeroPromotion>
        </SwiperSlide>
        <SwiperSlide>
          <img className="promotion__img-bg" src={imgDog} alt="imgCat" />
          <span></span>
          <HeroPromotion
            text={'Купуйте сухий корм для котів від ACANA  зі знижкою 20%'}
          ></HeroPromotion>
        </SwiperSlide>
        <SwiperSlide>
          <img className="promotion__img-bg" src={imgFish} alt="imgCat" />
          <span></span>

          <HeroPromotion
            text={'Купуйте сухий корм для котів від ACANA  зі знижкою 20%'}
          ></HeroPromotion>
        </SwiperSlide>
        <SwiperSlide>
          <img className="promotion__img-bg" src={imgRodents} alt="imgCat" />
          <span></span>

          <HeroPromotion
            text={'Купуйте сухий корм для котів від ACANA  зі знижкою 20%'}
          ></HeroPromotion>
        </SwiperSlide>
        <SwiperSlide>
          <img className="promotion__img-bg" src={imgBird} alt="imgCat" />
          <span></span>

          <HeroPromotion
            text={'Купуйте сухий корм для котів від ACANA  зі знижкою 20%'}
          ></HeroPromotion>
        </SwiperSlide>
        <SwiperSlide>
          <img className="promotion__img-bg" src={imgReptiles} alt="imgCat" />
          <span></span>

          <HeroPromotion
            text={'Купуйте сухий корм для котів від ACANA  зі знижкою 20%'}
          ></HeroPromotion>
        </SwiperSlide>
      </Swiper>
    </StyledHeroMobile>
  );
};

export default HeroMobile;
