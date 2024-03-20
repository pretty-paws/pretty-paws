import styled from 'styled-components';

export const StyledSocialNetsAuthBox = styled.div`
  position: relative;
  margin-top: 32px;
  & .auth-text {
    text-align: center;

    color: var(--font-color-black);
    font-size: 20px;
    font-weight: 500;
  }

  & .auth-text::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 149px;
    background-color: #d6d6d6;
    left: 0;
    top: 10px;
  }
  & .auth-text::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 149px;
    background-color: #d6d6d6;
    right: 0;
    top: 10px;
  }

  & .auth-icons-box {
    margin: 32px 0 24px;
    display: flex;
    justify-content: center;
    gap: 40px;

    @media screen and (min-width: 834px) {
      margin: 32px 0 0;
    }
  }

  & .auth-icons {
    cursor: pointer;
  }
`;
