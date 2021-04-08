import { version } from '../package.json'

{{#features.component}}import Component from './components/Component'{{/features.component}}
{{#features.directive}}import Directive from './directives/Directive'{{/features.directive}}

function install (app) {
{{#features.component}}  app.component(Component.name, Component){{/features.component}}
{{#features.directive}}  app.directive(Directive.name, Directive){{/features.directive}}
}

export default {
  version,

{{#features.component}}  Component,{{/features.component}}
{{#features.directive}}  Directive,{{/features.directive}}

  install
}
