import styled from 'styled-components';

export const StyledAlreadyRegisteredBox = styled.div`
  width: 364px;
  height: 466px;
  display: flex;
  flex-direction: column;
  margin: 45px 0 123px;
  padding: 45px 40px 32px;
  border-radius: 14.573px;
  border: 1.214px solid #cac4d0;
  background: #fff;

  &:hover {
    box-shadow: 0px 6.622589588165283px 6.622589588165283px 0px
      rgba(0, 0, 0, 0.25);
  }

  & .already-registered-header {
    color: #000;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 35px;
  }

  & .already-registered-button-container {
    position: relative;
  }

  & .already-registered-icon {
    position: absolute;
    top: 5px;
    left: 75px;
    cursor: pointer;
  }

  & .already-registered-button {
    padding-left: 24px;
    width: 136px;
    height: 45px;
    border-radius: 99px;
    border: 1px solid var(--accent-color-blue);
    background: var(--accent-color-blue);
    color: #fff;
    text-align: left;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.8;
  }

  & .already-registered-text {
    margin-top: 62px;
    color: #111;
    font-size: 18px;
    font-weight: 400;
  }

  & .already-registered-social-icons {
    margin: 25px 0 36px;
    display: flex;
    gap: 32px;
  }

  & .already-registered-icons {
    cursor: pointer;
  }

  & .already-registered-agree {
    color: #111;
    font-size: 11px;
    font-weight: 400;
    line-height: 1.77;
  }

  & .already-registered-agreement {
    text-decoration-line: underline;
  }
`;
