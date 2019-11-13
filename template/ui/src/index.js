import { version } from '../package.json'

{{#features.component}}import Component from './components/Component'{{/features.component}}
{{#features.directive}}import Directive from './directives/Directive'{{/features.directive}}

export {
  version,

  {{#features.component}}Component{{#features.directive}},{{/features.directive}}{{/features.component}}
  {{#features.directive}}Directive{{/features.directive}}
}

export default {
  version,

  {{#features.component}}Component,{{/features.component}}
  {{#features.directive}}Directive,{{/features.directive}}

  install (Vue) {
    {{#features.component}}Vue.component(Component.name, Component){{/features.component}}
    {{#features.directive}}Vue.directive(Directive.name, Directive){{/features.directive}}
  }
}
