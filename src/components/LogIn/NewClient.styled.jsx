import styled from 'styled-components';

export const StyledNewClient = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 48px 24px;
  border-radius: 8px;
  border: none;
  background: #fff;

  @media screen and (min-width: 1440px) {
    padding: 48px 97px;
  }

  & .new-client__header {
    color: var(--font-color-black);
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 32px;
  }

  & .new-client__text {
    margin-bottom: 32px;
    color: var(--font-color-black);
    font-size: 16px;
    font-weight: 400;
  }

  & .new-client__button {
    position: relative;
    width: 100%;
    height: 52px;
    /* margin-bottom: 8px; */
    padding: 16px 32px;
    border-radius: 100px;
    border: 1px solid var(--accent-color-blue);
    background: var(--accent-color-blue);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }
  }

  & .new-client__agree {
    margin: 32px 0 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  & .new-client__agreement {
    color: #005a9a;
  }
`;
