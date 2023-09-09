import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  background-color: rgba(217, 217, 217, 0.5);
  position: fixed;
  z-index: 1000000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .user-modal__new-box {
    position: relative;
    z-index: 1000000;
  }
`;

export const StyledModalBox = styled.div`
  position: absolute;
  top: 70px;
  right: 10px;
  z-index: 1000000;
  border-radius: 8.6px;
  background-color: #fff;
  border: 2.5px solid var(--accent-color-beige);
  color: #111;
  font-size: 18.246px;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (min-width: 834px) {
    top: 80px;
    right: 40px;
  }

  @media screen and (min-width: 1440px) {
    top: 85px;
    right: 185px;
  }

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
    top: 0;
    right: 60px;
    cursor: pointer;
  }

  & .modal__unauthorised {
    padding: 15px 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: left;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
  }

  & .user-modal__login-icon {
    position: absolute;
    top: 15px;
    right: 40px;
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
