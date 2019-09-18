# {{#features.component}}Component {{componentName}}{{#features.directive}} and {{/features.directive}}{{/features.component}}{{#features.directive}}Directive v-{{directiveName}}{{/features.directive}}

<img src="https://img.shields.io/npm/v/{{name}}.svg?label={{name}}">

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

```js
import Vue from 'vue'
import Plugin from '{{name}}'

Vue.use(Plugin)
```

or:

```js
<script>
import { {{#features.component}}Component{{/features.component}}{{#features.directive}}, {{/features.directive}}{{#features.directive}}Directive{{/features.directive}} } from '{{name}}'

export default {
  {{#features.component}}
  components: {
    Component
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

## UMD variant

Exports `window.{{umdExportName}}`.

Add the following tag(s) after the Quasar ones:

```html
{{#or componentCss directiveCss}}
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/{{name}}/dist/index.min.css" rel="stylesheet" type="text/css">
</head>
{{/or}}
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/{{name}}/dist/index.umd.min.js"></script>
</body>
```
{{#or componentCss directiveCss}}
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/{{name}}/dist/index.rtl.min.css" rel="stylesheet" type="text/css">
```
{{/or}}

# Setup
```bash
$ yarn
```

# Developing
```bash
# start dev in SPA mode
$ yarn dev

# start dev in UMD mode
$ yarn dev:umd

# start dev in SSR mode
$ yarn dev:ssr

# start dev in Cordova iOS mode
$ yarn dev:ios

# start dev in Cordova Android mode
$ yarn dev:android

# start dev in Electron mode
$ yarn dev:electron
```

# Building package
```bash
$ yarn build
```

# Donate
If you appreciate the work that went into this, please consider [donating to Quasar](https://donate.quasar.dev).

# License
{{license}} (c) {{author}}
