/*
 * @Author: your name
 * @Date: 2020-07-24 09:04:02
 * @LastEditTime: 2020-07-24 10:32:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankProPcWeb\src\router\modules\unionlap.js
 */


// 联盟圈
export default [
  // 产品主页
  {
    path: "/unionLap/productCenter/productQry",
    name: 'productQry',
    component: () => import('@/views/unionlap/productcenter/ProductQry.vue'),
  },
  // 产品发布
  {
    path: "/unionLap/productCenter/productRelease",
    name: 'productQry',
    component: () => import('@/views/unionlap/productcenter/ProductRelease.vue'),
  },
]