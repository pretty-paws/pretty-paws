import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { StyledHeroMobile } from './HeroMobile.styled';
import 'swiper/css';

import HeroPromotion from './HeroPromotion';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/AuthProvider';

const HeroMobile = observer(() => {
  const store = useStore();
  const {
    hero: { offerByAnimal },
  } = store;

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
        {offerByAnimal &&
          offerByAnimal.map(offer => (
            <SwiperSlide key={offer.id}>
              <img
                className="promotion__img-bg"
                src={offer.image_url}
                alt={offer.animal}
              />
              <span></span>
              <HeroPromotion
                type={offer.offer_type}
                text={offer.offer_text}
              ></HeroPromotion>
            </SwiperSlide>
          ))}
      </Swiper>
    </StyledHeroMobile>
  );
});

export default HeroMobile;
