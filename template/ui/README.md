# {{#features.component}}Component {{componentName}}{{#features.directive}} and {{/features.directive}}{{/features.component}}{{#features.directive}}Directive v-{{directiveName}}{{/features.directive}}

[![npm](https://img.shields.io/npm/v/quasar-ui-{{name}}.svg?label=quasar-ui-{{name}})](https://www.npmjs.com/package/quasar-ui-{{name}})
[![npm](https://img.shields.io/npm/dt/quasar-ui-{{name}}.svg)](https://www.npmjs.com/package/quasar-ui-{{name}})

**Compatible with Quasar UI v2 and Vue 3**.

{{#features.component}}
# Component {{componentName}}
> Short description of the component
{{/features.component}}

{{#features.directive}}
# Directive v-{{directiveName}}
> Short description of the directive
{{/features.directive}}

# Usage

## Quasar CLI project
{{#features.ae}}

Install the [App Extension](../app-extension).

**OR**:

{{/features.ae}}
Create and register a boot file:

```js
import { boot } from 'quasar/wrappers'
import Plugin from 'quasar-ui-{{name}}'{{#or componentCss directiveCss}}
import 'quasar-ui-{{name}}/dist/index.css'{{/or}}

export default boot(({ app }: { app: any }) => {
  app.use(Plugin)
})
```

**OR**:

```html
{{#or componentCss directiveCss}}<style src="quasar-ui-{{name}}/dist/index.css"></style>

{{/or}}
<script>
import { {{#features.component}}Component as {{componentName}}{{/features.component}}{{#features.directive}}, {{/features.directive}}{{#features.directive}}Directive{{/features.directive}} } from 'quasar-ui-{{name}}'

export default {
  {{#features.component}}
  components: {
    {{componentName}}
  }{{#features.directive}},{{/features.directive}}
  {{/features.component}}
  {{#features.directive}}
  directives: {
    Directive
  }
  {{/features.directive}}
}
</script>
```

## Vue project

```js
import { createApp } from 'vue'
import { Quasar } from 'quasar'
import Plugin from 'quasar-ui-{{name}}'{{#or componentCss directiveCss}}
import 'quasar-ui-{{name}}/dist/index.css'{{/or}}

const app = createApp(App)

app.use(Quasar, {
  // ...config
})
app.use({{name}})
```

**OR**:

```html
{{#or componentCss directiveCss}}<style src="quasar-ui-{{name}}/dist/index.css"></style>

{{/or}}
<script>
import { {{#features.component}}Component as {{componentName}}{{/features.component}}{{#features.directive}}, {{/features.directive}}{{#features.directive}}Directive{{/features.directive}} } from 'quasar-ui-{{name}}'

export default {
  {{#features.component}}
  components: {
    {{componentName}}
  }{{#features.directive}},{{/features.directive}}
  {{/features.component}}
  {{#features.directive}}
  directives: {
    Directive
  }
  {{/features.directive}}
}
</script>
```
# Codepen
Use the following template to create a codepen for your package.
https://codepen.io/stefanvh/pen/MWJXyKX

# Setup
```bash
$ yarn
```

# Developing
```bash
# start vite dev server
$ yarn dev
```

# Building package
```bash
$ yarn build
```

# Adding Testing Components
in the `ui/dev/pages` you can add Vue files to test your component/directive. When using `yarn dev` to build the UI, any pages in that location will automatically be picked up by dynamic routing and added to the test page.

# Adding Assets
Assets like language or icon-sets should be dynamically imported with `import()`. Vite will resolve these imports when building.

# Donate
If you appreciate the work that went into this, please consider [donating to Quasar](https://donate.quasar.dev).

# License
{{license}} (c) {{author}}
