import styled from 'styled-components';

export const StyledTooltip = styled.div`
  position: relative;
  & .tooltip {
    position: absolute;
    top: 30px;
    left: -100%;
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
