import styled from 'styled-components';

export const StyledNavigation = styled.div`
  margin-top: 39px;
  display: flex;
  align-items: center;

  gap: 19.5px;

  & .navigation-list {
    display: flex;
    font-size: 18px;
    color: var(--font-color-black);
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  & .navigation-list li {
    position: relative;
    flex: 1;
    text-align: center;
    cursor: pointer;

    &:hover::after {
      position: absolute;
      bottom: -10px;
      left: 0;
      content: '';
      width: 100%;
      height: 3px;
      background-color: var(--accent-color-blue);
    }
  }

  & .active-link::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    content: '';
    width: 100%;
    height: 3px;
    background-color: var(--accent-color-blue);
  }
`;
