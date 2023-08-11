import styled from 'styled-components';

export const StyledCategoryTypeItem = styled.div`
  position: absolute;
  display: flex;
  border-radius: 70px;
  border: 1px solid #53c5bd;
  background: rgba(255, 255, 255, 0.5);
  padding: 10px 14px;
  align-items: center;
  width: 186px;
  height: 48px;
  transform: translate(${props => props.x}px, ${props => props.y}px);

  &:hover {
    cursor: pointer;
  }

  & .category-type__img {
    width: 40px;
    height: 40px;
  }

  & .category-type__text {
    font-size: 13px;
    line-height: 19.5px;
  }
`;
