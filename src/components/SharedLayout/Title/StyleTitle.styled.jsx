import styled from 'styled-components';

export const StyleTitle = styled.div`
  /* H_1 */
  h1 {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px; /* 120% */
  }

  /* H_2 */
  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 60px;

    @media screen and (min-width: 834px) {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;
