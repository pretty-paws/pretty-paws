import styled from 'styled-components';

export const StyledTooltip = styled.div`
  position: relative;

  & .tooltip {
    position: absolute;
    z-index: 10000000000000;
    top: ${props =>
      props.screen === 'desktop'
        ? '35px'
        : props.screen === 'tablet'
        ? '0'
        : '0'};
    left: ${props =>
      props.screen === 'desktop'
        ? '50%'
        : props.screen === 'tablet'
        ? '70%'
        : '70%'};
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    padding: 4px 12px;
    justify-content: center;
    color: #ffffff;
    font-size: 12px;
    background-color: var(--accent-color-beige);
    border-radius: 12px;
    text-align: center;
    white-space: pre-line;
    pointer-events: none;
  }
`;
