import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import nl from './locales/nl.json'

function getBrowserLang(): string {
  if (typeof navigator === 'undefined') return 'en'
  const lang =
    (navigator as any).language || (navigator as any).userLanguage || 'en'
  return lang.startsWith('nl') ? 'nl' : 'en'
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    nl: { translation: nl },
  },
  lng: getBrowserLang(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
