import React, { useState } from 'react';
import { StyledTooltip } from './Tooltip.styled';
import PropTypes from 'prop-types';

const ToolTip = ({ children, text, authorised, screen, page }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const onMouseEnterHandler = () => {
    !authorised && setShowToolTip(true);
    if (children.props?.to === '/cart') {
      setShowToolTip(true);
    }
  };

  const onMouseLeaveHandler = () => {
    !authorised && setShowToolTip(false);
    if (children.props?.to !== '/cart') {
      setShowToolTip(false);
    }
  };

  return (
    <StyledTooltip
      screen={screen}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {children}
      {showToolTip && (
        <div
          className={page === 'bigProduct' ? 'tooltip big-product' : 'tooltip'}
        >
          {text}
        </div>
      )}
    </StyledTooltip>
  );
};

export default ToolTip;

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  authorised: PropTypes.bool,
  screen: PropTypes.string,
  page: PropTypes.string,
};
