import React from 'react';
import ursa from '../../img/help/ursa.png';
import kind from '../../img/help/kind.png';
import uaAnimals from '../../img/help/uaanimals.png';
import homeless from '../../img/help/homeless.png';
import { StyledHelp } from './Help.styled';
import { GlobalContainer } from '../../global/GlobalContainer';
import Promotions from '../Main/PromotionsWithDiscount/Promotions';
import useWindowSize from '../../hooks/useWindowSize';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const links = {
  ursa: 'https://www.ursaua.com.ua/?gad=1&gclid=Cj0KCQjwj5mpBhDJARIsAOVjBdpFC9CyIcJuJhQsbRdD-os-B-aHS0niXifSLLqHa4HmBbh1zpojDFQaAg9tEALw_wcB',
  kind: 'https://good.od.ua/uk/',
  uaAnumals: 'https://uanimals.org/',
  happyPaw: 'https://happypaw.ua/ua',
};

const Help = () => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();
  return (
    <GlobalContainer>
      <StyledHelp>
        {screen === 'mobile' && (
          <h2 className="help__main-title">{t('Волонтерство')}</h2>
        )}
        <div className="section">
          <h3 className="help__title">{t('Як можна допомогти тваринам?')}</h3>
          <p>
            {t(
              'Ми закликаємо, давайте разом будувати гуманне суспільство, в якому поважають та захищають права тварин. Наша мета, щоб допомога бездомним тваринам стала звичною справою для кожного українця. Як людина може допомогти тваринам?'
            )}
          </p>
          <p>
            {t(
              'По-перше, варто звертати увагу на безпритульних тварин та допомагати їм.'
            )}
          </p>
          <p>
            {t(
              'По-друге, не залишатися осторонь, якщо помітили жорстоке ставлення до тварини з боку людини: варто по можливості захистити тварину та повідомити про це поліцію або звернутись за консультацією в нашу організацію'
            )}
          </p>
          {t(
            'По-третє, допомогти притулкам грошима або тим, що вони потребують'
          )}
          <p>
            {t(
              'Допомогти тваринам можна багатьма способами, але головне це особисте бажання та стурбованість долею чотирилапих.'
            )}
          </p>
        </div>
        <div className="section">
          <div className="tablet">
            <h3 className="help__title">
              {t(
                'Організації, які піклуються про тварин і потребують вашої допомоги'
              )}
            </h3>
          </div>
          <img src={ursa} className="help_ursa-img" alt="ursa" />
          <p>
            {t(
              'URSA – громадська організація, яка з 2018 року займається захистом прав тварин в Україні.'
            )}
          </p>
          <ul>
            <li>
              {t(
                'Ми надаємо юридичні консультації громадянам, які стали свідками жорстокого поводження з тваринами, адвокати URSA ініціюють та cупроводжують кримінальні справи пов’язані із жорстоким поводженням з тваринами.'
              )}
            </li>
            <li>
              {t(
                'Рятуємо тварин, які стали жертвами жорстокого поводження та війни.'
              )}
            </li>
            <li>
              {t(
                'Забезпечуємо кормами та медикаментами притулки та волонтерів, що опікуються безпритульними тваринами у прифронтових зонах України.'
              )}
            </li>
          </ul>
          <p>
            {t(
              'Наша місія: Формування у суспільстві етичного відношення до тварин, гуманне вирішення проблеми безпритульних тварин в Україні, дієві закони в сфері захисту тварин.'
            )}
          </p>
          <Link to={links.ursa}>
            <button type="button">{t('Детальніше')}</button>
          </Link>
        </div>
        <div className="section">
          <img className="help_kind-img" src={kind} alt="Добрий Самарянин" />
          <p>{t('Про «Добрий Самарянин»')}</p>
          <p>
            {t(
              'Рятуємо життя. Разом із благодійниками та партнерами 30 років надаємо допомогу нужденним.'
            )}
          </p>
          <p>{t('Наша місія: Віддаючи, отримуємо більше!')}</p>

          <p>{t('Щоденно')}</p>
          <ul>
            <li>{t('Добрими справами наближаємо перемогу.')}</li>
            <li>{t('Розвиваємо волонтерство.')}</li>
            <li>
              {t(
                'Надаємо допомогу ветеранам, людям, які постраждали від стихійного лиха, сім&apos;ям у кризових ситуаціях, літнім та самотнім людям за межею бідності, дітям у школах-інтернатах Одеської області, дітям з інвалідністю, літнім людям у будинках милосердя Одеської області.'
              )}
            </li>
            <li>{t('Створюємо культурно-просвітницькі проєкти.')}</li>
            <li>{t('Залучаємо людей до благодійності.')}</li>
          </ul>

          <Link to={links.kind}>
            <button type="button">{t('Детальніше')}</button>
          </Link>
        </div>
        <div className="section">
          <img className="help_UAnimals-img" src={uaAnimals} alt="UAnimals " />
          <p>
            {t(
              'ЗАХИСТ СЛАБКИХ — СПРАВА СИЛЬНИХ! Допоможіть UAnimals врятувати тварин від війни. Лише разом ми зможемо припинити страждання.'
            )}
          </p>
          <p>
            {t(
              'З 2016 року UAnimals пропагує гуманне ставлення до тварин та захищає їх від експлуатації та знущань.'
            )}
          </p>
          <p>
            {t(
              'За цей час нам вдалося заборонити цирки з тваринами у трьох десятках міст, домовитися про відмову від натурального хутра з десятками дизайнерів Ukrainian Fashion Week, а також домогтися прийняття кількох важливих зоозахисних законів.'
            )}
          </p>
          <p>
            {t(
              'З початком повномасштабної війни всі наші зусилля зосереджені на порятунку тварин з зони бойових дій та тимчасово окупованих територій.'
            )}
          </p>
          <Link to={links.uaAnumals}>
            <button type="button">{t('Детальніше')}</button>
          </Link>
        </div>
        <div className="section">
          <img
            className="help_homeless-img"
            src={homeless}
            alt="Happy Paw – благодійний фонд"
          />
          <p>
            {t(
              'Happy Paw – благодійний фонд, який опікується долею безпритульних котиків та песиків.'
            )}
          </p>
          <p>
            {t(
              'Благодійний шлях Happy Paw почався з опіки над притулками та з часом розрісся у велику кількість проєктів та ініціатив. І це лише початок пригод, попереду ще безліч подвигів і звершень.'
            )}
          </p>
          <Link to={links.happyPaw}>
            <button type="button">{t('Детальніше')}</button>
          </Link>
        </div>
      </StyledHelp>
      <Promotions query="is_promotional=1" title={t('Пропозиції зі знижкою')} />
    </GlobalContainer>
  );
};

export default Help;
