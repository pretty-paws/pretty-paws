import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const UseSkeleton = observer(({ screen, cardsAmount, page }) => {
  // const [cardAmount, setCardsAmount] = useState(0);
  const [cardsWidth, setCardsWidth] = useState(267);
  const [cardsHeight, setCardsHeight] = useState(486);

  useEffect(() => {
    if (screen === 'mobile' && page !== 'main') {
      // setCardsAmount(new Array(3));
      setCardsWidth(343);
      setCardsHeight(254);
    } else if (screen === 'tablet') {
      // setCardsAmount(new Array(6));
      setCardsWidth(241);
      setCardsHeight(486);
    } else {
      // setCardsAmount(new Array(8));
      setCardsWidth(267);
      setCardsHeight(486);
    }
  }, [screen]);

  return Array.from({ length: cardsAmount }, (_, index) => (
    <Skeleton
      key={index}
      width={cardsWidth}
      height={cardsHeight}
      baseColor="#f3f3f3"
      highlightColor="#ffffff"
    />
  ));
});
