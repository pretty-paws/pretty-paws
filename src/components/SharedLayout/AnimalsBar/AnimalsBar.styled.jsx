import styled from 'styled-components';

export const StyledAnimalsBar = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

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
