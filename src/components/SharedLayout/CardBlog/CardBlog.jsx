import React from 'react';
import DOMPurify from 'dompurify';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledCardBlog } from './CardBlog.styled';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CardBlog = observer(
  ({
    // id,
    title,
    short_description,
    image_url,
    category,
    slug,
    reading_time_minutes,
  }) => {
    // const navigate = useNavigate();
    const { screen } = useWindowSize();

    const navigate = useNavigate();
    const sanitizedDescription = DOMPurify.sanitize(short_description);
    const handleDetailClick = () => {
      navigate(`/blog/news/${slug}`);
    };
    return (
      <StyledCardBlog>
        <div className="blog__img-container">
          <img className="blog__img" src={image_url} alt={title} />
        </div>
        <div className="blog__category">
          <p className="blog__category-text">{category}</p>
        </div>
        <div className="blog__content">
          <div className="blog__text">
            <h5 className="blog__title">{title}</h5>
            <div
              className="blog__desc"
              dangerouslySetInnerHTML={{
                __html: sanitizedDescription,
              }}
            />
          </div>
          <div className="blog__info">
            <svg className="blog__info-clock">
              <use href={sprite + '#watch-gray'} />
            </svg>
            <p className="blog__info-text">{`${reading_time_minutes} хвилин`}</p>
          </div>
          {screen === 'desktop' && (
            <button className="blog__btn" onClick={handleDetailClick}>
              Детальніше
            </button>
          )}
        </div>
      </StyledCardBlog>
    );
  }
);

CardBlog.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string,
  reading_time_minutes: PropTypes.number.isRequired,
  short_description: PropTypes.string.isRequired,
};

export default CardBlog;
