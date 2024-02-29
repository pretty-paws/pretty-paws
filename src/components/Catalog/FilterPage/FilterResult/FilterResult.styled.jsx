import styled from 'styled-components';

export const StyledFilterResults = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    margin-top: 40px;
    gap: 14px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;
