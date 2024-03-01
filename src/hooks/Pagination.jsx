import React from 'react';
import PropTypes from 'prop-types';

// import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
// import './pagination.css';
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={('pagination-container', { [className]: className })}>
      <li
        className={
          ('pagination-item',
          {
            disabled: currentPage === 1,
          })
        }
        onClick={onPrevious}
      >
        <div>prev</div>
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={pageNumber}
            className={
              ('pagination-item',
              {
                selected: pageNumber === currentPage,
              })
            }
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={
          ('pagination-item',
          {
            disabled: currentPage === lastPage,
          })
        }
        onClick={onNext}
      >
        <div>next</div>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Pagination;
