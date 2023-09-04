import styled from 'styled-components';
export const StyledHero = styled.section`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 162px;

  & .swiper {
    z-index: 0;
  }

  .swiper-slide {
    border-top: 7px solid #e7a973;
    border-bottom: 7px solid #e7a973;
  }
  & .hero-content {
    position: relative;
  }
  & .hero-content img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    max-height: 450px;
  }

  & .pagination-container {
    display: flex;
    gap: 24px;
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
  position: relative;
  cursor: pointer;

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
    background-color: #efefef;
    border-radius: 50%;
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
    background-color: #efefef;
    border-radius: 50%;
  }

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
  & .animals-bar-icon-box {
    height: 41px;
    width: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: #fff;
  }
  & .animals-bar-text {
    color: #fff;
    font-size: 25px;
    font-weight: 100;
    line-height: 33px; /* 132% */
  }
`;
