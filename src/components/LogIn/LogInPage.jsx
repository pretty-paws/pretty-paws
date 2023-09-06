import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import LogInBox from './LogInBox';
import { StyledLoginPage } from './LogInPage.styled';
import NewClient from './NewClient';

const LogInPage = () => {
  const { screen } = useWindowSize();
  return (
    <StyledLoginPage>
      <LogInBox />
      {screen !== 'mobile' && <NewClient />}
    </StyledLoginPage>
  );
};

export default LogInPage;
