import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './global/GlobalStyles';
import { AuthProvider } from './store/AuthProvider';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <I18nextProvider i18n={i18next}>
      <BrowserRouter basename="/pretty-paws">
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
