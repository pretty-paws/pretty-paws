import React, { useEffect, useState } from 'react';
import sprite from '../../../../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';

const Price = observer(
  ({
    filters,
    setIsPriceChosen,
    setShowFilterBox,
    showFilterBox,
    setSearchParams,
    searchParams,
  }) => {
    const [isMinChosen, setIsMinChosen] = useState(
      `&price_min=${filters.prices[0]}`
    );
    const [isMaxChosen, setIsMaxChosen] = useState(
      `&price_max=${filters.prices[1]}`
    );

    const [priceRange, setPriceRange] = useState({
      min: filters.prices[0],
      max: filters.prices[1],
    });

    useEffect(() => {
      setIsPriceChosen(isMinChosen + isMaxChosen);
    }, [isMinChosen, isMaxChosen]);

    if (!filters || !filters.prices) {
      return <div>Loading...</div>;
    }
    // console.log(setIsPriceChosen);

    return (
      <div>
        <div
          className="filter__price-box"
          onClick={() =>
            setShowFilterBox(prevState => ({
              ...prevState,
              price: !prevState.price,
            }))
          }
        >
          <p>Ціна</p>
          <svg
            className={
              showFilterBox.price
                ? 'filter__price-arrow'
                : 'filter__price-arrow-hide'
            }
            width="24px"
            height="24px"
          >
            <use href={sprite + '#arrow-black'} />
          </svg>
        </div>
        {showFilterBox.price && (
          <div className="filter__min-max">
            <div>
              <label className="filter__min-label">Min</label>
              <input
                name="min"
                onChange={e => {
                  const value = e.currentTarget.value;
                  setIsMinChosen(`&price_min=${value}`);
                  setPriceRange(prev => ({
                    ...prev,
                    min: value,
                  }));
                  const currentSearchParams = new URLSearchParams(searchParams);
                  currentSearchParams.set('price_min', value);
                  currentSearchParams.set('price_max', priceRange.max);
                  setSearchParams(currentSearchParams.toString());
                  // setSearchParams(
                  //   `price_min=${e.currentTarget.value}&price_max=${priceRange.max}`
                  // );
                }}
                className="filter__min-input"
                type="number"
                defaultValue={filters.prices[0]}
              />
            </div>
            <div>
              <label className="filter__max-label">Max</label>
              <input
                name="max"
                onChange={e => {
                  const value = e.currentTarget.value;
                  setIsMaxChosen(`&price_max=${value}`);
                  setPriceRange(prev => ({
                    ...prev,
                    max: value,
                  }));

                  const currentSearchParams = new URLSearchParams(searchParams);
                  currentSearchParams.set('price_max', value);
                  currentSearchParams.set('price_min', priceRange.min);
                  setSearchParams(currentSearchParams.toString());
                  // setSearchParams(
                  //   `price_min=${priceRange.min}&price_max=${value}`
                  // );
                }}
                className="filter__max-input"
                type="number"
                defaultValue={filters.prices[1]}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default Price;
