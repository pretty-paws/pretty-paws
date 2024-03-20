import styled from 'styled-components';

export const StyledFilterBar = styled.div`
  margin-top: 80px;
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 10000000000;
  width: 100%;
  height: 80vh;
  padding: 16px 16px;
  background-color: #fff;
  overflow-y: scroll;

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    margin-top: 0;
    top: 0;
    left: 0;
    width: 385px;
    padding: 10px 40px 16px;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 0.3s ease;

    &.active {
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0px;
    position: static;
    z-index: 1;
    height: fit-content;
    width: 267px;
    padding: 16px 0;
  }

  .filter__mobile-top-bar {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #efefef;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

    .filter-icon {
      transform: rotate(180deg);
    }

    @media screen and (min-width: 834px) {
      gap: 28px;
      font-size: 20px;
      font-weight: 500;

      svg {
        fill: #6c6c6c;
      }
    }
  }

  .filter-bar__all-filters {
    overflow-y: auto;
    /* height: 100%; */

    @media screen and (min-width: 834px) {
      max-height: 100vh;
    }

    @media screen and (min-width: 1440px) {
      overflow-y: auto;
      max-height: max-content;
      height: 100%;
    }
  }
  & .filter-bar__all-filters::-webkit-scrollbar {
    width: 5px;
  }

  & .filter-bar__all-filters::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  & .filter-bar__all-filters::-webkit-scrollbar-thumb {
    background-color: #bfbfbf;
    border-radius: 3px;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 20px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efefef;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 0;
    bottom: 0;
    background-color: white;
    border: 1px solid #53c5bd;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    color: #53c5bd;
  }

  input:checked + .slider:before {
    background-color: #53c5bd;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .filter__sale-new-box {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 0 8px 12px;

    @media screen and (min-width: 1440px) {
      gap: 16px;
    }
  }

  .filter__sale-box {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    @media screen and (min-width: 1440px) {
      font-size: 14px;
      line-height: 18px;
    }
  }

  .filter__price-box {
    margin-top: 16px;
    height: 56px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--accent-color-beige);

    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  .filter__price-arrow {
    transform: rotate(-90deg);
  }

  .filter__price-arrow-hide {
    transform: rotate(90deg);
  }

  .filter__min-max {
    padding: 12px 8px 10px;
    display: flex;
    align-items: center;
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .filter__min-max::after {
    position: absolute;
    content: '';
    width: 35px;
    height: 1px;
    background-color: var(--font-color-darkgray);

    top: 65%;
    left: 50%;
    transform: translate(-50%, 50%);
  }

  .filter__min-label,
  .filter__max-label {
    /* margin-top: 4px; */
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    position: absolute;
    top: 20px;
  }

  .filter__max-label {
    right: 80px;
    @media screen and (min-width: 1440px) {
      left: 158px;
    }
  }

  .filter__min-input,
  .filter__max-input {
    margin-top: 34px;
    width: 100px;
    height: 42px;
    padding: 12px 16px;
    border: 1px solid var(--font-color-darkgray);
  }
  /*  */
  .filter__list {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    gap: 34px;
    padding: 19px 8px 4px;
    /* border-bottom: 1px solid #d6d6d6; */
    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      padding: 11px 8px 4px;
      gap: 22px;
    }
  }

  .filters__list-item {
    display: flex;
    justify-content: space-between;
  }

  .filters__list-item-amount {
    color: #6c6c6c;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  .filters__list-label-box {
    display: flex;
    align-items: baseline;
  }

  .filter-check {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 10;
    pointer-events: none;
  }

  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
  }

  .filters__custom-checkbox {
    padding-left: 38px;
    position: relative;
    cursor: pointer;
  }

  .filters__custom-checkbox::after {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 2px solid #d6d6d6;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1;
  }

  input.checked::before {
    content: '';
    width: 24px;
    height: 24px;
    background-color: #53c5bd;
    border: 0;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 2;
  }

  .filter__show-more {
    padding: 26px 8px 16px;
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    border-bottom: 1px solid #d6d6d6;

    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      padding: 12px 8px;
    }
  }

  .filter-plus {
    fill: #e7a973;
  }

  .filter__button-container {
    margin: 24px 16px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    @media screen and (min-width: 834px) {
    }

    @media screen and (min-width: 1440px) {
      gap: 24px;
    }
  }

  .filter__button-apply,
  .filter__button-clear {
    border-radius: 100px;
    width: 100%;
    height: 52px;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    @media screen and (min-width: 834px) {
      width: 235px;
    }

    @media screen and (min-width: 1440px) {
      width: 235px;
    }
  }

  .filter__button-apply {
    border: 0;
    background-color: var(--accent-color-blue);
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }
  }

  .filter__button-clear {
    border: 2px solid var(--accent-color-blue);
    background-color: #fff;
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--hover-blue);
    }
  }
`;
