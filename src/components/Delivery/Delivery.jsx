import React, { useState } from 'react';
import { GlobalContainer } from '../../global/GlobalContainer';
import sprite from '../../img/svg-sprite/sprite.svg';
import { StyledDeliveryContainer } from './Delivery.styled';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Delivery = () => {
  const { t } = useTranslation();
  const [section, setSection] = useState({
    deliveryUA: false,
    adressDelivery: false,
    newPostDelivery: false,
    newPostPayment: false,
    payment: false,
    return: false,
    returnGoods: false,
    returnIssue: false,
    returnWays: false,
    returnPayment: false,
  });
  console.log(section);

  const onClickToggle = section => {
    setSection(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  return (
    <GlobalContainer>
      <StyledDeliveryContainer>
        <div className="delivery__notification">
          <svg className="delivery-icon" width="24px" height="24px">
            <use href={sprite + '#notification'} />
          </svg>
          <h3 className="delivery__notification-header">
            {t('Доставка по Україні здійснюється Новою поштою')}
          </h3>
          <p>
            {t(
              'При оформленні замовлення до 14:00 товар буде відправлено в цей же день (якщо він є в наявності).'
            )}{' '}
            <br />
            {t(
              'При оформленні замовлення після 14:00 товар буде відправлено наступного дня (якщо він є в наявності).'
            )}
          </p>
        </div>
        <div
          className="delivery__section-header-box"
          onClick={() => onClickToggle('deliveryUA')}
        >
          <h3 className="delivery__section-header">
            {t('Доставка по Україні')}
          </h3>
          <svg
            className={
              section.deliveryUA
                ? 'delivery-arrow-icon opened'
                : 'delivery-arrow-icon'
            }
            width="24px"
            height="24px"
          >
            <use href={sprite + '#arrow-black'} />
          </svg>
        </div>
        {section.deliveryUA && (
          <div className="delivery-section">
            <ul className="delivery__list">
              <li>{t('До поштоматів: від 200 грн. безкоштовно.')}</li>
              <li>
                {t(
                  "Ha відділення: від 500 грн. безкоштовно, крім акваріумів, акваріумних ґрунтів, кліток та великогабаритних товарів. Дерев'яні, силікагелеві та мінеральні наповнювачі входять у безкоштовну доставку на відділення за вагою до 30 кг включно, понад 30 кг - за рахунок покупця."
                )}
              </li>
              <li>
                {t(
                  'Адресна доставка кур`єрами Нової пошти: від 1000 грн - безкоштовно'
                )}
              </li>
              <li>
                {t(
                  'Для замовлень на суму менше ніж 200 грн - доставка згідно з тарифами оператора.'
                )}
              </li>
            </ul>
            <p>
              {t(
                'Відправлення замовлень, що узгоджені з менеджерами в неділю, відбувається в понеділок.'
              )}
            </p>
            <p>
              {t(
                'Після відправки Вашого замовлення, номер товарно-транспортної накладної прийде на телефон, вказаний в замовленні, у вигляді SMS. За цим номером, Ви зможете отримати товар в представництві транспортної компанії у вашому місті при наявності паспорта.'
              )}
            </p>
            <p>
              <b>{t('Увага!')}</b>{' '}
              {t(
                'При доставці товару будь-яким перевізником покупець зобов`язаний перевірити цілісність і комплектацію товару безпосередньо в офісі перевізника. Ми завжди пакуємо замовлення дуже ретельно і вкладаємо всередину тільки якісний і цілий товар. Але в процесі транспортування іноді вантаж пошкоджується. При виявленні дефектів необхідно діяти відповідно до внутрішніх правил перевізника.'
              )}
            </p>
            <p>{t('При отриманні товару у компанії-перевізника:')}</p>
            <ul className="delivery__list">
              <li>
                {t(
                  'Оглянути цілісність посилки безпосередньо в відділенні Нової Пошти.'
                )}
              </li>
              <li>
                {t('Звірити кількість місць в TTH з фактично отриманим.')}
              </li>
              <li>
                {t(
                  'Перевірити цілісність упаковки (звертайте увагу на розриви, вм`ятини, вдавлення).'
                )}
              </li>
              <li>
                {t(
                  'Розкрити упаковку, звірити вміст з товарним чеком і оглянути на предмет пошкоджень.'
                )}
              </li>
            </ul>
            <p>
              {t(
                'У разі виявлення пошкоджень або недостачі, Вам необхідно передзвонити нам за номером 080000000 і тут же в офісі перевізника скласти акт-претензію, в якому зафіксувати стан упаковки, наявність маркування на упаковці (крихке) і описати безпосередньо пошкодження або товар, якого не вистачає.'
              )}
            </p>
            <p>
              {t(
                'Якщо Ви, при складанні акта, вказуєте себе одержувачем компенсації, то заміна пошкодженого товару або повернення грошей не здійснюється. Пам`ятайте, що претензії до перевізника про брак місць, вартості перевезення та пошкодженнях пред`являє отримувач.'
              )}
            </p>
            <p>
              {t(
                'При недотриманні вище перелічених пунктів, претензії щодо пошкодженого, втраченого товару ми не приймаємо.'
              )}
            </p>
            <p>
              {t(
                'Зверніть увагу, що Ваше замовлення зберігається в офісі перевізника протягом 4-х днів, і вже на 5-й день відбувається автоматичне повернення замовлення відправнику'
              )}
            </p>
            <h4 onClick={() => onClickToggle('adressDelivery')}>
              {t('Чи можу я замовити адресну доставку?')}
            </h4>
            {section.adressDelivery && (
              <p>
                {t(
                  'Так, Ви можете замовити адресну доставку в вашому населеному пункті. Доставка буде здійснюватиметься кур`єрами компанії Нова Пошта. Вартість доставки при цьому не зміниться * і складатиме також 59 грн*. Підйом на поверх габаритних вантажів від 30 до 100 кг оплачується окремо. Вартість підйому: 20-60 грн / поверх залежно від ваги, габаритів і складності підйому.'
                )}
                <Link to="https://novaposhta.ua/poluchit_po_adresu">
                  {t('Довідка на сайті Нової Пошти.')}
                </Link>
              </p>
            )}
            <h4 onClick={() => onClickToggle('newPostDelivery')}>
              {t('Чи можу я замовити доставку у поштомат Нової Пошти?')}
            </h4>
            {section.newPostDelivery && (
              <div>
                <p>
                  {t(
                    'Так. Ви маєте таку можливість. Термін зберігання – 3 календарні дні. Після цього посилку буде переміщено у найближче до поштомату відділення.'
                  )}
                </p>
                <ul className="delivery__list">
                  <li>{t('Розмір: не більше 40х60х30 см')}</li>
                  <li>{t('Фактична вага: до 20 кг')}</li>
                </ul>
              </div>
            )}
            <h4 onClick={() => onClickToggle('newPostPayment')}>
              {t('Як оплатити послуги доставки у поштомат?')}
            </h4>
            {section.newPostPayment && (
              <>
                <p>
                  {t(
                    'Послуги доставки можна оплатити за допомогою мобільного додатку Нової пошти або на сайті компанії. Майте на увазі, що оплатити готівкою на місці неможливо, оскільки в поштоматі немає для цього технічних можливостей.'
                  )}
                </p>
              </>
            )}
          </div>
        )}
        <div
          className="delivery__section-header-box"
          onClick={() => onClickToggle('payment')}
        >
          <h3 className="delivery__section-header">{t('Способи оплати')}</h3>
          <svg
            className={
              section.payment
                ? 'delivery-arrow-icon opened'
                : 'delivery-arrow-icon'
            }
            width="24px"
            height="24px"
          >
            <use href={sprite + '#arrow-black'} />
          </svg>
        </div>
        {section.payment && (
          <div className="delivery-section">
            <p>
              {t('Оплату товару ви можете здійснити зручним для вас способом:')}
            </p>
            <ul className="delivery__list">
              <li>
                {t(
                  'онлайн-оплата банківською картою Visa або MasterCard або за допомогою платіжних систем Apple Pay або Google Pay;'
                )}
              </li>
              <li>
                {t(
                  'післяплатою у відділені Нової Пошти (звертаємо вашу увагу на те що у випадку сплати при отриманні додатково буде включено у вартість послуги післяплата від Нової пошти 2%+20 грн);'
                )}
              </li>
            </ul>
            <p>
              {t(
                'Ми рекомендуємо перевіряти товар на цілісність, комплектацію, якісні характеристики при отриманні. Якщо ви виявили дефекти, то можете зв`язатися з менеджером нашого магазину і ми вирішимо це питання. У таких випадках ми гарантуємо Вам повернення грошей або обмін товару на аналогічний. Докладніше про це читайте у пункті «Повернення грошей/обмін».'
              )}
            </p>
          </div>
        )}
        <div
          className="delivery__section-header-box"
          onClick={() => onClickToggle('return')}
        >
          <h3 className="delivery__section-header">
            {t('Обмін та повернення товарів')}
          </h3>
          <svg
            className={
              section.return
                ? 'delivery-arrow-icon opened'
                : 'delivery-arrow-icon'
            }
            width="24px"
            height="24px"
          >
            <use href={sprite + '#arrow-black'} />
          </svg>
        </div>
        {section.return && (
          <div className="delivery-section">
            <p>
              {t(
                'Повернення або обмін товарів для домашніх тварин належної якості не регламентується окремо Законом України `Про захист прав споживача`.'
              )}
            </p>
            <p>
              {t(
                'До зоотоварів застосовні ті ж правила, які поширюються на відповідні групи товарів, призначені для людського використання. Ви можете повернути або обміняти товар протягом 14 днів після доставки Вашого замовлення. Якщо тварині був придбаний якийсь товар, який не підійшов йому за розміром, фасоном, забарвленням або характеристикам, Ви маєте право звернутися в інтернет-магазин Vmiske.ua протягом 14 (чотирнадцяти) днів, починаючи з наступного дня після доставки замовлення і зажадати на законних правах обміну товару або повернення витраченої суми, якщо немає аналогічного відповідного товару і немає інших альтернатив для обміну.'
              )}
            </p>
            <p>{t('При цьому, є кілька вимог:')}</p>
            <ul className="delivery__list">
              <li>
                {t(
                  'товарний вигляд і упаковка продукту не були пошкоджені, всі бирки і ярлики на місці;'
                )}
              </li>
              <li>
                {t(
                  'товар не був у вживанні: відсутні сліди використання, подряпини, відколи, потертості і тд.;'
                )}
              </li>
              <li>
                {t('замовлений Вами товар підлягає поверненню та обміну;')}
              </li>
              <li>
                {t(
                  'товар складний в упаковку таким же чином, як і при отриманні;'
                )}
              </li>
            </ul>
            {/* /////////////////////// */}
            <h4 onClick={() => onClickToggle('returnGoods')}>
              {t('Які товари я не зможу повернути / обміняти?')}
            </h4>
            {section.returnGoods && (
              <>
                <ul className="delivery__list">
                  <li>
                    {t(
                      'якщо використовувалися нештатні режими або параметри роботи обладнання або його компонентів (частот, напруг і ін.)'
                    )}
                  </li>
                  <li>
                    {t(
                      'дефекти викликані використанням витратних матеріалів, які не відповідають вимогам експлуатації;'
                    )}
                  </li>
                  <li>
                    {t(
                      'виникло пошкодження, викликане потраплянням всередину виробу сторонніх предметів, речовин, рідин або комах;'
                    )}
                  </li>
                  <li>
                    {t(
                      'виріб має виражені механічні і / або електричні пошкодження, отримані в результаті будь-яких дій покупця, або сторонніх осіб;'
                    )}
                  </li>
                  <li>
                    {t(
                      'обладнання пошкоджено внаслідок природних стихій, пожеж, повеней, землетрусів, побутових чинників та інших ситуацій, що не залежать від продавця;'
                    )}
                  </li>
                  <li>
                    {t(
                      'вироби зазнали ремонту не уповноваженими особами з порушенням вимог виробника і норм техніки безпеки;'
                    )}
                  </li>
                </ul>
                <p>
                  {t(
                    'Відповідно до постанови Кабінету міністрів №172 від 19 березня 1994 року про реалізацію окремих положень закону України `Про захист прав споживачів` не підлягають поверненню:'
                  )}
                </p>
                <ul className="delivery__list">
                  <li>{t('продовольчі товари;')}</li>
                  <li>
                    {t(
                      'товари медичного призначення: лікарські препарати та прилади для лікування: тварин, медичний одяг, попони, бандажі та тп. предмети гігієни;'
                    )}
                  </li>
                  <li>{t('м`які або надувні іграшки;')}</li>
                  <li>
                    {t(
                      'товари для цуценят і кошенят (пелюшки, соски, пляшечки для годування, поїльника і т.д.); парфюмерно-косметичні і товари в аерозольній упаковці;'
                    )}
                  </li>
                  <li>{t('рушники, покривала, лежаки, будиночки;')}</li>
                  <li>
                    {t(
                      'зубні щітки, гребінці, гребінці, інструменти для грумінгу;'
                    )}
                  </li>
                  <li>{t('панчішно-шкарпеткові вироби.')}</li>
                </ul>
                <p>
                  {t(
                    "Продовольчі товари. До продовольчих товарів відносяться всі товари, які може застосувати в їжу людина. Продукти харчування не можуть бути повернуті або поміняні на інший продукт, якщо вони просто Вас не влаштували як покупця, або Ви передумали брати саме цей продукт після зробленої покупки. Продовольчі товари можуть бути повернуті або обмінені, якщо Ви виявили в них суттєві недоліки і порушення норм і вимог закону. Наприклад, якщо у продукту виявився минулий термін придатності, якщо на упаковці немає переліку обов`язкових відомостей, які повинні бути вказані на продуктах харчування: маркування, дата виготовлення і термін придатності, склад продукту на мові споживача, калорійність, енергетична цінність, вміст жирів, білків і вуглеводів, відомості про виробника із зазначенням назви, місця і юридичної адреси, відомості про представника, який уповноважений продавати цей продукт, маса і об`єм продукту. З повним переліком таких товарів Ви можете ознайомитися, перейшовши за посиланням. Повернути ці товари можна тільки через виявлення браку або невідповідності замовлення. Бракований товар або товар неналежної якості. Якщо ви отримали товар неналежної якості, напишіть нам на електронну адресу info@vmiske.ua c темою 'Обмін і повернення', номером замовлення, номер телефону для зворотного зв`язку (якщо він відрізняється від зазначеного в замовленні ), фото та детальним описом ситуації."
                  )}
                </p>
              </>
            )}
            <h4 onClick={() => onClickToggle('returnIssue')}>
              {t('Як оформити повернення / обмін?')}
            </h4>
            {section.returnIssue && (
              <ul className="delivery__list">
                <li>
                  {t('Ви можете написати нам на електронну адресу')}
                  <b> info@PrettyPaws.ua </b>
                  {t(
                    'c темою `Обмін і повернення`, номером замовлення, номером телефону для зворотного зв`язку (якщо він відрізняється від зазначеного в замовленні), фото та детальним описом ситуації. Ми зв`яжемося з Вами протягом доби з моменту отримання звернення.'
                  )}
                </li>
                <li>
                  {t('Звернутися до оператора за телефоном')}{' '}
                  <b>0 800 00 00 00</b>{' '}
                  {t(
                    'протягом години після отримання заяви (в робочий час з 9-00 до 20-00, крім суботи та неділі), ми зв`яжемося з Вами за вказаним в замовленні номеру телефону.'
                  )}
                </li>
              </ul>
            )}
            <h4 onClick={() => onClickToggle('returnWays')}>
              {t('Способи повернення / обміну')}
            </h4>
            {section.returnWays && (
              <>
                <ul className="delivery__list">
                  <li>
                    {t(
                      'Під час доставки вашого наступного замовлення, якщо такий буде.'
                    )}
                  </li>
                  <li>
                    {t(
                      'Транспортною компанією, якою було доставлено ваше замовлення в вашому місті.'
                    )}
                  </li>
                </ul>
                <p>
                  {t(
                    'Зверніть увагу: повернення або обмін товару здійснюється тільки після попереднього узгодження з нашим менеджером. Якщо повернення або обмін відбувається через неналежної якості або невідповідності замовлення, повернення або обмін здійснюється за рахунок PrettyPaws. У разі якщо повернення або обмін товару відбувається НЕ з вини PrettyPaws - транспортні послуги будуть платними і складуть 65 грн.'
                  )}
                </p>
              </>
            )}
            <h4 onClick={() => onClickToggle('returnPayment')}>
              {t('Способи відшкодування грошових коштів:')}
            </h4>
            {section.returnPayment && (
              <>
                <ul className="delivery__list">
                  <li>{t('банківська картка')}</li>
                  <li>{t('готівка')}</li>
                </ul>
                <p>
                  {t(
                    'Зверніть увагу: зробити повернення грошових коштів або обмін товару ми зможемо протягом 1-2 робочих днів з моменту отримання товару до нас на склад для оцінки його товарного вигляду. Зверніть увагу, що всі посилки, які відправляються транспортними компаніями застраховані. При отриманні посилки необхідно перевірити цілісність її упаковки і відсутність механічних пошкоджень. Кожне звернення з питання обміну або повернення розглядається індивідуально.'
                  )}
                </p>
              </>
            )}
          </div>
        )}
      </StyledDeliveryContainer>
    </GlobalContainer>
  );
};

export default Delivery;
