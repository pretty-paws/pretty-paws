import React from 'react';
import AlreadyRegistered from './AlreadyRegistered';
import RegisterBox from './RegisterBox';
import { StyledRegisterContainer } from './RegisterPage.styled';
import useWindowSize from '../../hooks/useWindowSize';
import { GlobalContainer } from '../../global/GlobalContainer';

const RegisterPage = () => {
  const { screen } = useWindowSize();
  return (
    <>
      {screen === 'mobile' && (
        <>
          <StyledRegisterContainer>
            <RegisterBox />
          </StyledRegisterContainer>
        </>
      )}
      {screen !== 'mobile' && (
        <>
          <GlobalContainer>
            <StyledRegisterContainer>
              <RegisterBox />
              <AlreadyRegistered />
            </StyledRegisterContainer>
          </GlobalContainer>
        </>
      )}
    </>
  );
};

export default RegisterPage;
