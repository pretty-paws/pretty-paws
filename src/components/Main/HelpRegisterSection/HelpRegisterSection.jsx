import React from 'react';
import { BackgroundContainer } from './HelpRegisterSection.styled';
import PropTypes from 'prop-types';
import { GlobalContainer } from '../../../global/GlobalContainer';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/AuthProvider';

const HelpRegisterSection = observer(({ title, text, button, animal }) => {
  const store = useStore();
  const {
    auth: { authorised },
  } = store;
  return (
    <BackgroundContainer type={animal}>
      <GlobalContainer>
        <div className="container">
          <h3 className="title">{title}</h3>
          <p className="text">{text}</p>
          <Link
            to={
              animal === 'dog'
                ? authorised
                  ? '/catalog'
                  : '/register'
                : '/help'
            }
          >
            <button
              className="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            >
              {button}
            </button>
          </Link>
        </div>
      </GlobalContainer>
    </BackgroundContainer>
  );
});

export default HelpRegisterSection;

HelpRegisterSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
};
