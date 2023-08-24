import styled from 'styled-components';

export const StyledAnimalsBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 834px) {
    gap: 4px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }

  & .animals-bar-icon-box {
    height: 41px;
    width: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: #fff;

    &:hover {
      fill: #fff;
      background-color: var(--accent-color-beige);
    }
  }
`;
