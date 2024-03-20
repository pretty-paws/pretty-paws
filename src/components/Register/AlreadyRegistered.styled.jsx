import styled from 'styled-components';

export const StyledAlreadyRegisteredBox = styled.div`
  width: 50%;
  padding: 48px 24px;
  margin-top: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background: #fff;
  height: fit-content;

  @media screen and (min-width: 1440px) {
    margin-top: 28px;
    padding: 48px 97px;
  }

  & .already-registered-header {
    color: #000;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 32px;
  }

  & .already-registered-button {
    position: relative;
    /* margin-bottom: 40px; */
    width: 100%;
    padding: 16px 32px;
    height: 52px;
    border-radius: 99px;
    border: 1px solid var(--accent-color-blue);
    background: var(--accent-color-blue);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }
  }

  /* & .already-registered-button::after {
    position: absolute;
    bottom: -32px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--font-color-darkgray);
  } */

  & .already-registered-text {
    margin-top: 62px;
    color: #111;
    font-size: 18px;
    font-weight: 400;
  }

  & .already-registered-agree {
    margin-top: 32px;
    color: #111;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.77;

    @media screen and (min-width: 1440px) {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
  }

  & .already-registered-agreement {
    color: #005a9a;
  }
`;
