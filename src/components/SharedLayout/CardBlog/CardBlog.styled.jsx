import styled from 'styled-components';

export const StyledCardBlog = styled.div`
  display: grid;
  gap: 12px;
  min-width: 343px;
  /* justify-items: center; */
  border-radius: 8px;
  background: var(--font-color-white);
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 834px) {
    min-width: 241px;
    padding-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 267px;
    &:hover {
      & .blog__img {
        transform: scale(1.2);
      }
      & .blog__info-text {
        font-size: 14px;
      }
      & .blog__btn {
        background-color: var(--hover-blue);
      }
    }
  }

  & .blog__img-container {
    height: 100%;
    min-height: 160px;
    max-height: 160px;
    align-self: stretch;
    overflow: hidden;
    /* background: url(<path-to-image>), lightgray 50% / cover no-repeat; */

    @media screen and (min-width: 834px) {
      min-height: 185px;
    }
  }

  & .blog__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 8px 8px 0px 0px;
    transition: transform 0.25s;
  }

  & .blog__category {
    display: flex;
    height: 24px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 8px;
    top: 8px;
    border-radius: 8px;
    background: var(--beige, #e7a973);
  }

  & .blog__category-text {
    color: var(--font-color-black);
    text-align: center;
    font-family: 'IBM Plex Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  }

  /* CONTENT CARD */
  & .blog__content {
    display: grid;
    gap: 12px;
    padding: 0px 16px 16px 16px;
    @media screen and (min-width: 834px) {
      padding: 0 16px;
    }
    @media screen and (min-width: 1440px) {
      gap: 24px;
    }
  }
  & .blog__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
    @media screen and (min-width: 834px) {
      gap: 8px;
    }
    @media screen and (min-width: 1440px) {
      gap: 12px;
    }
  }
  & .blog__title {
    height: 40px;
    color: var(--font-color-black);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px; /* 125% */
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    @media screen and (min-width: 834px) {
      height: 78px;
      align-self: stretch;
      font-size: 20px;
      line-height: 130%; /* 26px */
    }

    @media screen and (min-width: 1440px) {
      height: 40px;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px; /* 125% */
    }
  }
  & .blog__desc {
    height: 90px;
    align-self: stretch;
    overflow: hidden;
    color: var(--black, #0e2423);
    text-overflow: ellipsis;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    @media screen and (min-width: 834px) {
      height: 120px;
      font-size: 16px;
      line-height: 20px; /* 125% */
      -webkit-line-clamp: 6;
    }
  }
  & .blog__info {
    display: flex;
    align-items: center;
    justify-items: center;
    /* justify-content: center; */
    gap: 4px;
    @media screen and (min-width: 834px) {
      gap: 8px;
    }
    @media screen and (min-width: 1440px) {
      margin-top: -12px;
    }
  }
  & .blog__info-clock {
    height: 16px;
    width: 16px;
    @media screen and (min-width: 834px) {
      height: 24px;
      width: 24px;
    }
  }
  & .blog__info-text {
    color: var(--font-color-darkgray);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px; /* 133.333% */

    @media screen and (min-width: 834px) {
      font-size: 14px;
      line-height: 150%; /* 21px */
    }

    @media screen and (min-width: 1440px) {
      font-size: 12px;
      line-height: 16px; /* 133.333% */
    }
  }
  & .blog__btn-wrapp {
    justify-self: center;
  }
  & .blog__btn {
    padding: 8px 32px;
    border-radius: 100px;
    border-color: var(--font-color-white);
    border: 2px solid var(--accent-color-blue);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px; /*125% */
    background: #fff;
  }
`;
