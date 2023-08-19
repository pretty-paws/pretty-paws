import React from 'react';
import LogInBox from './LogInBox';
import { StyledLoginPage } from './LogInPage.styled';
import NewClient from './NewClient';

const LogInPage = () => {
  return (
    <StyledLoginPage>
      <LogInBox />
      <NewClient />
    </StyledLoginPage>
  );
};

export default LogInPage;
