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
  border-radius: 8.6px;
  background-color: #fff;
  border: 2px solid var(--accent-color-beige);
  color: #111;
  font-size: 18.246px;
  font-weight: 400;
  line-height: 1.5;

  & .modal__authorised {
    padding: 15px 25px;
    display: flex;
    flex-direction: column;
    gap: 29px;

    color: #111;
    font-size: 18.246px;
    font-weight: 400;
    line-height: 1.5;

    & p:hover {
      text-decoration: underline;
      color: var(--accent-color-orange);
    }
  }

  & .user-modal__logout-box {
    position: relative;
  }

  & .user-modal__logout-icon {
    position: absolute;
    top: -5px;
    right: 50px;
    cursor: pointer;
  }

  & .modal__unauthorised {
    padding: 15px 25px;
    display: flex;
    gap: 20px;
    align-items: center;
  }

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

  & .user-modal__login,
  .user-modal__register {
    color: #111;
    font-size: 18.246px;
    font-weight: 400;
    line-height: 1.5;

    &:hover {
      text-decoration: underline;
      color: var(--accent-color-orange);
    }
  }
`;
