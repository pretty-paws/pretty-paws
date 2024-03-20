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
import Pagination from '../../hooks/Pagination/Pagination';
import useWindowSize from '../../hooks/useWindowSize';
import MobileCardProduct from '../SharedLayout/MobileCardProduct/MobileCardProduct';
import { UseSkeleton } from '../../hooks/useSkeleton';

const New = observer(() => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();

  const store = useStore();
  const {
    catalog: { state, newProducts, getFilteredNewProducts, animalID },
  } = store;

  const [animal, setAnimal] = useState(Number(animalID) || 1);
  const [loading, setLoading] = useState(false);
  const [cardsAmount, setCardsAmount] = useState(8);

  useEffect(() => {
    setLoading(true);
    getFilteredNewProducts(animal, 'ua', 'new=1').then(() => {
      setLoading(false);
    });
    setCurrentPage(1);
  }, [animal]);

  useEffect(() => {
    if (screen === 'mobile') {
      setCardsAmount(8);
    } else if (screen === 'tablet') {
      setCardsAmount(6);
    } else {
      setCardsAmount(8);
    }
  }, [screen]);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = () => {
    const firstPageIndex = (currentPage - 1) * cardsAmount;
    const lastPageIndex = firstPageIndex + cardsAmount;
    return newProducts.slice(firstPageIndex, lastPageIndex);
  };

  return (
    <GlobalContainer>
      <NewProductsContainer>
        <h2 className="title">{t('Новинки')}</h2>
        <div className="promotion-animals-bar">
          <AnimalsBar type={'section'} setAnimal={setAnimal} animal={animal} />
        </div>
        <div className="card-list">
          {state === 'done' ? (
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
                category,
                animal,
                subcategory,
              }) => {
                return screen !== 'mobile' ? (
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
                    category={category}
                    animal={animal}
                    subcategory={subcategory}
                  />
                ) : (
                  <MobileCardProduct
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
                    category={category}
                    animal={animal}
                    subcategory={subcategory}
                  />
                );
              }
            )
          ) : (
            <UseSkeleton screen={screen} cardsAmount={cardsAmount} />
          )}
          {loading && <UseSkeleton screen={screen} cardsAmount={cardsAmount} />}
        </div>

        {!loading && (
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={newProducts.length}
            pageSize={cardsAmount}
            onPageChange={page => setCurrentPage(page)}
          />
        )}
      </NewProductsContainer>
    </GlobalContainer>
  );
});

export default New;
