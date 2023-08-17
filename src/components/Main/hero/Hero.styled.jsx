import styled from 'styled-components';
export const StyledHero = styled.section`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 162px;

  & .swiper {
    z-index: 0;
  }
  & .hero__img {
    width: 100%;
    max-height: 598px;
    border-top: 7px solid #e7a973;
    border-bottom: 7px solid #e7a973;
  }
`;

export const AnimalsBarContainer = styled.div`
  display: flex;
  & .swiper-pagination {
    position: relative;
    display: flex;
    gap: 25px;
    align-items: flex-start;
    bottom: 0;

    // 768px//

    @media screen and (min-width: 768px) {
      width: 768px;
      margin-left: auto;
      margin-right: auto;
    }

    // 1024//

    @media screen and (min-width: 1024px) {
      width: 1024px;
      padding: 0px 15px;
    }

    // 1240px//

    @media screen and (min-width: 1240px) {
      width: 1240px;
      padding: 0px 130px;
    }

    @media screen and (min-width: 1440px) {
      width: 1440px;
      padding: 0px 150px;
    }
  }
`;

export const StyleAnimalsBar = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  /* background-color: #53c5bd; */
  background-color: ${props => (props.isActive ? '#E7A973' : '#53c5bd')};

  border-radius: 42px;
  padding: ${props =>
    props.isActive ? '7px 12px 7px 12px' : '7px 12px 12px 12px'};
  /* padding: 15px; */
  position: relative;
  cursor: pointer;

  & span {
    display: contents;
  }
  & span::before {
    content: '';
    position: absolute;
    top: 0px;
    left: -10px;
    /* background-color: #53c5bd; */
    background-color: ${props => (props.isActive ? '#E7A973' : '#53c5bd')};

    width: 40px;
    height: 25px;
    z-index: -2;
  }

  &:first-child::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: -37.7px;
    top: -6px;
    transform: rotate(0deg);
    -webkit-clip-path: ellipse(25% 40% at 50% 50%);
    clip-path: ellipse(25% 40% at 50% 50%);
    width: 50.5px;
    height: 60px;
    /* background-color: #9b9898aa; */
    background-color: #fff;
    border-radius: 50%;
  }

  & span::after {
    content: '';
    position: absolute;
    top: 0px;
    right: -10px;
    /* background-color: #53c5bd; */
    background-color: ${props => (props.isActive ? '#E7A973' : '#53c5bd')};
    width: 40px;
    height: 25px;
    z-index: -1;
  }
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    right: -37.7px;
    top: -6px;
    transform: rotate(0deg);
    -webkit-clip-path: ellipse(25% 40% at 50% 50%);
    clip-path: ellipse(25% 40% at 50% 50%);
    width: 50.5px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
  }
  & .animals-bar-icon-box {
    position: relative;
  }

  & .animals-bar-icon {
    position: relative;
    z-index: 15;
  }

  & .animals-bar-icon-box::after {
    content: '';
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 41px;
    height: 41px;
    background-color: #fff;
    border-radius: 100%;
  }

  & .animals-bar-text {
    color: #fff;
    font-size: 25px;
    font-weight: 100;
    line-height: 33px; /* 132% */
  }
`;
