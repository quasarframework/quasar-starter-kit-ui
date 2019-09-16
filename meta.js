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
      message: 'Pick what you want to build:',
      choices: [
        {
          name: 'Vue component',
          value: 'component',
          checked: true
        },
        {
          name: 'Vue directive',
          value: 'directive'
        },
        {
          name: 'Quasar App Extension',
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
    'ui/src/directive/Directive.sass': 'features.directive && directiveCss',
    'ui/src/**/*.sass': '(features.component && componentCss) || (features.directive && directiveCss)',
    'build/script.css.js': '(features.component && componentCss) || (features.directive && directiveCss)'
  },

  helpers,
  complete
}
