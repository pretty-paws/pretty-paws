import { useTranslation } from 'react-i18next';
import { StyledWishList } from './WishList.styled';
import CabinetTitle from '../PersonalData/CabinetTitle/CabinetTitle';
import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import CardProduct from '../../SharedLayout/CardProduct/CardProduct';
import useHorizontalScroll from '../../../hooks/useHorizontalScroll';
import sprite from '../../../img/svg-sprite/sprite.svg';
import useWindowSize from '../../../hooks/useWindowSize';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UseSkeleton } from '../../../hooks/useSkeleton';

const WishList = observer(() => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();

  const { elementRef, arrowDisable, handleHorizontalScroll } =
    useHorizontalScroll(30, 12, 600);

  const store = useStore();
  const {
    auth: { language, favouritesArray, state },
    favourite: {
      favourite,
      getFavProductByID,
      resetFavouriteProducts,
      favState,
    },
  } = store;
  const areFavourites = favouritesArray || null;

  console.log('favstate', favState, favourite);

  useEffect(() => {
    if (favouritesArray.length === 0) resetFavouriteProducts();
    favouritesArray.map(id => {
      getFavProductByID(id, language);
    });
  }, [language, favouritesArray]);

  return (
    <>
      {favState === 'pending' ? (
        <StyledWishList noWhiteBG={areFavourites}>
          <CabinetTitle
            header={
              areFavourites ? t('Мої улюблені товари') : t('Список бажань')
            }
          />
          <div className="wishlist__skeleton">
            <UseSkeleton
              screen={screen}
              cardsAmount={favouritesArray.length || 3}
            />
          </div>
        </StyledWishList>
      ) : (
        <StyledWishList noWhiteBG={areFavourites}>
          <CabinetTitle
            header={
              areFavourites ? t('Мої улюблені товари') : t('Список бажань')
            }
          />

          {favouritesArray.length > 2 && screen === 'desktop' && (
            <>
              <div
                className="left-arrow"
                onClick={() => handleHorizontalScroll('left')}
                disabled={arrowDisable}
              >
                <svg width=" 24px" height=" 24px">
                  <use href={sprite + '#arrow-down'} />
                </svg>
              </div>
              <div
                className="right-arrow"
                onClick={() => handleHorizontalScroll('right')}
              >
                <svg width=" 24px" height=" 24px">
                  <use href={sprite + '#arrow-down'} />
                </svg>
              </div>
            </>
          )}
          <div className="wishList__favourite-container" ref={elementRef}>
            {favState === 'done' &&
              favourite.map(
                ({
                  id,
                  title,
                  description,
                  image_url,
                  slug,
                  price,
                  promotional_price,
                  is_promotional,
                  quantity,
                  country,
                  brand,
                  category,
                  animal,
                  subcategory,
                  short_description,
                }) => {
                  return (
                    <CardProduct
                      key={id}
                      id={id}
                      slug={slug}
                      title={title}
                      description={description}
                      image_url={image_url}
                      price={price}
                      promotional_price={promotional_price}
                      is_promotional={is_promotional}
                      quantity={quantity}
                      country={country}
                      brand={brand}
                      category={category}
                      animal={animal}
                      subcategory={subcategory}
                      short_description={short_description}
                    />
                  );
                }
              )}
          </div>

          {favouritesArray.length === 0 &&
            state === 'done' &&
            favState === 'done' && (
              <>
                <div className="wishlist__body">
                  <p className="wishlist__text">
                    {t(
                      'Поки що ви не оформили підписку на акції від PrettyPaws.'
                    )}
                  </p>
                  <Link to="/catalog">
                    <button type="button" className="wishlist__button">
                      {t('До каталогу')}
                    </button>
                  </Link>
                </div>
              </>
            )}
        </StyledWishList>
      )}
    </>
  );
});

export default WishList;
