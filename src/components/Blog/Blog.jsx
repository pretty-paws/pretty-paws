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
import { Link } from 'react-router-dom';
// navigate
import BlogPagination from './BlogPagination/BlogPagination';
// import DOMPurify from 'dompurify';

const Blog = observer(() => {
  const { i18n, t } = useTranslation();
  const { screen } = useWindowSize();

  const store = useStore();
  const {
    auth: { language },
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
      //   totalPages,
    },
  } = store;
  const [perPage, setPerPage] = useState(2);

  //   const [chosenCategory, setChosenCategory] = useState([]);
  const [chosenCategory, setChosenCategory] = useState();

  const [activeLoadMore, setActiveLoadMore] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  function changePerPage() {
    let newPerPage;
    switch (screen) {
      case 'desktop':
        // newPerPage = 3;
        newPerPage = 2;
        break;
      case 'tablet':
        newPerPage = 6;
        break;
      case 'mobile':
        newPerPage = 4;
        break;
      default:
        // newPerPage = 3; // значение по умолчанию
        newPerPage = 8; // значение по умолчанию
        break;
    }
    setPerPage(newPerPage);
  }

  //   click to filter category
  function handleFilterClick(categoryId) {
    if (categoryId) {
      setChosenCategory(categoryId);
    }
    changePerPage();
  }

  const emptyCategory = categories.find(
    category => category.id === chosenCategory
  );

  // use effect for get information about categories and filtered news
  useEffect(() => {
    changePerPage();
    getCategories(language);
    getFilterBlogs(language, chosenCategory, perPage, currentPage);
  }, [i18n.language]);

  useEffect(() => {
    if (activeLoadMore) {
      getFilterBlogs(language, chosenCategory, perPage, currentPage);
      setActiveLoadMore(false);
    }
  }, [activeLoadMore]);

  useEffect(() => {
    if (chosenCategory != undefined) {
      setCurrentPage(1);
      getFilterBlogs(language, chosenCategory, perPage, currentPage);
    } else {
      setCurrentPage(1);
      getFilterBlogs(language, chosenCategory, perPage, currentPage);
    }
  }, [chosenCategory]);

  //   const handleLoadMore = () => {
  //     setCurrentPage(prevPage => prevPage + 1);
  //     setActiveLoadMore(true);
  //   };

  //   const handlePaginationClick = numPage => {
  //     console.log(' handlePaginationClick before = ', numPage);
  //     console.log(' handlePaginationClick current before = ', currentPage);
  //     // setCurrentPage(numPage);
  //     // setActiveLoadMore(true);
  //     // console.log('numPage', numPage);

  //     setCurrentPage(numPage);
  //     setActiveLoadMore(true);
  //     console.log(' handlePaginationClick current after = ', currentPage);
  //   };
  //   const handlePaginationArrowClick = type => {
  //     console.log(' handlePaginationArrowClick before  = ', currentPage);

  //     if (type === 'prev') {
  //       setCurrentPage(prevPage => prevPage - 1);
  //       setActiveLoadMore(true);
  //     } else {
  //       setCurrentPage(prevPage => prevPage + 1);
  //       setActiveLoadMore(true);
  //     }
  //     console.log(' handlePaginationArrowClick after  = ', currentPage);
  //   };

  return (
    <StyledBlog>
      <GlobalContainer>
        <div className="blog__block">
          <div className="blog__categories-block categories">
            <Link
              state={{ from: '/blog/news' }}
              to={{
                pathname: `/blog/news/`,
                search: `?page=${currentPage}&per_page=${perPage}`,
              }}
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

            {stateCategory === 'done'
              ? categories.map(({ id, title }) => {
                  return (
                    <Link
                      state={{ from: '/blog/news' }}
                      to={{
                        pathname: `/blog/news/`,
                        search: `?page=${currentPage}&per_page=${perPage}&categories[0]=${id}`,
                      }}
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
              : null}
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
            {stateFilterBlog === 'done'
              ? filterBlogs.map(
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
              : null}
          </div>
          <BlogPagination
            perPage={perPage}
            setActiveLoadMore={setActiveLoadMore}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            chosenCategory={chosenCategory}
          ></BlogPagination>
          {/* {screen === 'desktop'
            ? totalPages > 1 && (
                <div className="blog__pagination">
                  {currentPage > 1 &&
                    linksBlogs.some(
                      link => link.label === '&laquo; Previous'
                    ) && (
                      <Link
                        state={{ from: '/blog/news' }}
                        to={{
                          pathname: `/blog/news/`,
                          search: `?page=${currentPage}&per_page=${perPage}${
                            chosenCategory
                              ? `&categories[0]=${chosenCategory}`
                              : ''
                          }`,
                        }}
                      >
                        <button
                          className="pagination__btn"
                          onClick={() => handlePaginationArrowClick('prev')}
                        >
                          <svg
                            className="pagination__arrow-prev"
                            width="22px"
                            height="22px"
                          >
                            <use href={sprite + '#arrow-black'} />
                          </svg>
                        </button>
                      </Link>
                    )}

                  {linksBlogs &&
                    linksBlogs.map((link, index) => (
                      <React.Fragment key={index}>
                        {link.label !== '&laquo; Previous' &&
                          link.label !== 'Next &raquo;' && (
                            <Link
                              key={index}
                              className={`pagination__btn ${
                                link.active ? 'active-pag' : ''
                              }`}
                              state={{ from: '/blog/news' }}
                              to={{
                                pathname: `/blog/news/`,
                                search: `?page=${currentPage}&per_page=${perPage}${
                                  chosenCategory
                                    ? `&categories[0]=${chosenCategory}`
                                    : ''
                                }`,
                              }}
                              onClick={() =>
                                handlePaginationClick(() => Number(link.label))
                              }
                            >
                              <p className="pagination__item">{link.label}</p>
                              <p>{currentPage}</p>
                            </Link>
                          )}
                      </React.Fragment>
                    ))}
                  {currentPage < totalPages &&
                    linksBlogs.some(link => link.label === 'Next &raquo;') && (
                      <Link
                        state={{ from: '/blog/news' }}
                        to={{
                          pathname: `/blog/news/`,
                          search: `?page=${currentPage}&per_page=${perPage}${
                            chosenCategory
                              ? `&categories[0]=${chosenCategory}`
                              : ''
                          }`,
                        }}
                      >
                        <button
                          className="pagination__btn"
                          onClick={() => handlePaginationArrowClick('next')}
                        >
                          <svg
                            className="pagination__arrow-next"
                            width="22px"
                            height="22px"
                          >
                            <use href={sprite + '#arrow-black'} />
                          </svg>
                        </button>
                      </Link>
                    )}
                </div>
              )
            : currentPage < totalPages && (
                <button className="blog__more-btn" onClick={handleLoadMore}>
                  Завантажити ще
                </button>
              )} */}
        </div>
      </GlobalContainer>

      <HelpRegisterSection
        animal="dog"
        title={t('Стань своїм')}
        text={t(
          'Зареєструйся на сайті і отримай знижку 5% на перше замовлення.  Для своїх у нас безліч переваг'
        )}
        button={t('Зареєструйся')}
      />
      <GlobalContainer>
        <Promotions />
      </GlobalContainer>
      {/* <CardBlog /> */}
    </StyledBlog>
  );
});

export default Blog;
