import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
${normalize}

:root {
  --accent-color-blue: #53C5BD;
  --accent-color-beige: #E7A973;
  --accent-color-orange: #F64B15;

  --font-color-black: #111;
  --font-color-gray: #9e9e9e;
  --font-color-white: #FFF;
  
}

*, *::before, *::after {
  box-sizing: border-box;
}


body {
  font-family: 'IBM Plex Sans', sans-serif;
  color: var(--font-color-black);
  background-color: #EFEFEF;
  
 
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
