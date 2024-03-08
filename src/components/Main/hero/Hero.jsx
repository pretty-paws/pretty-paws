import { React, useEffect, useState, useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import sprite from '../../../img/svg-sprite/sprite.svg';

import * as ReactDOMServer from 'react-dom/server';

import { StyledHero, StyleAnimalsBar } from './Hero.styled';
import { StyledCategoryType } from './CategoryType.styled';
import { GlobalContainer } from '../../../global/GlobalContainer';

import useWindowSize from '../../../hooks/useWindowSize';

import HeroMobile from './HeroMobile';
import CategoryTypeItem from './CategoryTypeItem';

import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

const Hero = observer(() => {
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);

  const { screen } = useWindowSize();

  const store = useStore();

  const {
    hero: { offerByAnimal },
    catalog: {
      animals,
      setAnimalName,
      setAnimalSlug,
      setCategoryID,
      setCategoryName,
      setCategorySlug,
    },
    // catalog: { animals },
  } = store;

  function getImageUrlForAnimal(animal) {
    const offer = offerByAnimal.find(offer => offer.animal === animal);
    return offer ? offer.image_url : null;
  }

  const [parentWidth, setParentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setParentWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderCustom = (swiper, current) => {
    return ReactDOMServer.renderToStaticMarkup(
      animals.map(animal => (
        <StyleAnimalsBar
          className="pagination__custom"
          key={animal.id}
          onClick={() => handlePaginationItemClick(animal.index)}
          isActive={animal.id === current}
        >
          <div className="animals-bar-icon-box">
            <img
              className="animals-bar-icon"
              src={animal.icon_url}
              alt={animal.title}
            />
          </div>
          <span className="animals-bar-text">
            {current === animal.id ? animal.title : ''}
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

  const handleCategoryItemClick = (animal, category) => {
    setAnimalName(animal.title);
    setAnimalSlug(animal.slug);
    setCategoryID(category.id);
    setCategoryName(category.title);
    setCategorySlug(category.slug);
  };

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
            {animals &&
              animals.map(animal => (
                <SwiperSlide key={animal.id}>
                  <div className="hero-content">
                    <img
                      src={getImageUrlForAnimal(animal.title)}
                      alt={animal.title}
                    />
                    <StyledCategoryType>
                      <GlobalContainer>
                        {animal.categories.map((category, index) => (
                          <Link
                            key={category.id}
                            state={{ from: '/catalog/animal' }}
                            to={{
                              pathname: `/catalog/animal/${animal.slug}/category/${category.slug}`,
                              search: `?subcategories=`,
                            }}
                            onClick={() =>
                              handleCategoryItemClick(animal, category)
                            }
                          >
                            <CategoryTypeItem
                              y={[140, 15, 255, 270, 150, 66][index]}
                              x={
                                [
                                  parentWidth / 4.7 - 186,
                                  parentWidth / 2.58 - 186,
                                  parentWidth / 1.55 - 186,
                                  parentWidth / 2.55 - 186,
                                  parentWidth / 1.9 - 186,
                                  parentWidth / 3.4 - 186,
                                ][index]
                              }
                              text={category.title}
                            >
                              <svg className="category-type__img">
                                <use href={sprite + '#paw'} />
                              </svg>
                            </CategoryTypeItem>
                          </Link>
                        ))}
                      </GlobalContainer>
                    </StyledCategoryType>
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
});

export default Hero;
