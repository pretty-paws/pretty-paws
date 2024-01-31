import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import useWindowSize from '../../../../hooks/useWindowSize';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { useTranslation } from 'react-i18next';
import { StyledCabinetTitle } from './CabinetTitle.styled';

const CabinetTitle = ({ header }) => {
  const { t } = useTranslation();
  let location = useLocation();
  const { orderIndex } = useParams();

  const handleLocation = location => {
    if (location === '/cabinet/personal_data/edit') {
      return '/cabinet/personal_data';
    } else if (location === '/cabinet/personal_data/') {
      return '/cabinet';
    } else if (location === `/cabinet/orders/${orderIndex}`) {
      return '/cabinet/orders';
    } else {
      return '/cabinet';
    }
  };

  const { screen } = useWindowSize();
  return (
    <StyledCabinetTitle>
      <div className="cabinetTitle__header-box">
        {screen === 'mobile' && (
          <Link to={handleLocation(location.pathname)}>
            <svg width="24px" height="24px" className="cabinetTitle__arrow">
              <use href={sprite + '#arrow-down'} />
            </svg>
          </Link>
        )}
        <h2 className="cabinetTitle__header">{t(header)}</h2>
        {location.pathname === '/cabinet/personal_data' && (
          <NavLink
            to="/cabinet/personal_data/edit"
            className={({ isActive }) => (isActive ? 'active-edit' : '')}
          >
            <svg width="24px" height="24px" className="cabinetTitle__edit">
              <use href={sprite + '#edit'} />
            </svg>
          </NavLink>
        )}
      </div>
    </StyledCabinetTitle>
  );
};

export default CabinetTitle;

CabinetTitle.propTypes = {
  header: PropTypes.string.isRequired,
};
