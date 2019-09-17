<template>
  <q-page padding>
    {{#features.component}}
    <{{componentName}} />
    {{/features.component}}
    {{#features.directive}}
    <div v-{{directiveName}} />
    {{/features.directive}}
  </q-page>
</template>
