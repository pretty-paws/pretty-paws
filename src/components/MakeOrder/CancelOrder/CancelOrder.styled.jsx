import styled from 'styled-components';

export const StyledCancelOrder = styled.div`
  .backdrop {
    position: absolute;
    z-index: 100000000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    background: #0e2423;
    overflow: hidden;
  }

  .popup {
    position: absolute;
    z-index: 10000000000;
    top: 230px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    background: #fff;
    text-align: center;
    @media screen and (min-width: 834px) {
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .confirmationPopup_edit {
    margin-bottom: 24px;
  }

  .confirmation-popup_title {
    font-size: 20px;
    font-weight: 500;
    line-height: 130%;
    margin-bottom: 14px;
  }

  .confirmation-popup_text {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 24px;
  }

  .button {
    border-radius: 100px;
    width: 100%;
    height: 52px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }

  .to-catalogue {
    margin-bottom: 16px;
    border: 0;
    background: #53c5bd;
  }

  .to-cabinet {
    border: 2px solid #53c5bd;
    background: #fff;
  }
`;
