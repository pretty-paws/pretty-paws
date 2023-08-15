import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  background-color: rgba(217, 217, 217, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledModalBox = styled.div`
  position: absolute;
  top: 21%;
  right: 15%;
  z-index: 1002;
  padding: 16px 22px 44px;
  border-radius: 8.6px;
  background-color: #fff;
  border: 2px solid var(--accent-color-beige);
  color: #111;
  font-size: 18.246px;
  font-weight: 400;
  line-height: 1.5;

  & p {
    cursor: pointer;
  }

  & .user-modal__new-box {
    position: relative;
  }

  & .user-modal__new::after {
    position: absolute;
    z-index: 100000;
    top: 55px;
    left: 0;
    content: '';
    height: 2px;
    width: 100%;
    background-color: var(--accent-color-beige);
  }

  & .user-modal__new-link {
    display: inline-block;
    margin-left: 11px;
    color: var(--accent-color-orange);
    font-size: 18.246px;
    font-weight: 400;
    line-height: 1.5;
    text-decoration-line: underline;
  }

  & .user-modal__cabinet {
    padding-top: 30px;
  }

  & .user-modal__history {
    padding-top: 17px;
  }
`;
