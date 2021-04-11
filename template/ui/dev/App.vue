<template>
  {{#features.component}}<{{componentName}}></{{componentName}}>{{/features.component}}
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  },
  setup (props, ctx) {
    return {
      
    }
  }
})
</script>

<style lang="sass">
</style>

<style>
  @import "@quasar/extras/material-icons/material-icons.css"
</style>