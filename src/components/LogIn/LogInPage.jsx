import React from 'react';
import { GlobalContainer } from '../../global/GlobalContainer';
import useWindowSize from '../../hooks/useWindowSize';
import LogInBox from './LogInBox';
import { StyledLoginPage } from './LogInPage.styled';
import NewClient from './NewClient';

const LogInPage = () => {
  const { screen } = useWindowSize();
  return (
    <>
      {screen !== 'mobile' && (
        <GlobalContainer>
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
