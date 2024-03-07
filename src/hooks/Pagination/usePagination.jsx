// import { useEffect } from 'react';
// import { useState } from 'react';
import { useMemo } from 'react';
// import useWindowSize from '../useWindowSize';

// export const DOTS = '...';

// const range = (start, end) => {
//   let length = end - start + 1;
//   return Array.from({ length }, (_, idx) => idx + start);
// };

export const usePagination = ({ totalCount, pageSize }) => {
  // const { screen } = useWindowSize();
  // const [cardsAmount, setCardsAmount] = useState(8);
  // useEffect(() => {
  //   if (screen === 'mobile') {
  //     setCardsAmount(6);
  //   } else if (screen === 'tablet') {
  //     setCardsAmount(6);
  //   } else {
  //     setCardsAmount(8);
  //   }
  // }, [screen]);
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    console.log(totalPageCount, totalCount, pageSize);

    return Array.from({ length: totalPageCount }, (_, index) => index + 1);
  }, [totalCount, pageSize]);

  return paginationRange;
};
