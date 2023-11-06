import styled from 'styled-components';

export const StyledCategoryMenu = styled.div`
  position: absolute;
  pointer-events: auto;
  top: 48px;
  /* top: 100%; */
  left: 0;
  border: 1px solid var(--grey_light, #d6d6d6);
  box-shadow: 0px 0px 6px 0px rgba(14, 36, 35, 0.1);
  padding: 40px 24px;
  border: 1px solid #ddd;
  height: 544px;
  width: 384px;
  background: #efefef;
  border-radius: 8px;
  z-index: 150;

  /* visibility: hidden; */
  /* opacity: 0; */
  transition: visibility 0s, opacity 0.3s ease-in-out;

  visibility: ${props => (props.data__visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.data__visible ? 1 : 0)};
  /* &:hover,
  &[data__visible='true'] {
    visibility: visible;
    opacity: 1;
  } */
  & .categores__content {
    display: inline-flex;
    align-items: flex-start;
    gap: 32px;
  }
  & .categores__animal {
    width: 100%;
  }

  & .categores__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  & .category__link {
    display: flex;
    align-items: center;
  }
  & .categores__list-item {
    padding: 10px;
    color: var(--font-color-black);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px; /* 125% */
    position: relative;
    width: 100%;

    &:hover::after {
      position: absolute;
      bottom: -10px;
      left: 0;
      content: '';
      width: 95%;
      height: 3px;
      background-color: var(--accent-color-blue);
    }
  }
  & .navigation-icon {
    position: absolute;
    right: 12px;
  }

  /* SUB CATEGORY */
  & .subcategores {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: flex-start;
  }

  & .subcategores__link {
    background: var(--accent-color-blue);
    display: flex;
    gap: 12px;
    min-height: 40px;
    align-items: center;
    justify-content: flex-start;
  }

  & .subcategores__title {
    color: var(--font-color-black);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px; /* 125% */
    padding: 10px;
    width: 100%;
  }
  .subcategores__navigation-icon {
    rotate: 180deg;
    margin: 8px;
  }

  & .subcategores__list {
    padding-left: 52px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  & .subcategores__list-item {
    padding: 10px;
    color: var(--font-color-black);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px; /* 125% */
    position: relative;
    &:hover::after {
      position: absolute;
      bottom: -10px;
      left: 0;
      content: '';
      width: 95%;
      height: 3px;
      background-color: var(--accent-color-blue);
    }
  }
`;
