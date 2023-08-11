import styled from 'styled-components';

export const StyledAnimalsBar = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  & .animals-bar-icon-box {
    position: relative;
  }

  & .animals-bar-icon {
    position: relative;
    z-index: 2;
  }

  & .animals-bar-icon-box::after {
    content: '';
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 41px;
    height: 41px;
    background-color: #fff;
    border-radius: 100%;
  }
`;
