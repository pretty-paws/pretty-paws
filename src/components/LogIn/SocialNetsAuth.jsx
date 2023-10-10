import React from 'react';
import sprite from '../../img/svg-sprite/sprite.svg';
import { StyledSocialNetsAuthBox } from './SocialNetsAuth.styled';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export const SocialNetsAuth = ({ title }) => {
  const { t } = useTranslation();

  return (
    <StyledSocialNetsAuthBox>
      <p className="auth-text">{t(`${title}`)}</p>
      <div className="auth-icons-box">
        <svg className="auth-icons" width="36px" height="36px">
          <use href={sprite + '#facebook'} />
        </svg>
        <svg className="auth-icons" width="36px" height="36px">
          <use href={sprite + '#google'} />
        </svg>
      </div>
    </StyledSocialNetsAuthBox>
  );
};

SocialNetsAuth.propTypes = {
  title: PropTypes.string.isRequired,
};
