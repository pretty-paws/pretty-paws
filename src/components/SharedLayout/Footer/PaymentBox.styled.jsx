import styled from 'styled-components';

export const StyledSocialNetsBar = styled.div`
  flex: 1;
  right: -28px;
  top: 297px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  & .payment-bar__title {
    color: var(--accent-color-blue);
    font-size: 18px;

    font-weight: 500;
    line-height: 21.6px;
  }
`;
