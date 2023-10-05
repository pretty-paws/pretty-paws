import React from 'react';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { useStore } from '../../../store/AuthProvider';
import { StyledPersonalData } from './PersonalData.styled';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import useWindowSize from '../../../hooks/useWindowSize';
import { useTranslation } from 'react-i18next';
import CabinetTitle from './CabinetTitle/CabinetTitle';
// import { logOut } from '../../../services/authAPI';

const PersonalData = observer(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { screen } = useWindowSize();
  const store = useStore();
  const {
    auth: { user, logOut },
  } = store;

  let location = useLocation();

  return (
    <StyledPersonalData>
      <CabinetTitle header={'Особисті дані'} />
      {location.pathname === '/cabinet/personal_data' && (
        <>
          <div className="personal-data__body">
            <table>
              <tbody>
                <tr>
                  <td>{t('Ім’я')}</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>{t('Прізвище')}</td>
                  <td>{user.surname}</td>
                </tr>
                <tr>
                  <td>{t('Телефон')}</td>
                  <td>{user.phone_number}</td>
                </tr>
                <tr>
                  <td>
                    {screen === 'mobile'
                      ? t('Ел. пошта')
                      : t('Електронна пошта')}
                  </td>
                  <td>{user.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {screen === 'mobile' && (
            <div className="cabinet-logout">
              <svg width="24px" height="24px">
                <use href={sprite + '#logout'} />
              </svg>
              <button
                className="cabinet-logout-btn"
                onClick={() => {
                  logOut();
                  navigate('/');
                }}
              >
                {t('Вийти з акаунту')}
              </button>
            </div>
          )}
        </>
      )}

      <Outlet />
    </StyledPersonalData>
  );
});

export default PersonalData;
