import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const UseSkeleton = observer(({ screen, cardsAmount, page }) => {
  const [cardsWidth, setCardsWidth] = useState(267);
  const [cardsHeight, setCardsHeight] = useState(486);

  useEffect(() => {
    if (screen === 'mobile' && page !== 'main') {
      setCardsWidth(343);
      setCardsHeight(254);
      page === 'comparison' && setCardsHeight(412);
      page === 'cart' && (setCardsHeight(160), setCardsWidth(343));
      page === 'orderDetails' && (setCardsHeight(76), setCardsWidth(311));
    } else if (screen === 'tablet') {
      setCardsWidth(241);
      setCardsHeight(486);
      page === 'comparison' && setCardsHeight(487);
      page === 'cart' && (setCardsHeight(112), setCardsWidth(754));
      page === 'orderDetails' && (setCardsHeight(76), setCardsWidth(722));
    } else {
      setCardsWidth(267);
      setCardsHeight(486);
      page === 'comparison' && (setCardsHeight(511), setCardsWidth(177));
      page === 'cart' && (setCardsHeight(140), setCardsWidth(655));
      page === 'orderDetails' && (setCardsHeight(82), setCardsWidth(373));
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
