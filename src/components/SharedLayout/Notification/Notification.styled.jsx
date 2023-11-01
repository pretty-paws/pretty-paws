import styled from 'styled-components';

export const StyledNotification = styled.div`
  position: absolute;
  z-index: 100000000000;
  top: 20%;
  right: 30%;

  display: flex;
  flex-direction: column;
  gap: 18px;

  width: 314px;
  padding: 16px 24px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 6px 0px rgba(14, 36, 35, 0.1);

  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  .notification__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .notification__icon {
    cursor: pointer;
  }

  .notification__button-block {
    display: flex;
    justify-content: center;
  }

  .notification__button {
    height: 52px;
    width: 217px;
    /* margin-top: 18px; */
    border-radius: 100px;
    border: 2px solid var(--accent-color-blue);
    background: #fff;

    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }
  }
`;
