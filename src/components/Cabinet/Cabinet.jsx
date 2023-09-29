import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useStore } from '../../store/AuthProvider';
import sprite from '../../img/svg-sprite/sprite.svg';
import { observer } from 'mobx-react-lite';
import { CabinetContainer, StyledCabinet } from './Cabinet.styled';
import NewUserBar from './NewUserBar/NewUserBar';
import { useLocation } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import { useTranslation } from 'react-i18next';

const Cabinet = observer(() => {
  const { t } = useTranslation();
  const { screen } = useWindowSize();
  const store = useStore();
  const {
    auth: { logOut, user },
  } = store;

  let location = useLocation();

  return (
    <CabinetContainer>
      {location.pathname === '/cabinet' && screen === 'mobile' && (
        <StyledCabinet>
          <div className="cabinet__menu">
            <h2 className="cabinet__header">
              {t('Привіт,')}

              {user.name}
            </h2>
            <div className="cabinet__line-box">
              <NavLink
                to="personal_data"
                className={({ isActive }) =>
                  isActive ? 'link active-item' : 'link'
                }
              >
                <div className="cabinet__menu-item">
                  <svg width="24px" height="24px">
                    <use href={sprite + '#account'} />
                  </svg>
                  <div>{t('Особисті дані')}</div>
                </div>
              </NavLink>
            </div>
            <div className="cabinet__line-box">
              <NavLink
                to="orders"
                className={({ isActive }) =>
                  isActive ? 'link active-item' : 'link'
                }
              >
                <div className="cabinet__menu-item">
                  <svg width="24px" height="24px">
                    <use href={sprite + '#orders'} />
                  </svg>
                  <div>{t('Мої замовлення')}</div>
                </div>
              </NavLink>
            </div>
            <div className="cabinet__line-box">
              <NavLink
                to="wish_list"
                className={({ isActive }) =>
                  isActive ? 'link active-item' : 'link'
                }
              >
                <div className="cabinet__menu-item">
                  <svg width="24px" height="24px">
                    <use href={sprite + '#favourite'} />
                  </svg>
                  <div>{t('Список бажань')}</div>
                </div>
              </NavLink>
            </div>
          </div>
        </StyledCabinet>
      )}
      {screen !== 'mobile' && (
        <StyledCabinet>
          <div className="cabinet__menu">
            <h2 className="cabinet__header">
              {t('Привіт,')}
              {user.name}
            </h2>
            <div className="cabinet__line-box">
              <NavLink
                to="personal_data"
                className={({ isActive }) =>
                  isActive ? 'link active-item' : 'link'
                }
              >
                <div className="cabinet__menu-item">
                  <svg width="24px" height="24px">
                    <use href={sprite + '#account'} />
                  </svg>
                  <div>{t('Особисті дані')}</div>
                </div>
              </NavLink>
            </div>
            <div className="cabinet__line-box">
              <NavLink
                to="orders"
                className={({ isActive }) =>
                  isActive ? 'link active-item' : 'link'
                }
              >
                <div className="cabinet__menu-item">
                  <svg width="24px" height="24px">
                    <use href={sprite + '#orders'} />
                  </svg>
                  <div>{t('Мої замовлення')}</div>
                </div>
              </NavLink>
            </div>
            <div className="cabinet__line-box">
              <NavLink
                to="wish_list"
                className={({ isActive }) =>
                  isActive ? 'link active-item' : 'link'
                }
              >
                <div className="cabinet__menu-item">
                  <svg width="24px" height="24px">
                    <use href={sprite + '#favourite'} />
                  </svg>
                  <div>{t('Список бажань')}</div>
                </div>
              </NavLink>
            </div>

            <div className="cabinet-logout">
              <svg width="24px" height="24px">
                <use href={sprite + '#logout'} />
              </svg>
              <button className="cabinet-logout-btn" onClick={() => logOut()}>
                {t('Вийти з акаунту')}
              </button>
            </div>
          </div>
        </StyledCabinet>
      )}
      <Outlet />
      {location.pathname === '/cabinet' && <NewUserBar />}
    </CabinetContainer>
  );
});

export default Cabinet;
