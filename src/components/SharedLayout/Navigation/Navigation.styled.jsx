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
    flex: 1;
    text-align: center;
    cursor: pointer;
  }
`;
