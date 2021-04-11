import { provide, inject, ref } from 'vue'
export const LANG_SYMBOL = Symbol('{{name}}Lang')
import { Language } from './lang/lang'

export const provideLang = (data: any, app?: any) => {
  if (app) {
    app.provide(LANG_SYMBOL, ref(data))
  } else {
    provide(LANG_SYMBOL, ref(data))
  }
  console.log(`%c[{{name}}] Provided lang ${data.lang}`, 'color: green')
}

export const useLang = (app?: any) => {
  let lang
  if (!app) {
    lang = inject(LANG_SYMBOL) as any
  } else {
    lang = undefined
  }
  return lang
}

export const loadLang = async (locale: string, app?: any) => {
  const lang = useLang(app)
  try {
    const data = (await import(`./lang/${locale}.ts`)).default

    if (data) {
      if (lang?.value) {
        lang.value = data
      } else {
        provideLang(data, app)
      }
    }
  } catch (e) {
    throw new Error(`Failed to load ${locale} locale.`)
  }
}