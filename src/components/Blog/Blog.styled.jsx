import styled from 'styled-components';
export const StyledBlog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;

  & .blog__block {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  & .blog__categories-block {
    display: flex;
    align-items: start;
    gap: 16px;
    width: 343px;
    width: 100%;
    height: 48px;
    overflow-y: hidden;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    cursor: pointer;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    /* overflow: auto; */
    /* overflow-x: auto; */
    /* overflow-y: clip; */

    @media screen and (min-width: 1440px) {
      gap: 24px;
      flex-wrap: wrap;
      height: auto;
    }
  }
  & .blog__categories-block::-webkit-scrollbar {
    display: none;
  }

  & .categories__item {
    /* min-width: 88px; */
    /* width: 100%; */
    /* min-height: 18px; */
    /* display: flex; */
    /* word-wrap: normal; */

    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid var(--grey, #6c6c6c);
    background: var(--white, #fff);

    /* @media screen and (min-width: 1440px) {
      
      cursor: pointer;
    } */
  }

  & .active {
    border-radius: 8px;
    border: 2px solid var(--beige, #e7a973);
    background: var(--beige, #e7a973);
  }
  & .blog__grid-cards {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, 343px);
    /* grid-template-columns: repeat(auto-fit, minmax(241px, 1fr)); */
    @media screen and (min-width: 834px) {
      gap: 15.5px;
      grid-template-columns: repeat(auto-fit, 241px);
      /* grid-template-columns: repeat(auto-fit, minmax(241px, 1fr)); */
    }
    @media screen and (min-width: 1440px) {
      gap: 24px;
      grid-template-columns: repeat(auto-fit, 267px);
    }
  }

  & .blog__card-none {
    width: 50%;
  }

  & .blog__pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .pagination__btn {
    height: 40px;
    width: 40px;
    padding: 8px;
    border: none;
    color: var(--font-color-darkgray);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
  & .pagination__item {
    padding: 2px 7px;
  }
  & .active-pag {
    border-radius: 100px;
    background: var(--accent-color-blue);
    color: var(--font-color-black);
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px; /* 125% */
  }
  & .pagination__arrow-prev,
  & .pagination__arrow-next {
    cursor: pointer;
  }
  & .pagination__arrow-prev {
    transform: rotate(180deg);
  }
  & .blog__more-btn {
    width: 343px;
    padding: 16px 32px;
    border-radius: 100px;
    border: 2px solid var(--turquoise, #53c5bd);
    background: #fff;
    color: var(--black, #0e2423);
    align-self: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px; /* 125% */
    transition: background-color 1ms 8ms;

    &:hover {
      background-color: var(--hover-blue);
    }
  }
`;

export const StyledCategories = styled.div``;
