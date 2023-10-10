import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationUA from './translation/locales/UA/translation.json';
import translationEN from './translation/locales/EN/translation.json';

const resources = {
  ua: {
    translation: translationUA,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'ua',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
