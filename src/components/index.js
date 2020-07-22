import Vue from 'vue'

import {
  ContainerFull,
  IconFa,
  IconSvg
} from '@csii/vx-web-ext'

// 注意 有些组件使用异步加载会有影响
Vue.component('ui-container-full', ContainerFull)
Vue.component('ui-icon-fa', IconFa)
Vue.component('ui-icon-svg', IconSvg)
