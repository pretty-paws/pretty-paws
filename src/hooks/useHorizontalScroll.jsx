import { useRef, useState } from 'react';

const useHorizontalScroll = (step, speed, distance) => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizontalScroll = direction => {
    let scrollAmount = 0;
    const stepValue = direction === 'left' ? -step : step;

    const slideTimer = setInterval(() => {
      elementRef.current.scrollLeft += stepValue;
      scrollAmount += Math.abs(stepValue);

      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }

      if (elementRef.current.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return {
    elementRef,
    arrowDisable,
    handleHorizontalScroll,
  };
};

export default useHorizontalScroll;
