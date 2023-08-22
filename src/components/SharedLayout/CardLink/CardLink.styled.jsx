import styled from 'styled-components';

export const StyledCardLink = styled.div`
  width: 267px;
  height: 363.091px;
  border-radius: 8.802px;
  border: 0.734px solid #cac4d0;
  background: #fff;
  display: flex;
  flex-direction: column;

  margin-bottom: 162px;

  & .card-link {
    padding: 0px 31px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;
    justify-content: flex-end;
  }
  & .card-link-title {
    color: #111;
    font-size: 28px;
    font-weight: 500;
    line-height: 132%; /* 36.96px */
  }
  & .card-button-panel {
  }
  & .button-panel__see {
    width: 207px;
    height: 50px;
    padding: 8px 16px;
    border-radius: 25px;
    border: 0px solid #111;
    background: #53c5bd;
    margin-bottom: 27.18px;
  }
`;
