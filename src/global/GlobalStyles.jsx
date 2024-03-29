import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
${normalize}

:root {
  --accent-color-blue: #53C5BD;
  --accent-color-darkblue: #005A9A;
  --accent-color-beige: #E7A973;
  --accent-color-orange: #F64B15;

  --hover-blue: #17D6C8;
  --background-color: #EFEFEF;

  --font-color-black: #0E2423;
  --font-color-gray: #9e9e9e;
  --font-color-darkgray: #6C6C6C;
  --font-color-white: #FFF;

  --transition: 250ms cubic-bezier(0.4, 0, 0.2, 1)
}

@media screen and (-webkit-min-device-pixel-ratio:0) {
  @supports (-webkit-touch-callout: none) {
    button {
      color:  #0E2423;
    }
   
  }
}


*, *::before, *::after {
  box-sizing: border-box;
}


body {
  font-family: 'IBM Plex Sans', sans-serif;
  color: var(--font-color-black);
  background-color: #EFEFEF;
  position: relative;

  .menu-opened {
  max-height: 100vh;
  overflow: hidden;
}
    
}

.header {
  position: sticky;
  z-index: 1000;
  top: 0px;
  height: 160px;
  background-color: var(--background-color);
  transition-property: all; 
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

    @media screen and (min-width: 834px) {
       height: 88px;
  }

  @media screen and (min-width: 1440px) {
    height: 160px;
  }
}

.header.show {
  top: 0;
}

.header.hide {
  top: -160px;

    @media screen and (min-width: 834px) {
      height: 88px;
  }

  @media screen and (min-width: 1440px) {
    height: 160px;
  }
}

.header .down {
  top: -150px;

    @media screen and (min-width: 834px) {
      height: 88px;
  }

  @media screen and (min-width: 1440px) {
    top: -160px;
  }
}


li {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--font-color-black);
  cursor: pointer;
  
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}

html {
  scroll-behavior: smooth;
}

div {
  box-sizing: border-box;
}

button {
  cursor: pointer;
}
`;
