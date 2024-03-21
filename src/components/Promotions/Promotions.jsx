import { observer } from 'mobx-react-lite';
import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useWindowSize from '../../hooks/useWindowSize';
import { useStore } from '../../store/AuthProvider';
import { useEffect } from 'react';
import { GlobalContainer } from '../../global/GlobalContainer';
import AnimalsBar from '../SharedLayout/AnimalsBar/AnimalsBar';
import CardProduct from '../SharedLayout/CardProduct/CardProduct';
import MobileCardProduct from '../SharedLayout/MobileCardProduct/MobileCardProduct';
import Pagination from '../../hooks/Pagination/Pagination';
import { UseSkeleton } from '../../hooks/useSkeleton';
import { NewProductsContainer } from '../New/New.styled';

const Promotions = observer(() => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();

  const store = useStore();
  const {
    auth: { language },
    catalog: { state, saleProducts, getFilteredSaleProducts, animalID },
  } = store;

  const [animal, setAnimal] = useState(Number(animalID) || 1);
  const [loading, setLoading] = useState(false);
  const [cardsAmount, setCardsAmount] = useState(Number(8));
  useEffect(() => {
    setLoading(true);
    getFilteredSaleProducts(animal, language, 'is_promotional=1').then(() => {
      setLoading(false);
    });
    setCurrentPage(1);
  }, [animal, language]);

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
    return saleProducts.slice(firstPageIndex, lastPageIndex);
  };

  return (
    <GlobalContainer>
      <NewProductsContainer>
        <h2 className="title">{t('Акції')}</h2>
        <div className="promotion-animals-bar">
          <AnimalsBar
            type={'section'}
            setAnimal={setAnimal}
            animal={animal}
            component={'promotions'}
          />
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
                subcategory,
                category,
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
                    animal={animal}
                    subcategory={subcategory}
                    category={category}
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
                    animal={animal}
                    subcategory={subcategory}
                    category={category}
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
            totalCount={saleProducts.length}
            pageSize={cardsAmount}
            onPageChange={page => setCurrentPage(page)}
          />
        )}
      </NewProductsContainer>
    </GlobalContainer>
  );
});

export default Promotions;
