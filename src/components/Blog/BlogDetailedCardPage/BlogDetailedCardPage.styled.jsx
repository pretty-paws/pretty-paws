import styled from 'styled-components';
export const StyledBlogPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;

  & .more-read {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 834px) {
    }
  }

  & .more-read__grid {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, 343px);
    @media screen and (min-width: 834px) {
      gap: 15.5px;
      grid-template-columns: repeat(auto-fit, 241px);
    }
    @media screen and (min-width: 1440px) {
      gap: 24px;
      grid-template-columns: repeat(auto-fit, 267px);
    }
  }

  & .blog-page {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  & .page__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border-radius: 8px;
    background-color: #fff;
    margin-bottom: 160px;
  }

  & .page__header {
    display: flex;
    gap: 16px;
    flex-direction: column;
  }
  & .page__heade-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
    @media screen and (min-width: 1440px) {
      gap: 8px;
    }
  }
  & .header-text__category {
    width: fit-content;
    display: flex;
    height: 24px;
    padding: 8px;
    justify-content: left;
    align-items: center;
    border-radius: 8px;
    background: var(--beige, #e7a973);
  }
  & .category-text {
    color: var(--font-color-black);
    font-family: 'IBM Plex Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  }
  & .header-text__title {
    font-weight: 700;
    margin-bottom: 0px;
  }

  & .page__header-info {
    display: flex;
    gap: 24px;
    align-items: center;
  }
  & .info__date-block {
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }
  & .info__date-time {
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }
  & .page__info-clock {
  }

  & .page__body {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  & .page__content {
    font-family: Arial, sans-serif;
  }

  & .page__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ul {
    padding-left: 25px;
    /* padding: -5px; */
  }
  ul > li {
    /* text-indent: 0pt; */
    /* list-style: circle; */
    /* padding-left: 5px; */
  }
  ol > li {
    list-style: decimal;
  }
  & .page__content > p,
  & .page__content > ul {
  }

  & blockquote {
    border-left: 4px solid #53c5bd;
    margin-left: 10px;
    padding-left: 10px;
  }
  .table-bordered {
    border: 1px solid #000; /* Цвет и толщина границы */
    border-collapse: collapse; /* Объединение границ */
  }

  .table-bordered td,
  .table-bordered th {
    border: 1px solid #000; /* Границы для ячеек и заголовков */
    padding: 4px;
    word-wrap: break-word;
    @media screen and (min-width: 1440px) {
      padding: 8px; /* Отступ внутри ячеек */
    }
  }
`;
