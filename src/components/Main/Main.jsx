import React from 'react';
import Hero from './hero/Hero';
import Promotions from './PromotionsWithDiscount/Promotions';
import { GlobalContainer } from '../../global/GlobalContainer';
import { StyledMain } from './Main.styled';
import HelpRegisterSection from './HelpRegisterSection/HelpRegisterSection';
import BrandsSection from './BrandsSection/BrandsSection';
import Blog from './Blog/Blog';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();

  return (
    <StyledMain>
      <Hero />
      <GlobalContainer>
        <Promotions />
      </GlobalContainer>
      <HelpRegisterSection
        animal="dog"
        title={t('Стань своїм')}
        text={t(
          'Зареєструйся на сайті і отримай знижку 5% на перше замовлення.  Для своїх у нас безліч переваг'
        )}
        button={t('Зареєструйся')}
      />
      <GlobalContainer>
        <BrandsSection />
      </GlobalContainer>
      <HelpRegisterSection
        animal="cat"
        title={t('Допомогти тваринам')}
        text={t('Задонать на корм для пухнастих улюблинців')}
        button={t('Детальніше')}
      />
      <GlobalContainer>
        <Blog></Blog>
      </GlobalContainer>
    </StyledMain>
  );
};

export default Main;
