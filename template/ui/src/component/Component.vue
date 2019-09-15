<template>
  <q-badge class="{{name}}" label="{{productName}}" />
</template>

<script>
import { QBadge } from 'quasar'

export default {
  name: '{{productName}}',

  components: {
    QBadge
  }
}
</script>
