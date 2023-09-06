import styled from 'styled-components';

export const StyledSocialNetsAuthBox = styled.div`
  & .auth-text {
    margin-top: 24px;
    color: var(--font-color-black);
    font-size: 20px;
    font-weight: 500;
  }

  & .auth-icons-box {
    margin: 32px 0 24px;
    display: flex;
    gap: 32px;

    @media screen and (min-width: 834px) {
      margin: 32px 0 0;
    }
  }

  & .auth-icons {
    cursor: pointer;
  }
`;
