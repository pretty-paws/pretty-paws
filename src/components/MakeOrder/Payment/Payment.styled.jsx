import styled from 'styled-components';

export const StyledPayment = styled.div`
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;

  .payment-title {
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

  .delivery__radio-btns {
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding: 16px 8px;
    margin: 8px 0 12px;
  }

  .radio_label {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    @media screen and (min-width: 834px) {
      font-size: 16px;
    }
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
`;
