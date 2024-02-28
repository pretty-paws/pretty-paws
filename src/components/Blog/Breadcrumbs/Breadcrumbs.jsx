import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { StyledBreadcrumbs } from './Breadcrumbs.styled';
import { useTranslation } from 'react-i18next';

// const Breadcrumbs = observer(({ page }) => {
const Breadcrumbs = observer(({ section }) => {
  const { i18n, t } = useTranslation();

  const store = useStore();
  const {
    blog: { categories, getCategories, nameBlog, categoryBlog },
  } = store;

  useEffect(() => {
    getCategories(i18n.language);
  }, [i18n.language]);

  //   id category for bredcrumbs category
  const idCategory = categories.find(category =>
    category.title === categoryBlog ? category.id : ''
  );

  return (
    <StyledBreadcrumbs>
      <NavLink
        to={`/blog`}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <span className="breadcrumbs__page">{t(section)}</span>
      </NavLink>
      <svg className="filter-arrow" width="24px" height="24px">
        <use href={sprite + '#arrow-gray'} />
      </svg>
      {/*  */}
      <Link
        state={{ from: '/blog/news' }}
        to={{
          pathname: `/blog/news/`,
          search: `?page=1&per_page=4&categories[0]=${idCategory?.id}`,
        }}
      >
        <span className="breadcrumbs__animal">
          {categoryBlog ? categoryBlog : localStorage.getItem('categoryBlog')}
        </span>
      </Link>
      <svg className="filter-arrow" width="24px" height="24px">
        <use href={sprite + '#arrow-gray'} />
      </svg>
      <div className="breadcrumbs__product-name">
        <span>{nameBlog ? nameBlog : localStorage.getItem('nameBlog')}</span>
      </div>
    </StyledBreadcrumbs>
  );
});

export default Breadcrumbs;
