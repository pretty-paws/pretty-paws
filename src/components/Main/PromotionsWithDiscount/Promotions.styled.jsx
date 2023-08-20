import styled from 'styled-components';

export const StyledPromotion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;

  & .promotion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const StyledCard = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(267px, 1fr));
  row-gap: 33px;
  column-gap: 24px;
`;
