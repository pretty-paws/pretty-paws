import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledBackdrop, StyledModalBox } from './UserModal.styled';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { useAuthStore } from '../../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';

const UserModal = observer(({ onClose }) => {
  const { logOut, authorised } = useAuthStore();
  console.log(authorised);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleLogOutClick = async () => {
    await logOut().then(onClose());
  };
  return (
    <StyledBackdrop onClick={handleBackdropClick}>
      <div className="user-modal__new-box">
        <StyledModalBox>
          {authorised.toString() === 'true' ? (
            <div className="modal__authorised">
              <Link>
                <p className="user-modal__cabinet">Мій кабінет</p>
              </Link>
              <Link>
                <p className="user-modal__history">Історія замовлень</p>
              </Link>

              <div
                onClick={handleLogOutClick}
                className="user-modal__logout-box"
              >
                <p className="user-modal__logout">Вихід</p>
                <svg
                  className="user-modal__logout-icon"
                  width="27px"
                  height="27px"
                >
                  <use href={sprite + '#logout'} />
                </svg>
              </div>
            </div>
          ) : (
            <div className="modal__unauthorised">
              <Link to="/login" replace="true" onClick={onClose}>
                <p className="user-modal__login">Вхід</p>
              </Link>
              <Link to="/register" replace="true" onClick={onClose}>
                <p className="user-modal__register">Реєстрація</p>
              </Link>
            </div>
          )}
        </StyledModalBox>
      </div>
    </StyledBackdrop>
  );
});

export default UserModal;

UserModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
