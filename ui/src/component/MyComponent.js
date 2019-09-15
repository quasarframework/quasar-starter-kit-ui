import { QBadge } from 'quasar'

export default {
  name: 'MyComponent',

  render (h) {
    return h(QBadge, {
      staticClass: 'my-component',
      props: {
        label: 'MyComponent'
      }
    })
  }
}
