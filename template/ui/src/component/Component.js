import { QBadge } from 'quasar'

export default {
  name: '{{productName}}',

  render (h) {
    return h(QBadge, {
      staticClass: '{{name}}',
      props: {
        label: '{{productName}}'
      }
    })
  }
}
