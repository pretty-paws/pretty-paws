import styled from 'styled-components';

export const StyledCardBlog = styled.div`
  min-width: 267px;
  max-width: 267px;
  height: 486px;
  /* margin-bottom: 24px; */
  align-items: center;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;

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
  & .blog__img-container {
    overflow: hidden;
    position: relative;
    border-radius: 8px 8px 0px 0px;
  }
  & .blog__img {
    display: block;
    transition: transform 0.25s;
  }
  & .blog__content {
    display: flex;
    padding: 0px 16px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    align-self: stretch;
    margin-bottom: 24px;
  }
  & .blog__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
  }
  & .blog__title {
    color: var(--font-color-black);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px; /* 125% */
  }
  & .blog__desc {
    color: var(--font-color-black);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
  & .blog__info {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  & .blog__info-text {
    color: var(--font-color-darkgray);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  }
  & .blog__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 2px solid var(--accent-color-blue);
    background: #fff;
    padding: 16px 32px;
    text-align: center;
  }
`;
