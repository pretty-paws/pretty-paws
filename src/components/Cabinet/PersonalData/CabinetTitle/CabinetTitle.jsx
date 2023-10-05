import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useWindowSize from '../../../../hooks/useWindowSize';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { useTranslation } from 'react-i18next';
import { StyledCabinetTitle } from './CabinetTitle.styled';

const CabinetTitle = ({ header }) => {
  const { t } = useTranslation();

  const { screen } = useWindowSize();
  return (
    <StyledCabinetTitle>
      <div className="cabinetTitle__header-box">
        {screen === 'mobile' && (
          <Link to={'/cabinet'}>
            <svg width="24px" height="24px" className="cabinetTitle__arrow">
              <use href={sprite + '#arrow-down'} />
            </svg>
          </Link>
        )}
        <h2 className="cabinetTitle__header">{t(header)}</h2>
      </div>
    </StyledCabinetTitle>
  );
};

export default CabinetTitle;

CabinetTitle.propTypes = {
  header: PropTypes.string.isRequired,
};
