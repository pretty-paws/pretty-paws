import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useStore } from '../../../store/AuthProvider';
import { useParams } from 'react-router-dom';
import { GlobalContainer } from '../../../global/GlobalContainer';
import HelpRegisterSection from '../../Main/HelpRegisterSection/HelpRegisterSection';
import { StyledBlogPage } from './BlogDetailedCardPage.styled';
import { useTranslation } from 'react-i18next';
import Promotions from '../../Main/PromotionsWithDiscount/Promotions';
import Bredcrumbs from '../Breadcrumbs/Breadcrumbs';
import CardBlog from '../../SharedLayout/CardBlog/CardBlog';
import Title from '../../SharedLayout/Title/Title';
import useWindowSize from '../../../hooks/useWindowSize';
import sprite from '../../../img/svg-sprite/sprite.svg';

import DOMPurify from 'dompurify';

const BlogDetailedCardPage = observer(() => {
  let { news_name } = useParams();
  //   const { i18n, t } = useTranslation();
  const { t } = useTranslation();
  const { screen } = useWindowSize();
  const store = useStore();
  const sectionName = 'Блог';
  const {
    auth: { language },
    blog: {
      blog,
      //   nameBlog,
      //   categoryBlog,
      getBlog,
      stateFilterBlog,
      filterBlogs,
      getFilterBlogs,
    },
  } = store;

  const [perPage, setPerPage] = useState(4);
  const [chosenCategory, setChosenCategory] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  // content add
  const sanitizedContent = DOMPurify.sanitize(blog.content);

  function changePerPage() {
    let newPerPage;
    switch (screen) {
      case 'desktop':
        // newPerPage = 3;
        newPerPage = 4;
        break;
      case 'tablet':
        newPerPage = 3;
        break;
      case 'mobile':
        newPerPage = 4;
        break;
      default:
        // newPerPage = 3; // значение по умолчанию
        newPerPage = 4; // значение по умолчанию
        break;
    }
    setPerPage(newPerPage);
  }

  useEffect(() => {
    // default init state for get filter blogs data
    changePerPage();
    setChosenCategory();
    setCurrentPage(1);
    getFilterBlogs(language, chosenCategory, perPage, currentPage);
  }, []);

  useEffect(() => {
    if (news_name) {
      getBlog(news_name, language);
    }
  }, [news_name]);

  function convertionDate(dataStr) {
    const date = new Date(dataStr);

    // Извлечение дня, месяца и года
    const day = date.getDate();
    const month = date.getMonth() + 1; // Месяцы начинаются с 0, поэтому добавляем 1
    const year = date.getFullYear();

    // Формирование строки в нужном формате
    const formattedDate = `${day < 10 ? `0${day}` : day}.${
      month < 10 ? `0${month}` : month
    }.${year}`;
    return formattedDate;
  }
  return (
    <StyledBlogPage>
      <GlobalContainer>
        <div className="blog-page">
          <Bredcrumbs section={sectionName}></Bredcrumbs>
          <div className="blog-page__content page">
            {blog && (
              <div key={blog.id} className="page__wrapper">
                {/* Page Header */}
                <div className="page__header">
                  <div className="page__header-text">
                    <div className="header-text__category">
                      <p className="category-text">{blog.category}</p>
                    </div>
                    <Title>
                      <h2 className="header-text__title">{blog.title}</h2>
                    </Title>
                  </div>
                  <div className="page__header-info">
                    <div className="info__date-block">
                      <svg
                        className="page__info-clock"
                        height="14px"
                        width="14px"
                      >
                        <use href={sprite + '#calendary'} />
                      </svg>
                      {convertionDate(blog.published_at)}
                    </div>
                    <div className="info__date-time">
                      <svg
                        className="page__info-clock"
                        height="14px"
                        width="14px"
                      >
                        <use href={sprite + '#watch-gray'} />
                      </svg>
                      {`${blog.reading_time_minutes} хвилин`}
                    </div>
                  </div>
                </div>
                <div className="page__body">
                  <img
                    className="page__img"
                    src={blog.image_url}
                    alt={blog.title}
                  />
                  <div
                    className="page__content"
                    dangerouslySetInnerHTML={{
                      __html: sanitizedContent,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="more-read">
          <Title>
            <h2>{t('Читайте також')}</h2>
          </Title>
          <div className="more-read__grid">
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
        </div>
      </GlobalContainer>

      <HelpRegisterSection
        animal="cat"
        title={t('Допомогти тваринам')}
        text={t('Задонать на корм для пухнастих улюблинців')}
        button={t('Детальніше')}
      />
      <GlobalContainer>
        <Promotions />
      </GlobalContainer>
    </StyledBlogPage>
  );
});

export default BlogDetailedCardPage;
