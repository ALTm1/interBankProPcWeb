import uiCrud from './ui-crud.vue'

const install = (Vue, options) => {
  if (options) {
    Vue.prototype.$uiCrudSize = options.size ? options.size : null
  } else {
    Vue.prototype.$uiCrudSize = null
  }
  Vue.component('uiCrud', uiCrud)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(uiCrud, { install })
