import styled from 'styled-components';

export const StyledAgreement = styled.div`
  margin-bottom: 44px;
  .agreement__label {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
    align-items: center;
    position: relative;
  }

  .agreement__check {
    position: absolute;
  }
  input[type='checkbox'] {
    flex-shrink: 0;
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    width: 24px;
    height: 24px;

    margin-right: 8px;
    background-color: #53c5bd;
    outline: none;
    cursor: pointer;
  }

  input.checked {
    cursor: pointer;
  }

  .agreement__text {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
`;
