import { useParams } from 'react-router-dom';
import { useStore } from '../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { StyledCatalogList } from './CatalogList.styled';

const CatalogList = observer(() => {
  const { category } = useParams();

  const store = useStore();
  const {
    catalog: { animals },
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
              {Object.values(category.subcategories).map(subcategory => {
                return <li key={subcategory}>{subcategory}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </StyledCatalogList>
  );
});

export default CatalogList;
