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

# Setup
```bash
$ cd ui
$ yarn
```

# Building package
```bash
$ cd ui
$ yarn build
```

# Donate
If you appreciate the work that went into this, please consider [donating to Quasar](https://donate.quasar.dev).

# License
{{license}} (c) {{author}}
