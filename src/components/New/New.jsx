import React from 'react';
import { GlobalContainer } from '../../global/GlobalContainer';
import { useStore } from '../../store/AuthProvider';
import CardProduct from '../SharedLayout/CardProduct/CardProduct';
import AnimalsBar from '../SharedLayout/AnimalsBar/AnimalsBar';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { NewProductsContainer } from './New.styled';
import Pagination from '../../hooks/Pagination';

let PageSize = 6;

const New = observer(() => {
  const { t } = useTranslation();
  const [animal, setAnimal] = useState(1);

  const store = useStore();
  const {
    catalog: { state, newProducts, getFilteredNewProducts },
  } = store;
  console.log('newProducts', newProducts.length);

  useEffect(() => {
    getFilteredNewProducts(animal, 'ua', 'new=1');
  }, [animal]);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = () => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return newProducts.slice(firstPageIndex, lastPageIndex);
  };

  return (
    <GlobalContainer>
      <NewProductsContainer>
        <h2>{t('Новинки')}</h2>
        <div className="promotion-animals-bar">
          <AnimalsBar type={'section'} setAnimal={setAnimal} animal={animal} />
        </div>
        <div className="card-list">
          {state === 'done' &&
            currentTableData().map(
              ({
                id,
                title,
                short_description,
                description,
                image_url,
                slug,
                price,
                promotional_price,
                is_promotional,
                is_new,
                quantity,
                country,
                brand,
              }) => {
                return (
                  <CardProduct
                    key={id}
                    id={id}
                    title={title}
                    short_description={short_description}
                    description={description}
                    image_url={image_url}
                    slug={slug}
                    price={price}
                    promotional_price={promotional_price}
                    is_promotional={is_promotional}
                    is_new={is_new}
                    quantity={quantity}
                    country={country}
                    brand={brand}
                  />
                );
              }
            )}
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={newProducts.length}
          pageSize={6}
          onPageChange={page => setCurrentPage(page)}
        />
      </NewProductsContainer>
    </GlobalContainer>
  );
});

export default New;
