const { helpers, complete } = require('./utils')

module.exports = {
  prompts: {
    name: {
      type: 'string',
      message: 'Project name (npm name, kebab-case, without "quasar-ui" prefix)',
      validate: val => val && val.length > 0
    },

    author: {
      type: 'string',
      message: 'Author',
      validate: val => val && val.length > 0
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
          short: 'Component',
          checked: true
        },
        {
          name: 'Vue directive',
          value: 'directive',
          short: 'Directive'
        },
        {
          name: 'Quasar App Extension',
          value: 'ae',
          short: 'AE',
          checked: true
        }
      ]
    },

    packageDescription: {
      type: 'string',
      message: 'Package description',
      default: 'My awesome component',
    },

    umdExportName: {
      type: 'string',
      message: 'UMD export name (global variable, camelCased)',
      validate: val => val && val.length > 0
    },

    componentName: {
      type: 'string',
      when: 'features.component',
      message: 'Component name (PascalCase)',
      default: 'MyComponent',
      validate: val => val && val.length > 0
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
      message: 'Directive name (kebab-case, without "v-" prefix)',
      default: 'my-directive',
      validate: val => val && val.length > 0
    },

    directiveCss: {
      type: 'confirm',
      when: 'features.directive',
      message: 'Does your directive require a stylesheet?',
      default: false
    },

    aeDescription: {
      type: 'string',
      when: 'features.ae',
      required: true,
      message: 'App Extension description',
      default: 'A Quasar App Extension',
      validate: val => val && val.length > 0
    },

    preset: {
      type: 'checkbox',
      when: 'features.ae',
      message: 'Pick the needed App Extension scripts:',
      choices: [
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
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
    },

    autoInstall: {
      type: 'list',
      message:
        'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use Yarn (recommended)',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'NPM',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        }
      ]
    }
  },

  filters: {
    'app-extension/src/install.js': 'features.ae && preset.install',
    'app-extension/src/prompts.js': 'features.ae && preset.prompts',
    'app-extension/src/uninstall.js': 'features.ae && preset.uninstall',
    'app-extension/**/*': 'features.ae',
    'ui/src/components/**/*': 'features.component',
    'ui/src/directives/**/*': 'features.directive',
    'ui/src/components/Component.sass': 'features.component && componentCss',
    'ui/src/directives/Directive.sass': 'features.directive && directiveCss',
    'ui/src/**/*.sass': '(features.component && componentCss) || (features.directive && directiveCss)',
    'build/script.css.js': '(features.component && componentCss) || (features.directive && directiveCss)'
  },

  helpers,
  complete
}
