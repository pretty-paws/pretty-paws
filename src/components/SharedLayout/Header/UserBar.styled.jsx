import styled from 'styled-components';

export const StyledUserBar = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (min-width: 834px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }

  & .user-bar__icon {
    width: 24px;
    height: 24px;

    @media screen and (min-width: 834px) {
      width: 32px;
      height: 32px;
    }

    @media screen and (min-width: 1440px) {
      width: 24px;
      height: 24px;
    }
  }
`;
