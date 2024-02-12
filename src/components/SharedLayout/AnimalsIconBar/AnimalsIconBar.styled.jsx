import styled from 'styled-components';

export const StyledAnimalsIconBar = styled.div`
  display: grid;
  /* grid-template-columns: repeat(min-max(60px, 1fr)); */
  grid-template-columns: 1fr 1fr 1fr;
  /* display: flex; */
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: space-between;
  /* gap: ${props => (props.type === 'burger__lg' ? '40px' : '24px')}; */

  gap: ${props => (props.type === 'burger' ? '24px' : '0')};
  width: ${props => (props.type === 'burger' ? 'calc(100vw / 2)' : '100%')};

  @media screen and (min-width: 834px) {
    width: ${props => (props.type === 'burger' ? 'calc(50vw / 2)' : '100%')};
    gap: ${props => (props.type === 'burger' ? '24px' : '16px')};

    justify-content: ${props =>
      props.type === 'section' ? 'right' : 'center'};
  }

  @media screen and (min-width: 1440px) {
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

  .chosen {
    background-color: var(--accent-color-beige);
  }
`;
export const StyledVerticalAnimalsIconBar = styled(StyledAnimalsIconBar)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  @media screen and (min-width: 834px) {
    width: auto;
  }
`;
