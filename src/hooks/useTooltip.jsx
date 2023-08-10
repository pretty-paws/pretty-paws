import React, { useState } from 'react';
import { StyledTooltip } from './Tooltip.styled';
import PropTypes from 'prop-types';

const ToolTip = ({ children, text }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };

  return (
    <StyledTooltip
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {children}
      {showToolTip && <div className="tooltip">{text}</div>}
    </StyledTooltip>
  );
};

export default ToolTip;

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};
