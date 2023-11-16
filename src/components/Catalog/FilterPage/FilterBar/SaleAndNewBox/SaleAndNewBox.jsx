import { observer } from 'mobx-react-lite';
import React from 'react';

const SaleAndNewBox = observer(
  ({ setIsNewChosen, setIsSaleChosen, setSearchParams, searchParams }) => {
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
              type="checkbox"
              onChange={e =>
                e.target.checked
                  ? (setIsSaleChosen('&is_promotional=1'),
                    handleQuery('is_promotional'))
                  : (setIsSaleChosen(''), deleteQuery('is_promotional'))
              }
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="filter__sale-box">
          <p>Новинки</p>
          <label className="switch">
            <input
              type="checkbox"
              onChange={e =>
                e.target.checked
                  ? (setIsNewChosen('&new=1'), handleQuery('new'))
                  : (setIsNewChosen(''), deleteQuery('new'))
              }
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    );
  }
);

export default SaleAndNewBox;
