import styled from 'styled-components';

export const StyledAnimalsBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${props => (props.type === 'burger' ? '24px' : '0')};
  width: ${props => (props.type === 'burger' ? 'calc(100vw / 2)' : '100%')};

  @media screen and (min-width: 834px) {
    width: ${props => (props.type === 'burger' ? 'calc(50vw / 2)' : '100%')};
    gap: ${props => (props.type === 'burger' ? '24px' : '16px')};

    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    /* flex: 1; */
    /* width: 345px; */
    gap: 16px;
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
