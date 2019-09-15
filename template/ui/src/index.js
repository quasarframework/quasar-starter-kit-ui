import { version } from '../package.json'

import Component from './component/Component'
import Directive from './directive/Directive'

export {
  version,

  {{#features.component}}Component{{#features.directive}},{{/features.directive}}{{#features.component}}
  {{#features.directive}}Directive,{{#features.directive}}
}

export default {
  version,

  {{#features.component}}Component{{#features.directive}},{{/features.directive}}{{#features.component}}
  {{#features.directive}}Directive,{{#features.directive}}

  install (Vue) {
    {{#features.component}}Vue.component(Component.name, Component){{#features.component}}
    {{#features.directive}}Vue.directive(Directive.name, Directive){{#features.directive}}
  }
}
