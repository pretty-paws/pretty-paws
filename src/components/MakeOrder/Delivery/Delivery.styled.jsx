import styled from 'styled-components';

export const StyledDeliveryBack = styled.div`
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 24px;

  .delivery__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 14px 16px 18px;
  }

  .error-box {
    position: relative;
  }

  .delivery-error {
    position: absolute;
    left: 10px;
    bottom: -3px;
    color: #f64b15;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }

  .delivery-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 8px 8px 0px 0px;

    font-size: 16px;
    font-weight: 400;
    background: rgba(231, 169, 115, 0.5);
    svg {
      transform: rotate(90deg);
    }

    &.edit {
      background: var(--accent-color-beige);
      svg {
        transform: rotate(-90deg);
      }
    }
  }
`;

export const StyledDeliveryform = styled.div`
  .delivery_district {
    border-color: #53c5bd;
    border-radius: 8px;
    padding: 6px 12px;
    font-size: 14px;
    color: #6c6c6c;
    outline: none;
  }

  .delivery__radio-btns {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 8px 0 12px;
  }

  .radio_label {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  .radio-btn-box {
    display: flex;
    gap: 12px;

    margin-left: 10px;
  }

  input[type='radio'] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: #fff;
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    color: #53c5bd;
    width: 1.15em;
    height: 1.15em;
    border: 1px solid #53c5bd;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type='radio']::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #53c5bd;
  }

  input[type='radio']:checked::before {
    transform: scale(1);
  }

  .delivery__street,
  .delivery__house,
  .delivery__flat {
    font-family: IBM Plex Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }

  .label-input-block {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .delivery__house-flat-block {
    display: flex;
    gap: 16px;
  }
  .delivery__street-input,
  .delivery__house-input,
  .delivery__flat-input {
    outline: none;
    padding-left: 8px;
    border-radius: 8px;
    border: 1px solid #53c5bd;
    height: 42px;
    width: 100%;
  }

  .delivery__street-input::placeholder,
  .delivery__house-input::placeholder,
  .delivery__flat-input::placeholder {
    color: #6c6c6c;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
`;
