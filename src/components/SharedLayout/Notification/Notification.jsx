import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import sprite from '../../../img/svg-sprite/sprite.svg';
import { StyledNotification } from './Notification.styled';

const Notification = ({
  text,
  button,
  link,
  setNotification,
  notification,
}) => {
  useEffect(() => {
    let timeout;
    if (notification === true) {
      timeout = setTimeout(() => {
        setNotification(false);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [notification]);

  return (
    <StyledNotification>
      <div className="notification__block">
        <p className="notification__text">{text}</p>
        <svg
          className="notification__icon"
          width=" 26px"
          height=" 26px"
          onClick={() => setNotification(false)}
        >
          <use href={sprite + '#close'} />
        </svg>
      </div>
      <div className="notification__button-block">
        <Link to={link}>
          <button type="button" className="notification__button">
            {button}
          </button>
        </Link>
      </div>
    </StyledNotification>
  );
};

export default Notification;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  setNotification: PropTypes.func.isRequired,
  notification: PropTypes.bool.isRequired,
};
