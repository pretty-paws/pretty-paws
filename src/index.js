import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './global/GlobalStyles';
import { GlobalContainer } from './global/GlobalContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <GlobalContainer>
      <BrowserRouter basename="/pretty-paws">
        <App />
      </BrowserRouter>
    </GlobalContainer>
  </React.StrictMode>
);
