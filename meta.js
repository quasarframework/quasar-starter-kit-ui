const { helpers, complete } = require('./utils')

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name (npm name, kebab-case)',
    },

    author: {
      type: 'string',
      message: 'Author',
      required: true
    },

    license: {
      type: 'string',
      message: 'License type',
      default: 'MIT'
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

    packageDescription: {
      type: 'string',
      required: true,
      message: 'Package description',
      default: 'My awesome component',
    },

    componentName: {
      type: 'string',
      when: 'features.component',
      required: true,
      message: 'Component name (camel-case)',
      default: 'MyComponent'
    },

    componentCss: {
      type: 'confirm',
      when: 'features.component',
      message: 'Do you need a stylesheet for your component?',
      default: true
    },

    directiveName: {
      type: 'string',
      when: 'features.directive',
      required: true,
      message: 'Directive name (kebab-case, without "v-" prefix)',
      default: 'my-directive'
    },

    directiveCss: {
      type: 'confirm',
      when: 'features.directive',
      message: 'Do you need a stylesheet for your directive?',
      default: true
    },

    aeDescription: {
      type: 'string',
      when: 'features.ae',
      required: true,
      message: 'App Extension description',
      default: 'A Quasar App Extension',
    },

    repositoryType: {
      type: 'string',
      message: 'Repository type',
      default: 'git'
    },
    repositoryURL: {
      type: 'string',
      message: 'Repository URL (eg: https://github.com/quasarframework/quasar)'
    },
    homepage: {
      type: 'string',
      message: 'Homepage URL'
    },
    bugs: {
      type: 'string',
      message: 'Issue reporting URL (eg: https://github.com/quasarframework/quasar/issues)'
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
