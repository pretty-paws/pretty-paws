import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { useStore } from '../../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';

const Breadcrumbs = observer(() => {
  const store = useStore();
  const {
    catalog: { animalName, categoryName, animalSlug },
  } = store;

  return (
    <div className="filter-page__breadcrumbs">
      <Link to={`/catalog/animal/${animalSlug}`}>
        <span className="filter__breadcrumbs__page">Каталог товарів</span>
      </Link>
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
      <span>
        {categoryName ? categoryName : localStorage.getItem('categoryName')}
      </span>
    </div>
  );
});

export default Breadcrumbs;
