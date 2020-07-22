import drag from './drag'

const install = function (Vue) {
  Vue.directive('ui-drag-dialog', drag)
}

if (window.Vue) {
  window['ui-drag-dialog'] = drag
  Vue.use(install); // eslint-disable-line
}

drag.install = install
export default drag
