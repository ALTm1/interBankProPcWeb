/*
 * @Author: your name
 * @Date: 2020-07-20 09:48:06
 * @LastEditTime: 2020-07-27 17:49:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JNRCB-PC\src\router\modules\financialmarket.js
 */


// 金融市场
export default [
  // 产品中心
  {
    path: '/financialMarket/productIndex/proQry',
    name: 'proQry',
    component: () => import('@/views/financialmarket/productindex/ProQry.vue'),
  },
  {
    path: '/financialMarket/productIndex/proDetail',
    name: 'proDetail',
    component: () => import('@/views/financialmarket/productindex/ProDetail.vue'),
  },
  // 产品发布
  {
    path: '/financialMarket/productRelease/proRelease',
    name: 'proRelease',
    component: () => import('@/views/financialmarket/productrelease/ProRelease.vue'),
  },
  {
    path: '/financialMarket/productRelease/proReleaseSucc',
    name: 'proReleaseSucc',
    component: () => import('@/views/financialmarket/productrelease/ProReleaseSucc.vue'),
  },
  // 产品交易
  {
    path: '/financialMarket/productTrade/proTrade',
    name: 'proTrade',
    component: () => import('@/views/financialmarket/producttrade/ProTrade.vue'),
  },
  {
    path: '/financialMarket/productTrade/proTradeSucc',
    name: 'proTrade',
    component: () => import('@/views/financialmarket/producttrade/ProTradeSucc.vue'),
  },
]