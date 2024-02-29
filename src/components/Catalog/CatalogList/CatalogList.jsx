import { Link, Outlet, useParams, useSearchParams } from 'react-router-dom';
import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { StyledCatalogList } from './CatalogList.styled';

const CatalogList = observer(() => {
  const { animalName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams({});

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

  function handleSubcategoryClick(category, subcategory) {
    setCategoryName(category.title);
    setCategorySlug(category.slug);
    setCategoryID(category.id);
    setSubcategoryID(subcategory.id);
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.set('subcategories', subcategory.slug);
    setSearchParams(currentSearchParams);
  }

  return (
    <StyledCatalogList>
      {categories.map(category => {
        return (
          <div key={category.title} className="list__category-box">
            <h4 className="list__category-title">{category.title}</h4>
            <ul className="list__subcategories">
              {category.subcategories.map(subcategory => {
                return (
                  <Link
                    state={{ from: '/catalog/animal' }}
                    onClick={() => {
                      handleSubcategoryClick(category, subcategory);

                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }}
                    key={subcategory.id}
                    to={{
                      pathname: `/catalog/animal/${chosenAnimal.slug}/category/${category.slug}`,
                      search: `?subcategories=${subcategory.slug}`,
                    }}
                  >
                    <li>{subcategory.title}</li>
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
