import styled from 'styled-components';

export const StyledAnimalsBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  width: ${props => (props.type === 'burger' ? 'calc(100vw / 2)' : '100%')};

  @media screen and (min-width: 834px) {
    width: ${props => (props.type === 'burger' ? 'calc(50vw / 2)' : '100%')};
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    gap: 24px;
  }

  & .animals-bar-icon-box {
    height: 44px;
    width: 44px;
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
