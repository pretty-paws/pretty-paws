import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyles } from './global/GlobalStyles';
import { GlobalContainer } from './global/GlobalContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <GlobalContainer>
      <App />
    </GlobalContainer>
  </React.StrictMode>
);
