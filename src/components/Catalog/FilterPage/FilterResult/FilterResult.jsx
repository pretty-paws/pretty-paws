import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../../store/AuthProvider';
import CardProduct from '../../../SharedLayout/CardProduct/CardProduct';
import { StyledFilterResults } from './FilterResult.styled';
import useWindowSize from '../../../../hooks/useWindowSize';
import MobileCardProduct from '../../../SharedLayout/MobileCardProduct/MobileCardProduct';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FilterResult = observer(() => {
  const { t } = useTranslation();

  const { screen } = useWindowSize();
  const store = useStore();
  const {
    auth: { language },
    catalog: {
      filteredProducts,
      state,
      resetedFilter,
      saleProducts,
      getFilteredSaleProducts,
      searchQuery,
      getFilteredProducts,
      categoryID,
    },
  } = store;

  useEffect(() => {
    resetedFilter && getFilteredSaleProducts(1, language, 'is_promotional=1');
  }, [resetedFilter, language]);

  useEffect(() => {
    searchQuery !== '' &&
      resetedFilter !== false &&
      getFilteredProducts(categoryID, language, searchQuery);
  }, [searchQuery]);

  return (
    <StyledFilterResults>
      {state === 'done' && filteredProducts.length !== 0 ? (
        filteredProducts.map(
          ({
            id,
            title,
            description,
            short_description,
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
            return screen === 'mobile' ? (
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
            ) : (
              <CardProduct
                key={id}
                id={id}
                title={title}
                description={description}
                short_description={short_description}
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
      ) : resetedFilter && state === 'done' && filteredProducts.length === 0 ? (
        <div className="filter-reset">
          <p className="filter-result__no-products">
            {t(
              'Фільтри скинуто. Для відображення товарів необхідно зробити вибір.'
            )}
          </p>
          <h3 className="filter-result__no-products-title">
            {t('Акційні товари')}
          </h3>
          <div className="filter__sale-products">
            {saleProducts
              .slice(0, 3)
              .map(
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
                      category={category}
                      animal={animal}
                      subcategory={subcategory}
                    />
                  );
                }
              )}
          </div>
          <div className="filter__button-container">
            <Link to="/promotions">
              <button
                type="button"
                className="filter_sale-button"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }
              >
                {t('Усі товари')}
              </button>
            </Link>
          </div>
        </div>
      ) : (
        state === 'done' && (
          <>
            <div className="filter-reset">
              <p className="filter-result__no-products">
                {t(
                  'На жаль, в обраній категорії поки що немає товарів, але ми працюємо над розширенням асортименту та незабаром додамо нові позиції.'
                )}
              </p>
              <h3 className="filter-result__no-products-title">
                {t('Акційні товари')}
              </h3>
              <div className="filter__sale-products">
                {saleProducts
                  .slice(0, 3)
                  .map(
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
                          category={category}
                          animal={animal}
                          subcategory={subcategory}
                        />
                      );
                    }
                  )}
              </div>
              <div className="filter__button-container">
                <Link to="/promotions">
                  <button
                    type="button"
                    className="filter_sale-button"
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      })
                    }
                  >
                    {t('Усі товари')}
                  </button>
                </Link>
              </div>
            </div>
          </>
        )
      )}
    </StyledFilterResults>
  );
});

export default FilterResult;
