import { version } from '../package.json'

import MyComponent from './component/MyComponent'

export {
  version,
  MyComponent
}

export default {
  version,
  MyComponent,

  install (Vue) {
    Vue.component('MyComponent', MyComponent)
  }
}
