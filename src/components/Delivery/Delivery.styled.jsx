import styled from 'styled-components';

export const StyledDeliveryContainer = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  .delivery__notification {
    margin: 40px 0 48px;
    position: relative;

    padding: 40px;
    border-radius: 8px;
    background: var(--accent-color-beige);

    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      width: 939px;
    }
  }

  .delivery-icon {
    position: absolute;
    top: 16px;
    left: 16px;
  }

  .delivery__notification-header {
    margin-bottom: 16px;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    @media screen and (min-width: 834px) {
      font-size: 24px;
    }
  }

  .delivery__section-header-box {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .delivery__section-header {
    cursor: pointer;

    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    @media screen and (min-width: 834px) {
      font-size: 24px;
    }
  }

  .delivery-section {
    margin-bottom: 32px;
  }

  .delivery__list {
    margin: 0 30px 15px;
  }

  .delivery__list li {
    list-style-type: disc;
  }

  p {
    margin-bottom: 15px;
  }

  h4 {
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 15px;

    @media screen and (min-width: 834px) {
      font-size: 18px;
      font-weight: 700;
    }
  }
  .delivery-arrow-icon {
    transition: all var(--transition);
  }
  .opened {
    transform: rotate(90deg);
  }
`;
