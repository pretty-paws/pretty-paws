import { Link, Outlet, useParams } from 'react-router-dom';
import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { StyledCatalogList } from './CatalogList.styled';

const CatalogList = observer(() => {
  const { animalName } = useParams();

  const store = useStore();
  const {
    catalog: {
      animals,
      setCategoryName,
      setCategorySlug,
      setCategoryID,
      setSubcategoryID,
    },
  } = store;

  const chosenAnimal = animals.find(animal => {
    if (animal.slug === animalName) return animal;
  });

  if (!chosenAnimal) {
    return <div>Loading...</div>;
  }

  const categories = Object.values(chosenAnimal.categories);

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
                    state={{ from: '/catalog/animal' }}
                    onClick={() => {
                      setCategoryName(category.title);
                      setCategorySlug(category.slug);
                      setCategoryID(category.id);
                      setSubcategoryID(subcategory[0]);
                    }}
                    key={subcategory[0]}
                    to={`/catalog/animal/${chosenAnimal.slug}/category/${category.slug}`}
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
