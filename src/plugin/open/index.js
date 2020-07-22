import util from '@/libs/utils/index.js'

export default {
  install(Vue, options) {
    Vue.prototype.$open = util.open
  }
}
