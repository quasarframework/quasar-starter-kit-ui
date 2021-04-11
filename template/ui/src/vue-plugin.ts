{{#features.component}}import Component from './components/Component.vue'{{/features.component}}
{{#features.directive}}import Directive from './directives/Directive'{{/features.directive}}
import { provideLang, useLang, loadLang } from './lang'

// const version = __UI_VERSION__

function install (app: any, options: { lang: string }) {
  loadLang(options?.lang || 'en')
{{#features.component}}  app.component(Component.name, Component){{/features.component}}
{{#features.directive}}  app.directive(Directive.name, Directive){{/features.directive}}
}

export {
  // version,
{{#features.component}}  Component,{{/features.component}}
{{#features.directive}}  Directive,{{/features.directive}}
  install
}
