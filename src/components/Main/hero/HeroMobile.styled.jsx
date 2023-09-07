import styled from 'styled-components';
export const StyledHeroMobile = styled.section`
  position: relative;
  max-height: 500px;
  margin-bottom: 100px;
  & span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba(14, 36, 35, 0.55) 0%,
      rgba(14, 36, 35, 0.55) 100%
    );
  }
  & .promotion__img-bg {
    min-width: 320px;
    height: 500px;
    object-fit: cover;
    object-position: 50%;
  }
`;
