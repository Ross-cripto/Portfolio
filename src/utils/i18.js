import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) 
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    fallbackLng: 'en', // Idioma por defecto en caso de que no se detecte o no se encuentre traducción
    debug: false, // Activa el modo debug solo en desarrollo
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: '../locales/{{lng}}/{{ns}}.json', // Ruta de los archivos de traducción
    },
    react: {
      useSuspense: true, 
    },
  });

export default i18n;
