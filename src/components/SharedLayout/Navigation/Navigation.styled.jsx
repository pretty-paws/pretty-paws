import styled from 'styled-components';

export const StyledNavigation = styled.div`
  position: relative;
  margin: 34px 0 26px;

  & .navigation-icon {
    position: absolute;
  }

  & .navigation-list {
    display: flex;
    font-size: 16px;
    color: var(--font-color-black);
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
  }

  & .navigation-list li {
    position: relative;
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
