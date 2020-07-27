/*
 * @Author: your name
 * @Date: 2020-07-20 09:48:06
 * @LastEditTime: 2020-07-20 15:59:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JNRCB-PC\src\router\modules\financialmarket.js
 */

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/utils/util.import.' + process.env.NODE_ENV)

// 金融市场
export default [
  {
    path: 'proRelease',
    name: 'proRelease',
    component: () => import('@/views/financialmarket/ProRelease.vue'),
    // component: () => _import('financialmarket/ProRelease.vue'),
  },
  {
    path: '/proReleaseSucc',
    name: 'proReleaseSucc',
    component: () => import('@/views/financialmarket/ProReleaseSucc.vue'),
  },
]