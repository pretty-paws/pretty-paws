import { observer } from 'mobx-react-lite';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const SaleAndNewBox = observer(({ setSearchParams, searchParams }) => {
  const [isNewChosen, setIsNewChosen] = useState(false);
  const [isSaleChosen, setIsSaleChosen] = useState(false);

  useEffect(() => {
    const promotional = searchParams.get('is_promotional') === '1';
    const newItem = searchParams.get('new') === '1';

    setIsSaleChosen(promotional);
    setIsNewChosen(newItem);
  }, [searchParams]);

  function handleQuery(name) {
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.set(name, `1`);
    setSearchParams(currentSearchParams.toString());
  }

  function deleteQuery(name) {
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.delete(name);
    setSearchParams(currentSearchParams.toString());
  }
  return (
    <div className="filter__sale-new-box">
      <div className="filter__sale-box">
        <p>Акційні товари</p>
        <label className="switch">
          <input
            checked={isSaleChosen}
            type="checkbox"
            onChange={e =>
              e.target.checked
                ? (setIsSaleChosen(true), handleQuery('is_promotional'))
                : (setIsSaleChosen(false), deleteQuery('is_promotional'))
            }
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="filter__sale-box">
        <p>Новинки</p>
        <label className="switch">
          <input
            checked={isNewChosen}
            type="checkbox"
            onChange={e =>
              e.target.checked
                ? (setIsNewChosen(true), handleQuery('new'))
                : (setIsNewChosen(false), deleteQuery('new'))
            }
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
});

export default SaleAndNewBox;
