import React from 'react';
import Title from '../../SharedLayout/Title/Title';
import CardBlog from '../../SharedLayout/CardBlog/CardBlog';
import { StyledBlog } from './Blog.styled';
// import { NavLink } from 'react-router-dom';
// import { BLOG_ROUTE } from '../../../utils/consts';
import sprite from '../../../img/svg-sprite/sprite.svg';
import useHorizontalScroll from '../../../hooks/useHorizontalScroll';
import useWindowSize from '../../../hooks/useWindowSize';

const Blog = () => {
  const { screen } = useWindowSize();
  const { elementRef, arrowDisable, handleHorizontalScroll } =
    useHorizontalScroll(10, 12, 350);
  return (
    <StyledBlog>
      <div className="blog-title-box">
        <Title>
          <h2>Блог</h2>
        </Title>
      </div>
      <div>
        {screen === 'desktop' && (
          <>
            <div
              className="left-arrow"
              onClick={() => handleHorizontalScroll('left')}
              disabled={arrowDisable}
            >
              <svg width=" 24px" height=" 24px">
                <use href={sprite + '#arrow-down'} />
              </svg>
            </div>
            <div
              className="right-arrow"
              onClick={() => handleHorizontalScroll('right')}
            >
              <svg width=" 24px" height=" 24px">
                <use href={sprite + '#arrow-down'} />
              </svg>
            </div>
          </>
        )}

        <div className="blog__card-container" ref={elementRef}>
          <CardBlog></CardBlog>
          <CardBlog></CardBlog>
          <CardBlog></CardBlog>
          <CardBlog></CardBlog>
          <CardBlog></CardBlog>
        </div>

        <div className="blog__button-container">
          <button className="blog__button" type="button">
            Усі статті
          </button>
        </div>
      </div>
    </StyledBlog>
  );
};

export default Blog;
