/*
 * @Author: your name
 * @Date: 2020-07-23 08:49:06
 * @LastEditTime: 2020-07-29 19:24:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankProPcWeb\src\components\index.js
 */
import Vue from 'vue'

import {
  ContainerFull,
  IconFa,
  IconSvg
} from '@csii/vx-web-ext'

// 引入自定义HeaderItem
import HeaderItem from '@/components/headeritem'

// 引入自定义ButtonItem  
import ButtonItem from '@/components/button'


// 引入自定义SelectItem  
import SelectItem from '@/components/selectitem'


// 注意 有些组件使用异步加载会有影响
Vue.component('ui-container-full', ContainerFull)
Vue.component('ui-icon-fa', IconFa)
Vue.component('ui-icon-svg', IconSvg)

Vue.component('HeaderItem', HeaderItem)
Vue.component('ButtonItem', ButtonItem)

Vue.component('SelectItem', SelectItem)
