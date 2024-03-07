import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../src/img/svg-sprite/sprite.svg';

// import classnames from 'classnames';
import { usePagination } from './usePagination';
import { StyledPagination } from './Pagination.styled';
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
    if (currentPage < totalCount) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <StyledPagination
      className={('pagination-container', { [className]: className })}
    >
      <li
        className={
          currentPage === 1 ? 'pagination-item disabled' : 'pagination-item'
        }
        // disabled={currentPage === 1}
        onClick={onPrevious}
      >
        <div>
          <svg className="pagination__arrow-back" width="22px" height="22px">
            <use href={sprite + '#long_arrow'} />
          </svg>
        </div>
      </li>
      {paginationRange.map(pageNumber => (
        <li
          key={pageNumber}
          className={
            pageNumber === currentPage
              ? 'pagination-item selected'
              : 'pagination-item'
          }
          // selected={pageNumber === currentPage}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </li>
      ))}
      <li
        className={
          currentPage === lastPage
            ? 'pagination-item disabled'
            : 'pagination-item'
        }
        // disabled={currentPage === lastPage}
        onClick={onNext}
      >
        <div>
          <svg className="pagination__arrow-prev" width="22px" height="22px">
            <use href={sprite + '#long_arrow'} />
          </svg>
        </div>
      </li>
    </StyledPagination>
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
