import { React } from 'react';
import { useTranslation } from 'react-i18next';

import Title from '../../SharedLayout/Title/Title';
import CardBlog from '../../SharedLayout/CardBlog/CardBlog';
import { StyledBlog } from './Blog.styled';
import { Link } from 'react-router-dom';
// import { BLOG_ROUTE } from '../../../utils/consts';

// MOBX
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/AuthProvider';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Blog = observer(() => {
  const store = useStore();
  const {
    blog: { state, blogs },
  } = store;
  const { t } = useTranslation();

  return (
    <StyledBlog>
      <div className="blog-title-box">
        <Title>
          <h2>{t('Блог')}</h2>
        </Title>
      </div>
      <div>
        <Swiper
          modules={[Pagination, Navigation]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            // dynamicBullets: true,
            clickable: true,
          }}
          navigation={{
            enabled: true,
          }}
          breakpoints={{
            320: {
              navigation: {
                enabled: false,
              },
            },
            834: {
              slidesPerView: 3,
              spaceBetween: 15,
              navigation: {
                enabled: false,
              },
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 20,
              navigation: {
                enabled: true,
              },
            },
          }}
          //   aria-hidden
        >
          {state === 'done'
            ? blogs.map(
                ({
                  id,
                  title,
                  short_description,
                  content,
                  image_url,
                  category,
                  slug,
                  reading_time_minutes,
                  //   published_at,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <CardBlog
                        key={id}
                        id={id}
                        short_description={short_description}
                        title={title}
                        content={content}
                        image_url={image_url}
                        category={category}
                        slug={slug}
                        reading_time_minutes={reading_time_minutes}
                      />
                    </SwiperSlide>
                  );
                }
              )
            : null}
        </Swiper>

        <div className="blog__button-container">
          <Link to="/blog">
            <button className="blog__button" type="button">
              Усі статті
            </button>
          </Link>
        </div>
      </div>
    </StyledBlog>
  );
});

export default Blog;
