import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin-top: 86px;
  display: flex;
  align-items: center;
  gap: 37px;

  & .header-language-uk-icon {
    border-radius: 100%;
    cursor: pointer;
  }

  & .header__language-ua {
    cursor: pointer;
    position: relative;
    background-image: linear-gradient(
      180deg,
      #1809bd 0%,
      #1809bd 40.3%,
      #fce300 65.34%,
      #fce300 100%
    );

    background-size: 100%;
    background-repeat: repeat;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  & .header__language-ua::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -2;
    width: 48px;
    height: 48px;

    border-radius: 100%;
    background-image: linear-gradient(
      180deg,
      #1809bd 0%,
      #1809bd 40.3%,
      #fce300 65.34%,
      #fce300 100%
    );
  }

  & .header__language-ua::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 44px;
    height: 44px;

    border-radius: 100%;
    background-color: #fff;
  }

  & .header__login-button {
    padding: 14px 24px;
    border-radius: 99px;
    border: 2.5px solid var(--accent-color-blue);

    font-size: 13px;
    line-height: 1.5;
    color: var(--accent-color-blue);
    background-color: #fff;
    white-space: nowrap;
  }
`;
