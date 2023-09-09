import React from 'react';
import Hero from './hero/Hero';
import Promotions from './PromotionsWithDiscount/Promotions';
import { GlobalContainer } from '../../global/GlobalContainer';
import { StyledMain } from './Main.styled';
import HelpRegisterSection from './HelpRegisterSection/HelpRegisterSection';
import BrandsSection from './BrandsSection/BrandsSection';
const Main = () => {
  return (
    <StyledMain>
      <Hero />
      <GlobalContainer>
        <Promotions />
      </GlobalContainer>
      <HelpRegisterSection
        animal="dog"
        title="Стань своїм"
        text="Зареєструйся на сайті і отримай знижку 5% на перше замовлення.  Для своїх у нас безліч переваг"
        button="Зареєструйся"
      />
      <GlobalContainer>
        <BrandsSection />
      </GlobalContainer>
      <HelpRegisterSection
        animal="cat"
        title="Допомогти тваринам "
        text="Задонать на корм для пухнастих улюблинців"
        button="Детальніше"
      />
    </StyledMain>
  );
};

export default Main;
