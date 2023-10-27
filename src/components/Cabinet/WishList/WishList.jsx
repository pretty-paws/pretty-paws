import { useTranslation } from 'react-i18next';
import { StyledWishList } from './WishList.styled';
import CabinetTitle from '../PersonalData/CabinetTitle/CabinetTitle';
import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import CardProduct from '../../SharedLayout/CardProduct/CardProduct';
import useHorizontalScroll from '../../../hooks/useHorizontalScroll';
import sprite from '../../../img/svg-sprite/sprite.svg';

const WishList = observer(() => {
  const { t } = useTranslation();

  const { elementRef, arrowDisable, handleHorizontalScroll } =
    useHorizontalScroll(30, 12, 600);

  const store = useStore();
  const {
    auth: { user },
  } = store;
  const areFavourites = user.favorites?.length || null;

  return (
    <StyledWishList noWhiteBG={areFavourites}>
      <CabinetTitle header={'Список бажань'} />
      {user.favorites && user.favorites.length !== 0 ? (
        <div>
          {user.favorites.length > 2 && (
            <>
              <button
                className="left-arrow"
                onClick={() => handleHorizontalScroll('left')}
                disabled={arrowDisable}
              >
                <svg width=" 24px" height=" 24px">
                  <use href={sprite + '#arrow-down'} />
                </svg>
              </button>
              <button
                className="right-arrow"
                onClick={() => handleHorizontalScroll('right')}
              >
                <svg width=" 24px" height=" 24px">
                  <use href={sprite + '#arrow-down'} />
                </svg>
              </button>
            </>
          )}
          <div className="wishList__favourite-container" ref={elementRef}>
            {user.favorites.map(
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
              }) => {
                return (
                  <CardProduct
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    image_url={image_url}
                    slug={slug}
                    price={price}
                    promotional_price={promotional_price}
                    is_promotional={is_promotional}
                    quantity={quantity}
                    country={country}
                    brand={brand}
                  />
                );
              }
            )}
          </div>
        </div>
      ) : (
        <>
          {/* <CabinetTitle header={'Список бажань'} /> */}
          <div className="wishlist__body">
            <p className="wishlist__text">
              {t('Поки що ви не оформили підписку на акції від PrettyPaws.')}
            </p>
            <button type="button" className="wishlist__button">
              {t('До каталогу')}
            </button>
          </div>
        </>
      )}
    </StyledWishList>
  );
});

export default WishList;
