import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import sprite from '../../../img/svg-sprite/sprite.svg';

import useWindowSize from '../../../hooks/useWindowSize';
import { useStore } from '../../../store/AuthProvider';

const BlogPagination = observer(
  ({
    perPage,
    // setPerPage,
    setActiveLoadMore,
    currentPage,
    setCurrentPage,
    chosenCategory,
  }) => {
    const { screen } = useWindowSize();
    const store = useStore();
    const {
      // auth: { language },
      blog: {
        //   stateCategory,
        //   categories,
        linksBlogs,
        //   function that get all categories
        //   getCategories,
        //   stateFilterBlog,
        //   function that get all news filtered by categories
        //   filterBlogs,
        //   getFilterBlogs,
        totalPages,
      },
    } = store;

    const handleLoadMore = () => {
      setCurrentPage(prevPage => prevPage + 1);
      setActiveLoadMore(true);
    };

    const handlePaginationClick = numPage => {
      // setCurrentPage(numPage);
      // setActiveLoadMore(true);

      setCurrentPage(numPage);
      setActiveLoadMore(true);
    };
    const handlePaginationArrowClick = type => {
      if (type === 'prev') {
        setCurrentPage(prevPage => prevPage - 1);
        setActiveLoadMore(true);
      } else {
        setCurrentPage(prevPage => prevPage + 1);
        setActiveLoadMore(true);
      }
    };

    return screen === 'desktop'
      ? totalPages > 1 && (
          <div className="blog__pagination">
            {currentPage > 1 &&
              linksBlogs.some(link => link.label === '&laquo; Previous') && (
                <Link
                  state={{ from: '/blog/news' }}
                  to={{
                    pathname: `/blog/news/`,
                    search: `?page=${currentPage}&per_page=${perPage}${
                      chosenCategory ? `&categories[0]=${chosenCategory}` : ''
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
                          handlePaginationClick(Number(link.label))
                        }
                      >
                        <p className="pagination__item">{link.label}</p>
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
                      chosenCategory ? `&categories[0]=${chosenCategory}` : ''
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
        );
  }
);

export default BlogPagination;
