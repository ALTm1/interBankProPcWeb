/*
 * @Author: your name
 * @Date: 2020-07-21 10:08:35
 * @LastEditTime: 2020-07-21 19:09:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jn-pc\src\router\modules\business.js
 */
import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/utils/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo/business',
  name: 'demo-business',
  meta,
  redirect: { name: 'demo-business-bankInner' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'bankInner',
      name: `${pre}bankInner`,
      component: import('@/views/demo/business/BankInner/BankInnerPre.vue'),
      meta: {
        ...meta,
        // 是否缓存组件
        cache: true,
        title: '行内转账'
      }
    }, {
      path: 'bankInnerConf',
      name: `${pre}bankInnerConf`,
      component: import('@/views/demo/business/BankInner/BankInnerConf'),
      meta: {
        // 是否不进行菜单权限限制
        auth: false,
        // 是否不打开新的tab
        close: true,
        title: '行内转账'
      }
    }, {
      path: 'bankInnerRes',
      name: `${pre}bankInnerRes`,
      component: import('@/views/demo/business/BankInner/BankInnerRes'),
      meta: {
        auth: false,
        close: true,
        title: '行内转账'
      }
    }
  ])('demo-business-')
}
