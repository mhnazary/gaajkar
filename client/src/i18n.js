import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fa: { translation: {} },
  ps: { translation: {} },
  en: { translation: {} },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fa', // زبان پیش‌فرض: دری
    fallbackLng: 'fa',
    interpolation: { escapeValue: false },
  });

export default i18n;