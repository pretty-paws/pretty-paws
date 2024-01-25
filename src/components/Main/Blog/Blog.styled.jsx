import styled from 'styled-components';

export const StyledBlog = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 100px;
  margin-bottom: 100px;

  @media screen and (min-width: 834px) {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 156px;
    margin-bottom: 156px;
  }
  .blog-title-box {
    text-align: center;
    @media screen and (min-width: 834px) {
      text-align: left;
    }
  }

  & .swiper {
    position: static;
    padding-bottom: 16px;
  }

  & .swiper-pagination-bullets,
  .swiper-pagination-clickable,
  .swiper-pagination-horizontal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 75px;
    align-items: center;
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }
  & .swiper-pagination-bullet
  /* .swiper-pagination-bullet-active-prev, */
  /* .swiper-pagination-bullet-active-next { */ {
    width: 12px;
    height: 12px;
    background-color: #d6d6d6;
    opacity: 1;
  }

  & .swiper-pagination-bullet-active {
    width: 16px;
    height: 16px;
    background-color: #e7a973;
  }

  & .blog__card-container {
    display: flex;
    gap: 15.5px;
    overflow: hidden;
    width: auto;
    overflow-x: scroll;
    @media screen and (min-width: 1440px) {
      gap: 24px;
    }
  }
  .left-arrow {
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    top: 35%;
    left: -20px;
    z-index: 100;
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
    top: 35%;
    right: -20px;
    z-index: 100;
    border-radius: 100px;
    background: #fff;
    box-shadow: 0px 0px 6px 0px rgba(14, 36, 35, 0.1);
    svg {
      transform: rotate(-90deg);
    }
  }
  /* 
  & .promotions__button-container {
    display: flex;
    justify-content: center;
  } */

  & .blog__button-container {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .blog__button {
    padding: 16px 32px;
    width: 235px;
    border-radius: 100px;
    border: none;
    background-color: var(--accent-color-blue);
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }
  }
`;
