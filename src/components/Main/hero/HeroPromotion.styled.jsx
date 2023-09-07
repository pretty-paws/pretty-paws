import styled from 'styled-components';
export const StyledHeroPromotion = styled.div`
  position: absolute;
  top: 150px;
  left: 0;

  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  & .promotion__text {
    display: flex;
    max-height: 107px;
    max-width: 343px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  & .promotion__title {
    color: var(--font-color-white);
    font-size: 24px;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
  }
  & .promotion__desc {
    color: var(--font-color-white);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 120% */
  }
  & .promotion__btn {
    max-width: 343px;
    width: 100%;
    border: 0px;
    padding: 16px 32px;
    border-radius: 100px;
    background: var(--turquoise, #53c5bd);

    color: var(--black, #0e2423);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px; /* 125% */
  }
`;
