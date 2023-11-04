import { Link, Outlet, useParams } from 'react-router-dom';
import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { StyledCatalogList } from './CatalogList.styled';

const CatalogList = observer(() => {
  const { category } = useParams();
  const categoryNumber = category;

  const store = useStore();
  const {
    catalog: { animals, setCategoryName },
  } = store;

  if (!animals[category]) {
    return <div>Loading...</div>;
  }

  const categories = Object.values(animals[category - 1].categories);

  return (
    <StyledCatalogList>
      {categories.map(category => {
        return (
          <div key={category.title}>
            <h4 className="list__category-title">{category.title}</h4>
            <ul className="list__subcategories">
              {Object.entries(category.subcategories).map(subcategory => {
                return (
                  <Link
                    onClick={() => setCategoryName(category.title)}
                    key={subcategory[0]}
                    to={`/catalog/category/${categoryNumber}/subcategory/${subcategory[0]}`}
                  >
                    <li>{subcategory[1]}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        );
      })}
      <Outlet />
    </StyledCatalogList>
  );
});

export default CatalogList;
