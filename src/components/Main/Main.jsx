import React from 'react';
import Hero from './hero/Hero';
import Promotions from './PromotionsWithDiscount/Promotions';
import { GlobalContainer } from '../../global/GlobalContainer';
import { StyledMain } from './Main.styled';
import HelpRegisterSection from './HelpRegisterSection/HelpRegisterSection';
import BrandsSection from './BrandsSection/BrandsSection';
import Blog from './Blog/Blog';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/AuthProvider';

const Main = observer(() => {
  const { t } = useTranslation();
  const store = useStore();
  const {
    auth: { authorised },
  } = store;

  return (
    <StyledMain>
      <Hero />
      <GlobalContainer>
        <Promotions
          query="is_promotional=1"
          title={t('Пропозиції зі знижкою')}
        />
      </GlobalContainer>
      <HelpRegisterSection
        animal="dog"
        title={authorised ? t('Pretty Paws') : t('Стань своїм')}
        text={
          authorised
            ? t(
                'Забезпечте своїх улюбленців якісними товарами за доступними цінами. Бо вони заслуговують найкращого!'
              )
            : t(
                'Зареєструйся на сайті і отримай знижку 5% на перше замовлення.  Для своїх у нас безліч переваг'
              )
        }
        button={authorised ? t('До каталогу') : t('Зареєструйся')}
      />
      z
      <GlobalContainer>
        <BrandsSection />
        <Promotions query="new=1" title={t('Новинки')} />
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
});

export default Main;
