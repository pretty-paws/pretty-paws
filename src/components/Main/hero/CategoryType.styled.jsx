import styled from 'styled-components';
export const StyledCategoryType = styled.div`
  display: none;

  @media screen and (min-width: 834px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }
`;
export const StyledCategoryTypeContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: flex-start;
  // 768px//

  @media screen and (min-width: 768px) {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }

  // 1024//

  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0px 15px;
  }

  // 1240px//

  @media screen and (min-width: 1240px) {
    width: 1240px;
    padding: 0px 130px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0px 150px;
  }
`;
