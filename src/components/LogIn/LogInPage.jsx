import React from 'react';
import { GlobalContainer } from '../../global/GlobalContainer';
import useWindowSize from '../../hooks/useWindowSize';
import LogInBox from './LogInBox';
import { StyledLoginPage } from './LogInPage.styled';
import NewClient from './NewClient';
import { useLocation } from 'react-router-dom';

const LogInPage = () => {
  const location = useLocation();
  const { screen } = useWindowSize();
  return (
    <>
      {screen !== 'mobile' && (
        <GlobalContainer>
          {location?.state?.from && (
            <p style={{ fontSize: '24px', fontWeight: '700' }}>
              Для оформлення замовлення увійдіть у свій кабінет або
              зареєструйтеся
            </p>
          )}
          <StyledLoginPage>
            <LogInBox />
            <NewClient />
          </StyledLoginPage>
        </GlobalContainer>
      )}

      {screen === 'mobile' && (
        <StyledLoginPage>
          <LogInBox />
        </StyledLoginPage>
      )}
    </>
  );
};

export default LogInPage;
