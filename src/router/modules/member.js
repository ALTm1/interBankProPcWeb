/*
 * @Author: your name
 * @Date: 2020-07-20 15:57:13
 * @LastEditTime: 2020-07-24 09:26:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JNRCB-PC\src\router\modules\member.js
 */


// 会员中心
export default [
  {
    path: '/member',
    name: 'member',
    component: () => import('@/views/member/index.vue'),
    children: (pre => [
      // 已发布资产
      {
        path: `${pre}/publishedQry`,
        name: 'publishedQry',
        component: () => import('@/views/member/publishedassets/PublishedQry.vue'),
      },
      {
        path: `${pre}/publishedDetail`,
        name: 'publishedDetail',
        component: () => import('@/views/member/publishedassets/PublishedDetail.vue'),
      },
      {
        path: `${pre}/publishSucc`,
        name: 'publishSucc',
        component: () => import('@/views/member/publishedassets/PublishSucc.vue'),
      },
      // 已关注资产
      {
        path: `${pre}/attentionQry`,
        name: 'attentionQry',
        component: () => import('@/views/member/attentionassets/AttentionQry.vue'),
      },
      {
        path: `${pre}/attentionDetail`,
        name: 'attentionDetail',
        component: () => import('@/views/member/attentionassets/AttentionDetail.vue'),
      },
      {
        path: `${pre}/attentionSucc`,
        name: 'attentionSucc',
        component: () => import('@/views/member/attentionassets/AttentionSucc.vue'),
      },
      // 订阅资产
      {
        path: `${pre}/subscribeQry`,
        name: 'subscribeQry',
        component: () => import('@/views/member/subscribeassets/SubscribeQry.vue'),
      },
      {
        path: `${pre}/subscribeDetail`,
        name: 'subscribeDetail',
        component: () => import('@/views/member/subscribeassets/SubscribeDetail.vue'),
      },
      {
        path: `${pre}/subscribeSucc`,
        name: 'subscribeSucc',
        component: () => import('@/views/member/subscribeassets/SubscribeSucc.vue'),
      },
      // 订阅偏好设置
      {
        path: `${pre}/subscribePreferSet`,
        name: 'subscribePreferSet',
        component: () => import('@/views/member/subscribeprefer/SubscribePreferSet.vue'),
      },
      // 我的意向
      {
        path: `${pre}/myIntention`,
        name: 'myIntention',
        component: () => import('@/views/member/myintention/MyIntention.vue'),
      },
      {
        path: `${pre}/myIntentionDetail`,
        name: 'myIntentionDetail',
        component: () => import('@/views/member/myintention/MyIntentionDetail.vue'),
      },
      // 待确认意向
      {
        path: `${pre}/intentionQry`,
        name: 'intentionQry',
        meta: {
          title: '待确认意向'
        },
        component: () => import('@/views/member/intentiontobeconfirmed/intentionQry.vue'),
      },
      {
        path: `${pre}/intentionDetail`,
        name: 'intentionDetail',
        meta: {
          title: '待确认意向详情'
        },
        component: () => import('@/views/member/intentiontobeconfirmed/intentionDetail.vue'),
      },
      {
        path: `${pre}/intentionRes`,
        name: 'intentionRes',
        meta: {
          title: '待确认意向'
        },
        component: () => import('@/views/member/intentiontobeconfirmed/intentionRes.vue'),
      },
      // 授信管理
      {
        path: `${pre}/creditManagement`,
        name: 'creditManagement',
        meta: {
          title: '授信管理'
        },
        component: () => import('@/views/member/creditmanagement/creditManagement.vue'),
      },
      {
        path: `${pre}/creditRes`,
        name: 'creditRes',
        meta: {
          title: '授信管理结果页'
        },
        component: () => import('@/views/member/creditmanagement/creditRes.vue'),
      },
      // 我的好友
      {
        path: `${pre}/friendList`,
        name: 'friendList',
        component: () => import('@/views/member/friendmanage/FriendList.vue'),
        meta: {
          sideMenu: "好友管理"
        }
      },
      {
        path: `${pre}/friendDetail`,
        name: 'friendDetail',
        component: () => import('@/views/member/friendmanage/FriendDetail.vue'),
        meta: {
          sideMenu: "好友管理"
        }
      },
      // 同业通讯录
      {
        path: `${pre}/addressBookList`,
        name: 'addressBookList',
        component: () => import('@/views/member/addressbook/AddressBookList.vue'),
        meta: {
          sideMenu: "好友管理"
        }
      },
      {
        path: `${pre}/addressBookDetail`,
        name: 'addressBookDetail',
        component: () => import('@/views/member/addressbook/AddressBookDetail.vue'),
        meta: {
          sideMenu: "好友管理"
        }
      },
      {
        path: `${pre}/addressBookSucc`,
        name: 'addressBookSucc',
        component: () => import('@/views/member/addressbook/AddressBookSucc.vue'),
        meta: {
          sideMenu: "好友管理"
        }
      },

      // 对账查询
      {
        path: `${pre}/checkingQuery`,
        name: 'checkingQuery',
        meta: {
          title: '对账查询'
        },
        component: () => import('@/views/member/checkingquery/checkingQuery.vue'),
      },
      {
        path: `${pre}/checkingFilesUpload`,
        name: 'checkingFilesUpload',
        meta: {
          title: '对账查询'
        },
        component: () => import('@/views/member/checkingquery/checkingFilesUpload.vue'),
      },
      {
        path: `${pre}/checkingQueryRes`,
        name: 'checkingQueryRes',
        meta: {
          title: '对账查询'
        },
        component: () => import('@/views/member/checkingquery/checkingQueryRes.vue'),
      },
      // 机构认证
      {
        path: `${pre}/organQry`,
        name: 'organQry',
        meta: {
          title: '机构认证'
        },
        component: () => import('@/views/member/accreditedinstitution/organQry.vue'),
      },
      {
        path: `${pre}/reauthentication`,
        name: 'reauthentication',
        meta: {
          title: '机构认证'
        },
        component: () => import('@/views/member/accreditedinstitution/reauthentication.vue'),
      },
      {
        path: `${pre}/certificationRes`,
        name: 'certificationRes',
        meta: {
          title: '机构认证'
        },
        component: () => import('@/views/member/accreditedinstitution/certificationRes.vue'),
      },
    ])('/member')
  }
]