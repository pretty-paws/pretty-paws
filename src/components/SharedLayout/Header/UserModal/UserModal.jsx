import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledBackdrop, StyledModalBox } from './UserModal.styled';

const UserModal = ({ onClose }) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <StyledBackdrop onClick={handleBackdropClick}>
      <div className="user-modal__new-box">
        <StyledModalBox>
          <Link to="/register" replace="true" onClick={onClose}>
            <p className="user-modal__new">
              Новий клієнт?
              <span className="user-modal__new-link"> Почни тут</span>
            </p>
          </Link>
          <p className="user-modal__cabinet">Мій кабінет</p>
          <p className="user-modal__history">Історія замовлень</p>
        </StyledModalBox>
      </div>
    </StyledBackdrop>
  );
};

export default UserModal;

UserModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
