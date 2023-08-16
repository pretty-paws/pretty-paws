import React from 'react';
import AlreadyRegistered from './AlreadyRegistered';
import RegisterBox from './RegisterBox';
import { StyledRegisterContainer } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <StyledRegisterContainer>
      <RegisterBox />
      <AlreadyRegistered />
    </StyledRegisterContainer>
  );
};

export default RegisterPage;
