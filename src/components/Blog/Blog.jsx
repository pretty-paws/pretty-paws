import React, { useEffect, useState } from 'react';
import CardBlog from '../SharedLayout/CardBlog/CardBlog';
import sprite from '../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/AuthProvider';
import { GlobalContainer } from '../../global/GlobalContainer';
import { StyledBlog } from '../Blog/Blog.styled';
import HelpRegisterSection from '../Main/HelpRegisterSection/HelpRegisterSection';
import Promotions from '../Main/PromotionsWithDiscount/Promotions';
import { useTranslation } from 'react-i18next';
import useWindowSize from '../../hooks/useWindowSize';
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
      //   function that get all categories
      getCategories,
      stateFilterBlog,
      //   function that get all news filtered by categories
      filterBlogs,
      getFilterBlogs,
      totalPages,
    },
  } = store;
  const [perPage, setPerPage] = useState(4);

  const [chosenCategory, setChosenCategory] = useState([]);

  const [activeLoadMore, setActiveLoadMore] = useState(false);

  //   click to filter category
  function handleFilterClick(categoryId) {
    const isCategoryChosen = chosenCategory.includes(categoryId);
    if (isCategoryChosen) {
      const newChosenCategory = [...chosenCategory];
      const index = newChosenCategory.indexOf(categoryId);
      newChosenCategory.splice(index, 1);
      setChosenCategory(newChosenCategory);
    } else {
      setChosenCategory(prevChosenCategory => [
        ...prevChosenCategory,
        categoryId,
      ]);
    }
  }
  //   const changePrePage = () => {
  //     switch (screen) {
  //       case 'mobile':
  //         setPerPage(4);
  //         break;
  //       case 'tablet':
  //         setPerPage(6);
  //         break;
  //       case 'desktop':
  //         setPerPage(8);
  //         break;

  //       //   default:
  //       //     setPerPage(4);
  //       //     break;
  //     }
  //   };

  const [currentPage, setCurrentPage] = useState(1);
  //   const [totalPage,setTotalPage] = useState(1);
  //   const [loadedPaf,setLoadedPage] = useState([]);

  // use effect for get information about categories and filtered news
  useEffect(() => {
    // changePrePage();
    getCategories(language);
    getFilterBlogs(language, chosenCategory, perPage, currentPage);
  }, [i18n.language]);

  useEffect(() => {
    // changePrePage();
    if (activeLoadMore) {
      getFilterBlogs(language, chosenCategory, perPage, currentPage);
      setActiveLoadMore(false);
    }
  }, [activeLoadMore]);

  useEffect(() => {
    // changePrePage();
    console.log('filter when change to get filter blogs ', chosenCategory);
    if (chosenCategory.length != 0) {
      setCurrentPage(1);
      screen === 'desktop' ? setPerPage(8) : setPerPage(4);
      getFilterBlogs(language, chosenCategory, perPage, currentPage);
    } else {
      setCurrentPage(1);
      getFilterBlogs(language, chosenCategory, perPage, currentPage);
    }
  }, [chosenCategory]);

  const emptyCategory = categories.find(
    category => category.id === chosenCategory[0]
  );
  if (emptyCategory != null && emptyCategory != undefined) {
    console.log('emptyCategory', emptyCategory.title);
  }
  //   const sanitizedDescription = DOMPurify.sanitize(short_description);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
    setActiveLoadMore(true);
  };

  return (
    <StyledBlog>
      <GlobalContainer>
        <div className="blog__block">
          <div className="blog__categories-block categories">
            <p
              className={`categories__item ${
                chosenCategory.length === 0 ? 'active' : ''
              }`}
              onClick={() => setChosenCategory([])}
            >
              Усі матеріали
            </p>
            {stateCategory === 'done'
              ? categories.map(({ id, title }) => {
                  return (
                    <p
                      key={id}
                      className={`categories__item ${
                        chosenCategory.includes(id) ? 'active' : ''
                      }`}
                      onClick={() => handleFilterClick(id)}
                    >
                      {title}
                    </p>
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
          {screen === 'desktop'
            ? currentPage < totalPages && (
                <div className="blog__pagination">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} className="pagination__btn">
                      <p className="pagination__item">{index + 1}</p>
                    </button>
                  ))}
                  <svg className="pagination__arrow" width="22px" height="22px">
                    <use href={sprite + '#arrow-black'} />
                  </svg>
                </div>
                /*{ <button className="pagination__btn">
                    <p className="pagination__item">1</p>
                  </button>
                  <button className="pagination__btn active-pag">
                    <p className="pagination__item">2</p>
                  </button>
                  <button className="pagination__btn">
                    <p className="pagination__item">3</p>
                  </button> */
                /* <div className="blog__pagination">
				
                  

                  <svg className="pagination__arrow" width="22px" height="22px">
                    <use href={sprite + '#arrow-black'} />
                  </svg>
                </div> */
              )
            : currentPage < totalPages && (
                <button className="blog__more-btn" onClick={handleLoadMore}>
                  Завантажити ще
                </button>
              )}
        </div>

        {/* <div>
          {stateFilterBlog === 'done'
            ? filterBlogs.map(
                ({ id, content }) => {
                  return (
                    <div
                      key={id}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content),
                      }}
                    />
                  );
                }
                // ({
                //   id,
                //   title,
                //   short_description,
                //   content,
                //   image_url,
                //   category,
                //   slug,
                //   reading_time_minutes,
                //   //   published_at,
                // }) => {
                //   return <div></div>;
                // }
              )
            : null}
        </div> */}
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
