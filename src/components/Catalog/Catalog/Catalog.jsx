import React, { useEffect } from 'react';
import { useStore } from '../../../store/AuthProvider';
// import { GlobalContainer } from '../../global/GlobalContainer';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledCatalog } from './Catalog.styled';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
// import FilterPage from './FilterPage/FilterPage';

const Catalog = observer(() => {
  // const [filterPage, setFilterPage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const store = useStore();
  const {
    auth: { language },
    catalog: {
      getAnimals,
      animals,
      setAnimalName,
      setAnimalSlug,
      getSubcategories,
    },
  } = store;

  useEffect(() => {
    getAnimals(language);
    getSubcategories(language);
  }, [language]);

  useEffect(() => {
    if (location.pathname === '/catalog/animal') {
      setAnimalName('Коти');

      navigate('/catalog/animal/cats', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <StyledCatalog>
      <ul className="catalog__animal-categories">
        {animals?.length !== 0
          ? animals.map(animal => {
              return (
                <NavLink
                  onClick={() => {
                    setAnimalName(animal.title);
                    setAnimalSlug(animal.slug);
                  }}
                  key={animal.id}
                  to={`/catalog/animal/${animal.slug}`}
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

      <Outlet />
    </StyledCatalog>
  );
});

export default Catalog;
