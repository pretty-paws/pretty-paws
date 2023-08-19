import styled from 'styled-components';

export const StyledNewClient = styled.div`
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

  & .new-client__header {
    color: #000;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 35px;
  }

  & .new-client__text {
    padding-bottom: 24px;
    color: #111;
    font-size: 18px;
    font-weight: 400;
  }

  & .new-client__button {
    width: 284px;
    height: 45px;
    border-radius: 99px;
    border: 1px solid var(--accent-color-blue);
    background: var(--accent-color-blue);
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.8;
  }

  & .new-client__agree {
    color: #111;
    font-size: 11px;
    font-weight: 400;
    line-height: 1.77;
  }

  & .new-client__agreement {
    text-decoration-line: underline;
  }
`;
