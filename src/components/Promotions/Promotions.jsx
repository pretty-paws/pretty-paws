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

// let PageSize = 8;

const Promotions = observer(() => {
  const { t } = useTranslation();
  const [animal, setAnimal] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cardsAmount, setCardsAmount] = useState(8);

  const { screen } = useWindowSize();

  const store = useStore();
  const {
    catalog: { state, saleProducts, getFilteredSaleProducts },
  } = store;
  // console.log('newProducts', saleProducts.length);

  useEffect(() => {
    setLoading(true);
    getFilteredSaleProducts(animal, 'ua', 'is_promotional=1').then(() => {
      setLoading(false);
    });
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
                  />
                ) : (
                  <MobileCardProduct
                    key={id}
                    id={id}
                    title={title}
                    short_description={short_description}
                    // description={description}
                    image_url={image_url}
                    // slug={slug}
                    price={price}
                    promotional_price={promotional_price}
                    is_promotional={is_promotional}
                    is_new={is_new}
                    quantity={quantity}
                    country={country}
                    // brand={brand}
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
