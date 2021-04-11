/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

import { IndexAPI } from '@quasar/app'

function extendConf (conf: any) {
  // register our boot file
  conf.boot.push('~quasar-app-extension-{{name}}/src/boot/register.ts')

  // make sure app extension files & ui package gets transpiled
  conf.build.transpileDependencies.push(/quasar-app-extension-{{name}}[\\/]src/)
{{#or componentCss directiveCss}}

  // make sure the stylesheet goes through webpack to avoid SSR issues
  conf.css.push('~quasar-ui-{{name}}/src/index.sass')
{{/or}}
}

export = function (api: IndexAPI) {
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith('quasar', '^2.0.0-beta.12')
  api.compatibleWith('@quasar/app', '^3.0.0-beta.12')

{{#features.component}}
  // Uncomment the line below if you provide a JSON API for your component
  // api.registerDescribeApi('{{componentName}}', '~quasar-ui-{{name}}/src/components/{{componentName}}.json')
{{/features.component}}{{#features.directive}}
  // Uncomment the line below if you provide a JSON API for your directive
  // api.registerDescribeApi('{{directiveName}}', '~quasar-ui-{{name}}/src/directives/{{directiveName}}.json')
{{/features.directive}}

  // We extend /quasar.conf.js
  api.extendQuasarConf(extendConf)
}