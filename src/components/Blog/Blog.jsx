import React, { useEffect, useState } from 'react';
import CardBlog from '../SharedLayout/CardBlog/CardBlog';
// import sprite from '../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/AuthProvider';
import { GlobalContainer } from '../../global/GlobalContainer';
import { StyledBlog } from '../Blog/Blog.styled';
import HelpRegisterSection from '../Main/HelpRegisterSection/HelpRegisterSection';
import Promotions from '../Main/PromotionsWithDiscount/Promotions';
import { useTranslation } from 'react-i18next';
import useWindowSize from '../../hooks/useWindowSize';
import { Link, useParams } from 'react-router-dom';

import BlogPagination from './BlogPagination/BlogPagination';
import { UseSkeleton } from '../../hooks/useSkeleton';
// import DOMPurify from 'dompurify';

const Blog = observer(() => {
  const { i18n, t } = useTranslation();
  const { screen } = useWindowSize();

  const store = useStore();
  const {
    auth: { language, authorised },
    blog: {
      stateCategory,
      categories,
      //   linksBlogs,
      //   function that get all categories
      getCategories,
      stateFilterBlog,
      //   function that get all news filtered by categories
      filterBlogs,
      getFilterBlogs,
      totalPages,
    },
  } = store;
  const [perPage, setPerPage] = useState(8);

  const [loading, setLoading] = useState(false);

  //   const [chosenCategory, setChosenCategory] = useState([]);
  const [chosenCategory, setChosenCategory] = useState();

  const [activeLoadMore, setActiveLoadMore] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const param = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  //   click to filter category
  function handleFilterClick(categoryId) {
    if (categoryId) {
      setChosenCategory(categoryId);
    }
    // changePerPage();
  }

  const emptyCategory = categories.find(
    category => category.id === chosenCategory
  );

  useEffect(() => {
    if (screen === 'mobile') {
      setPerPage(8);
    } else if (screen === 'tablet') {
      setPerPage(6);
    } else {
      setPerPage(8);
    }
  }, [screen]);

  // use effect for get information about categories and filtered news
  useEffect(() => {
    // changePerPage();
    getCategories(language);
    setLoading(true);
    getFilterBlogs(language, chosenCategory, perPage, currentPage).then(() => {
      setLoading(false);
    });
  }, [i18n.language]);

  useEffect(() => {
    if (activeLoadMore) {
      setLoading(true);
      getFilterBlogs(language, chosenCategory, perPage, currentPage).then(
        () => {
          setLoading(false);
        }
      );
      setActiveLoadMore(false);
    }
  }, [activeLoadMore]);

  useEffect(() => {
    console.log('Загрузилась сторінка ось категорія = ', chosenCategory);
    console.log(param);
    if (chosenCategory != undefined) {
      setCurrentPage(1);
      setLoading(true);
      getFilterBlogs(language, chosenCategory, perPage, currentPage).then(
        () => {
          setLoading(false);
        }
      );
    } else {
      setCurrentPage(1);
      setLoading(true);
      getFilterBlogs(language, chosenCategory, perPage, currentPage).then(
        () => {
          setLoading(false);
        }
      );
    }
  }, [chosenCategory]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
    setActiveLoadMore(true);
  };

  return (
    <StyledBlog>
      <GlobalContainer>
        <div className="blog__block">
          <div className="blog__categories-block categories">
            <Link
            //   state={{ from: '/blog/news' }}
            //   to={{
            //     pathname: `/blog/news/`,
            //     search: `?page=${currentPage}&per_page=${perPage}`,
            //   }}
            >
              <p
                className={`categories__item ${
                  // chosenCategory.length === 0 ? 'active' : ''
                  chosenCategory === undefined ? 'active' : ''
                }`}
                onClick={() => setChosenCategory()}
                //   onClick={() => setChosenCategory([])}
              >
                Усі матеріали
              </p>
            </Link>

            {
              stateCategory === 'done'
                ? categories.map(({ id, title }) => {
                    return (
                      <Link
                        // state={{ from: '/blog/news' }}
                        // to={{
                        //   pathname: `/blog/news/`,
                        //   search: `?page=${currentPage}&per_page=${perPage}&categories[0]=${id}`,
                        // }}
                        key={id}
                      >
                        <p
                          className={`categories__item ${
                            // chosenCategory.includes(id) ? 'active' : ''
                            chosenCategory === id ? 'active' : ''
                          }`}
                          onClick={() => handleFilterClick(id)}
                        >
                          {title}
                        </p>
                      </Link>
                    );
                  })
                : null
              //   <UseSkeleton screen={screen} cardsAmount={perPage} />
            }
          </div>
          {filterBlogs.length === 0 ? (
            <div className="blog__card-none">
              {`В цьому розділі поки немає матеріалу на тему “${
                emptyCategory && emptyCategory.title
                  ? emptyCategory.title
                  : null
              }”. Зовсім скоро
                ми опублікуємо корисну інформацію по цій темі, щоб ви ще більше
                могли насолодитись часом, проведеним зі своїми улюбленцями.`}
            </div>
          ) : null}
          <div className="blog__grid-cards">
            {stateFilterBlog === 'done' ? (
              filterBlogs.map(
                ({
                  id,
                  title,
                  short_description,
                  // content,
                  image_url,
                  category,
                  slug,
                  reading_time_minutes,
                  //   published_at,
                }) => {
                  return (
                    <CardBlog
                      key={id}
                      id={id}
                      short_description={short_description}
                      title={title}
                      // content={content}
                      image_url={image_url}
                      category={category}
                      slug={slug}
                      reading_time_minutes={reading_time_minutes}
                    />
                  );
                }
              )
            ) : (
              <UseSkeleton screen={screen} cardsAmount={perPage} />
            )}
          </div>
          {!loading && screen === 'desktop' ? (
            <BlogPagination
              perPage={perPage}
              setActiveLoadMore={setActiveLoadMore}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              chosenCategory={chosenCategory}
            ></BlogPagination>
          ) : (
            currentPage < totalPages && (
              <button className="blog__more-btn" onClick={handleLoadMore}>
                Завантажити ще
              </button>
            )
          )}
        </div>
      </GlobalContainer>

      <HelpRegisterSection
        animal="dog"
        title={authorised ? t('Pretty Paws') : t('Стань своїм')}
        text={
          authorised
            ? t(
                'Забезпечте своїх улюбленців якісними товарами за доступними цінами. Бо вони заслуговують найкращого!'
              )
            : t(
                'Зареєструйся на сайті і отримай знижку 5% на перше замовлення.  Для своїх у нас безліч переваг'
              )
        }
        button={authorised ? t('До каталогу') : t('Зареєструйся')}
      />
      <GlobalContainer>
        <Promotions
          query="is_promotional=1"
          title={t('Пропозиції зі знижкою')}
        />
      </GlobalContainer>
      {/* <CardBlog /> */}
    </StyledBlog>
  );
});

export default Blog;
