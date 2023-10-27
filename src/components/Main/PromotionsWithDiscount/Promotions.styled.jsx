import styled from 'styled-components';

export const StyledPromotion = styled.section`
  display: flex;
  flex-direction: column;
  gap: 33px;
  position: relative;

  & .promotion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .promotions__card-container {
    display: flex;
    gap: 24px;
    overflow: hidden;
    width: 1140px;
  }

  .left-arrow {
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    top: 49%;
    left: -20px;
    z-index: 1000;
    border-radius: 100px;
    background: #fff;
    box-shadow: 0px 0px 6px 0px rgba(14, 36, 35, 0.1);

    svg {
      transform: rotate(90deg);
    }
  }

  .right-arrow {
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    top: 49%;
    right: -20px;
    z-index: 1000;
    border-radius: 100px;
    background: #fff;
    box-shadow: 0px 0px 6px 0px rgba(14, 36, 35, 0.073);

    svg {
      transform: rotate(-90deg);
    }
  }
`;
export const StyledCard = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(267px, 1fr));
  gap: 24px;
`;
