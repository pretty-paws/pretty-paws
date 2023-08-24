import { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState();

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  let screen;

  if (Number(size) < 834) screen = 'mobile';
  if (Number(size) >= 834 && Number(size) < 1440) screen = 'tablet';
  if (Number(size) >= 1440) screen = 'desktop';

  return { screen };
};

export default useWindowSize;
