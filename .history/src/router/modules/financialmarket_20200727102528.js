/*
 * @Author: your name
 * @Date: 2020-07-20 09:48:06
 * @LastEditTime: 2020-07-24 16:02:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JNRCB-PC\src\router\modules\financialmarket.js
 */


// 金融市场
export default [
  {
    path: '/financialmarket/proQry',
    name: 'proQry',
    component: () => import('@/views/financialmarket/ProQry.vue'),
  },
  {
    path: '/financialmarket/proDetail',
    name: 'proDetail',
    component: () => import('@/views/financialmarket/ProDetail.vue'),
  },
  {
    path: '/financialmarket/proRelease',
    name: 'proRelease',
    component: () => import('@/views/financialmarket/ProRelease.vue'),
  },
  {
    path: '/financialmarket/proReleaseSucc',
    name: 'proReleaseSucc',
    component: () => import('@/views/financialmarket/ProReleaseSucc.vue'),
  },
]