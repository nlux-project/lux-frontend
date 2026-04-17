import en from './locales/en.json'
import nl from './locales/nl.json'

type Locales = Record<string, string>

    const locales: Record<string, Locales> = {
      en,
      nl,
    }

function getLang():
    string {
      if (typeof navigator === 'undefined') return 'en'
        const lang =
            navigator.language || (navigator as any).userLanguage || 'en'
        if (lang.startsWith('nl')) return 'nl'
        return 'en'
    }

const active = getLang()

export function t(key: string, fallback?: string): string {
  const val = (locales[active] && (locales[active][key] as string)) ||
    (locales.en && (locales.en[key] as string))
  return val || fallback || key
}

export default {t} import i18n from 'i18next'
import{initReactI18next} from 'react-i18next'

import en from './locales/en.json'
import nl from './locales/nl.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    nl: {translation: nl},
  },
  fallbackLng: 'en',
  interpolation: {escapeValue: false},
})

export default i18n
