import { useMemo } from 'react';

export const usePagination = ({ totalCount, pageSize }) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    return Array.from({ length: totalPageCount }, (_, index) => index + 1);
  }, [totalCount, pageSize]);

  return paginationRange;
};
