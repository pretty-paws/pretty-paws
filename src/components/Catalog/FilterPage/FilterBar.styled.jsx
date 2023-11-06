import styled from 'styled-components';

export const StyledFilterBar = styled.div`
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

  input:focus + .slider {
    /* box-shadow: 0 0 1px #2196f3; */
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
