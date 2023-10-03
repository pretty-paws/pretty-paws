import { useTranslation } from 'react-i18next';
import useWindowSize from '../../../hooks/useWindowSize';
import { StyledSubscription } from './Subscription.styled';
import { Link } from 'react-router-dom';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { animalsSvg } from '../../../utils/animalBarSvgLinks';

const Subscription = observer(() => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();

  const store = useStore();
  const {
    auth: { subscriptions },
  } = store;

  return (
    <StyledSubscription>
      <div className="subscription__header-box">
        {screen === 'mobile' && (
          <Link to={'/cabinet'}>
            <svg width="24px" height="24px" className="subscription__arrow">
              <use href={sprite + '#arrow-down'} />
            </svg>
          </Link>
        )}
        <h2 className="subscription__header">{t('Мої підписки')}</h2>
      </div>
      <div className="subscription__body">
        {subscriptions.map(({ id }) => (
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
            <Link>
              <p className="subscription__decline">{t('Відмінити')}</p>
            </Link>
          </div>
        ))}
        {subscriptions.length === null && (
          <p className="subscription__nothing">
            {t('Поки що ви не оформили підписку на акції від PrettyPaws.')}
          </p>
        )}
        <Link to="/cabinet/subscription#subscription">
          <button
            type="button"
            className={
              screen === 'desktop'
                ? 'subscription__button desktop'
                : 'subscription__button'
            }
          >
            {t('Підписатися на акції')}
          </button>
        </Link>
      </div>
    </StyledSubscription>
  );
});

export default Subscription;
