export interface Language {
  lang: string
}

import { ref } from 'vue'
const lang = ref()

export const defineLang = (lang: Language) => {
  return lang
}

export const useLang = () => {
  return lang
}

export const loadLang = async (locale: string, app?: any) => {
  try {
    const data = (await import(`./lang/${locale}.ts`)).default

    if (data) {
      lang.value = data
    }
  } catch (e) {
    throw new Error(`Failed to load ${locale} locale.`)
  }
}