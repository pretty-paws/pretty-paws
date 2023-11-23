import React, { useEffect, useState } from 'react';
import sprite from '../../../../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';

const Price = observer(
  ({
    filters,
    setShowFilterBox,
    showFilterBox,
    setSearchParams,
    searchParams,
  }) => {
    const [isMinChosen, setIsMinChosen] = useState(``);
    const [isMaxChosen, setIsMaxChosen] = useState(``);

    useEffect(() => {
      const minPrice =
        searchParams.get('price_min') || filters.prices[0].toString();
      const maxPrice =
        searchParams.get('price_max') || filters.prices[1].toString();

      setIsMinChosen(minPrice);
      setIsMaxChosen(maxPrice);
    }, [searchParams, filters.prices]);

    const handleMinPrice = value => {
      setIsMinChosen(value);
      const currentSearchParams = new URLSearchParams(searchParams);
      currentSearchParams.set('price_min', value);
      setSearchParams(currentSearchParams);
    };

    const handleMaxPrice = value => {
      setIsMaxChosen(value);
      const currentSearchParams = new URLSearchParams(searchParams);
      currentSearchParams.set('price_max', value);
      setSearchParams(currentSearchParams);
    };

    if (!filters || !filters.prices) {
      return <div>Loading...</div>;
    }

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
                onChange={e => handleMinPrice(e.currentTarget.value)}
                className="filter__min-input"
                type="number"
                value={isMinChosen}
              />
            </div>
            <div>
              <label className="filter__max-label">Max</label>
              <input
                name="max"
                onChange={e => handleMaxPrice(e.currentTarget.value)}
                className="filter__max-input"
                type="number"
                value={isMaxChosen}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default Price;
