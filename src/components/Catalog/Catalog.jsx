import React, { useEffect } from 'react';
import { useStore } from '../../store/AuthProvider';
import { GlobalContainer } from '../../global/GlobalContainer';
import sprite from '../../img/svg-sprite/sprite.svg';
import { StyledCatalog } from './Catalog.styled';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

const Catalog = observer(() => {
  const { t } = useTranslation();

  const location = useLocation();
  const store = useStore();
  const {
    catalog: { getAnimals, animals },
  } = store;
  useEffect(() => {
    getAnimals();
  }, []);
  return (
    <GlobalContainer>
      <StyledCatalog>
        <ul className="catalog__animal-categories">
          {animals?.length !== 0
            ? animals.map(animal => {
                return (
                  <NavLink
                    key={animal.id}
                    to={`/catalog/${animal.id}`}
                    className={({ isActive }) =>
                      isActive ? 'active-animal-category border' : 'border'
                    }
                  >
                    <li className="catalog__animal-item">
                      <div className="catalog__animal-picture-and-title">
                        <div className="catalog-animal-box">
                          <img src={animal.icon_url} alt={animal.title} />
                        </div>
                        <p>{animal.title}</p>
                      </div>
                      <svg className="catalog-arrow" width="24px" height="24px">
                        <use href={sprite + '#arrow-black'} />
                      </svg>
                    </li>
                  </NavLink>
                );
              })
            : null}
        </ul>

        <div className="catalog__list-box">
          {location.pathname === '/catalog' ? (
            <div>{t('Оберіть категорію')}</div>
          ) : (
            <Outlet />
          )}
        </div>
      </StyledCatalog>
    </GlobalContainer>
  );
});

export default Catalog;
