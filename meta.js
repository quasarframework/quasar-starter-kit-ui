const { helpers, complete } = require('./utils')

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name (npm name)',
    },

    productName: {
      type: 'string',
      required: true,
      message: 'Project product name',
      default: 'MyComponent'
    },

    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Quasar Framework app',
    },

    author: {
      type: 'string',
      message: 'Author',
    },

    features: {
      type: 'checkbox',
      message: 'Pick the features that you want:',
      choices: [
        {
          name: 'A component',
          value: 'component',
          checked: true
        },
        {
          name: 'A directive',
          value: 'directive'
        },
        {
          name: 'A Quasar App Extension',
          value: 'ae',
          checked: true
        }
      ]
    },

    componentCss: {
      type: 'confirm',
      when: 'features.component',
      message: 'Do you need a stylesheet for your component?',
      default: true
    },

    componentForm: {
      type: 'list',
      when: 'features.component',
      message: 'Pick component form:',
      default: 'vue',
      choices: [
        {
          name: '.vue file',
          value: 'vue',
          checked: true
        },
        {
          name: '.js file (render function)',
          value: 'js'
        }
      ]
    },

    directiveCss: {
      type: 'confirm',
      when: 'features.directive',
      message: 'Do you need a stylesheet for your directive?',
      default: true
    }
  },

  filters: {
    'ui/src/component/**/*': 'features.component',
    'ui/src/directive/**/*': 'features.directive',
    'ui/src/component/Component.sass': 'features.component && componentCss',
    'ui/src/component/Component.js': `features.component === 'js'`,
    'ui/src/component/Component.vue': `features.component === 'vue'`,
    'ui/src/directive/Directive.sass': 'features.directive && directiveCss',
    'ui/src/**/*.sass': '(features.component && componentCss) || (features.directive && directiveCss)',
    'build/script.css.js': '(features.component && componentCss) || (features.directive && directiveCss)'
  },

  helpers,
  complete
}
