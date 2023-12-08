import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { useStore } from '../../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { StyledBreadcrumbs } from './Breadcrumbs.styled';

const Breadcrumbs = observer(({ page }) => {
  const store = useStore();
  const {
    catalog: { animalName, categoryName, animalSlug, productById },
  } = store;
  return (
    <StyledBreadcrumbs>
      <NavLink
        to={`/catalog/animal/${animalSlug}`}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <span className="filter__breadcrumbs__page">Каталог</span>
      </NavLink>
      <svg className="filter-arrow" width="24px" height="24px">
        <use href={sprite + '#arrow-gray'} />
      </svg>
      <Link to={`/catalog/animal/${animalSlug}`}>
        <span className="filter__breadcrumbs__animal">
          {animalName ? animalName : localStorage.getItem('animalName')}
        </span>
      </Link>
      <svg className="filter-arrow" width="24px" height="24px">
        <use href={sprite + '#arrow-gray'} />
      </svg>
      <Link
        to={`/catalog/animal/${animalSlug}`}
        className={page === 'filter' ? 'active' : 'filter__breadcrumbs'}
      >
        <span>
          {categoryName ? categoryName : localStorage.getItem('categoryName')}
        </span>
      </Link>
      {productById !== undefined && page === 'product' ? (
        <>
          <svg className="filter-arrow" width="24px" height="24px">
            <use href={sprite + '#arrow-gray'} />
          </svg>
          <Link
            to={{
              pathname: `/catalog/animal/${animalSlug}/category/${productById.category?.slug}/`,
              search: `?subcategories=${productById.subcategory?.slug}`,
            }}
          >
            <span className="filter__breadcrumbs">
              {productById.subcategory?.title}
            </span>
          </Link>
          <svg className="filter-arrow" width="24px" height="24px">
            <use href={sprite + '#arrow-gray'} />
          </svg>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="filter__breadcrumbs__product-name">
              {productById?.title}
            </span>
          </NavLink>
        </>
      ) : null}
    </StyledBreadcrumbs>
  );
});

export default Breadcrumbs;
