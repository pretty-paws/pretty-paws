import styled from 'styled-components';

export const StyledFilterBar = styled.div`
  /* margin-top: 43px; */
  width: 267px;
  padding: 16px 0;
  background-color: #fff;

  .filter-bar__all-filters {
    /* height: 50vh;
    overflow-y: scroll; */
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
    gap: 16px;
    padding: 0 8px 12px;
  }

  .filter__sale-box {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
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

    /* border-bottom: 1px solid #d6d6d6; */
  }

  .filter__min-max::after {
    position: absolute;
    top: 60px;
    left: 116px;
    content: '';
    width: 35px;
    height: 1px;
    background-color: var(--font-color-darkgray);
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
    left: 158px;
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
    gap: 22px;
    padding: 11px 8px 4px;
    /* border-bottom: 1px solid #d6d6d6; */
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
    padding: 12px 8px;
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    border-bottom: 1px solid #d6d6d6;
  }

  .filter-plus {
    fill: #e7a973;
  }

  .filter__button-container {
    margin: 24px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .filter__button-apply,
  .filter__button-clear {
    border-radius: 100px;
    width: 235px;
    height: 52px;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
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
