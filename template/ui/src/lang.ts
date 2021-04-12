import { provide, inject, ref } from 'vue'
export const LANG_SYMBOL = Symbol('{{name}}Lang')

export const provideLang = (data: any, app?: any) => {
  if (app) {
    app.provide(LANG_SYMBOL, ref(data))
  } else {
    provide(LANG_SYMBOL, ref(data))
  }
}

export const useLang = () => {
  const lang = inject(LANG_SYMBOL) as any
  return lang
}

export const loadLang = async (locale: string, app?: any) => {
  const lang = ref({})
  provideLang(lang, app)
  try {
    const data = (await import(`./lang/${locale}.ts`)).default

    if (data) {
      if (lang?.value) {
        lang.value = data
      }
    }
  } catch (e) {
    throw new Error(`Failed to load ${locale} locale.`)
  }
}