import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { useStore } from '../../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { StyledBreadcrumbs } from './Breadcrumbs.styled';
import { useTranslation } from 'react-i18next';

const Breadcrumbs = observer(({ page }) => {
  const { t } = useTranslation();
  const store = useStore();
  const {
    catalog: { animalName, categoryName, animalSlug, productById },
  } = store;

  return (
    <StyledBreadcrumbs>
      <>
        <NavLink
          to={`/catalog/animal/${animalSlug}`}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span className="filter__breadcrumbs__page">{t('Каталог')}</span>
        </NavLink>
        <div className="arrow-container">
          <svg className="filter-arrow" width="24px" height="24px">
            <use href={sprite + '#arrow-gray'} />
          </svg>
        </div>
        <Link to={`/catalog/animal/${animalSlug}`}>
          <span className="filter__breadcrumbs__animal">{t(animalName)}</span>
        </Link>
        <div className="arrow-container">
          <svg className="filter-arrow" width="24px" height="24px">
            <use href={sprite + '#arrow-gray'} />
          </svg>
        </div>
        <Link
          to={`/catalog/animal/${animalSlug}`}
          className={page === 'filter' ? 'active' : 'filter__breadcrumbs'}
        >
          <span>
            {categoryName
              ? t(categoryName)
              : t(localStorage.getItem('categoryName'))}
          </span>
        </Link>
        {productById !== undefined && page === 'product' ? (
          <>
            <div className="arrow-container">
              <svg className="filter-arrow" width="24px" height="24px">
                <use href={sprite + '#arrow-gray'} />
              </svg>
            </div>
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
            <div className="arrow-container">
              <svg className="filter-arrow" width="24px" height="24px">
                <use href={sprite + '#arrow-gray'} />
              </svg>
            </div>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="filter__breadcrumbs__product-name">
                {productById?.title}
              </span>
            </NavLink>
          </>
        ) : null}
      </>
      {/* ) : ( */}
      {/* <>
          <span
            className="filter__breadcrumbs__page"
            // onClick={() => setIsMenuVisible(true)}
          >
            Каталог
          </span>
          <svg className="filter-arrow" width="24px" height="24px">
            <use href={sprite + '#arrow-gray'} />
          </svg>
          <span className="filter__breadcrumbs__animal">
            {animalName ? animalName : localStorage.getItem('animalName')}
          </span>
          <svg className="filter-arrow" width="24px" height="24px">
            <use href={sprite + '#arrow-gray'} />
          </svg>
          <span>
            {categoryName ? categoryName : localStorage.getItem('categoryName')}
          </span>
          {productById !== undefined && page === 'product' ? (
            <>
              <svg className="filter-arrow" width="24px" height="24px">
                <use href={sprite + '#arrow-gray'} />
              </svg>

              <span className="filter__breadcrumbs">
                {productById.subcategory?.title}
              </span>

              <svg className="filter-arrow" width="24px" height="24px">
                <use href={sprite + '#arrow-gray'} />
              </svg>

              <span className="filter__breadcrumbs__product-name">
                {productById?.title}
              </span>
            </>
          ) : null}
        </>
      )} */}
    </StyledBreadcrumbs>
  );
});

export default Breadcrumbs;
