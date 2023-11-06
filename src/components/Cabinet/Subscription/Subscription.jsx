import { useTranslation } from 'react-i18next';
import useWindowSize from '../../../hooks/useWindowSize';
import { StyledSubscription } from './Subscription.styled';
import { Link } from 'react-router-dom';
import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { animalsSvg } from '../../../utils/animalBarSvgLinks';
import CabinetTitle from '../PersonalData/CabinetTitle/CabinetTitle';

const Subscription = observer(() => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();
  const subscriptionSection =
    document.body.lastElementChild?.childNodes[0]?.childNodes[3];

  const store = useStore();
  const {
    auth: { subscriptions, unSubscribe },
  } = store;

  // console.log(subscriptions);

  return (
    <StyledSubscription>
      <CabinetTitle header={'Мої підписки'} />
      <div className="subscription__body">
        {subscriptions !== null &&
          subscriptions.map(({ id }) => (
            <div className="subscription__box" key={id}>
              <div className="subscription__category">
                <div className={'animals-bar-icon-box'}>
                  <svg className="animals-bar-icon" width="24px" height="24px">
                    <use href={animalsSvg[id - 1].link} />
                  </svg>
                </div>
                <p className="subscription__text">
                  {t(`${animalsSvg[id - 1].message}`)}
                </p>
              </div>
              <Link onClick={() => unSubscribe({ animal_id: id })}>
                <p className="subscription__decline">{t('Відмінити')}</p>
              </Link>
            </div>
          ))}
        {subscriptions === null && (
          <p className="subscription__nothing">
            {t('Поки що ви не оформили підписку на акції від PrettyPaws.')}
          </p>
        )}
        <button
          onClick={() =>
            window.scrollTo({
              top: subscriptionSection.getBoundingClientRect().top,
              behavior: 'smooth',
            })
          }
          type="button"
          className={
            screen === 'desktop'
              ? 'subscription__button desktop'
              : 'subscription__button'
          }
        >
          {t('Підписатися на акції')}
        </button>
      </div>
    </StyledSubscription>
  );
});

export default Subscription;
