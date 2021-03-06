import business from './modules/business'
import layoutHeaderAside from '@/layout/header-aside'
import information from './modules/information'
import industry from './modules/industry'
import person from './modules/person'
import staffcenter from './modules/staffcenter'
import fund from './modules/fund'
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/utils/util.import.' + process.env.NODE_ENV)
// 引入'金融市场'路由组件
import financialMarket from "./modules/financialmarket"
// 引入'会员中心'路由组件
import member from "./modules/member"
// 引入'联盟圈'路由组件
import unionlap from "./modules/unionlap"

// 导出需要显示菜单的
export const frameInRoutes = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: false
        },
        component: _import('system/log')
      }
    ]
  },
  business
]
/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        redirect: { name: 'home' },
        meta: {
          auth: false,
          close: true
        },
        component: _import('system/index'),
        children: [
          {
            path: 'home',
            name: 'home',
            component: () => import('@/views/home/Home.vue'),
            meta: {
              title: '首页'
            }
          },
          ...information,
          ...industry,
          ...person,
          ...staffcenter,
          ...financialMarket,
          ...member,
          ...fund,
          // 注册
          {
            path: '/registerPre',
            name: 'registerPre',
            redirect: '/regPre',
            component: _import('register/registerPre'),
            children: [
              {
                path: '/regPre',
                name: 'regPre',
                meta: {
                  title: '个人信息录入'
                },
                component: _import('register/regPre'),
              },
              // 注册确认页
              {
                path: '/registerConf',
                name: 'registerConf',
                meta: {
                  title: '设置登陆密码'
                },
                component: _import('register/registerConf')
              },
              // 注册结果页
              {
                path: '/registerRes',
                name: 'registerRes',
                meta: {
                  title: '注册结果'
                },
                component: _import('register/registerRes')
              },
            ]

          },
          // 忘记密码
          {
            path: '/forgetPassPre',
            name: 'forgetPassPre',
            redirect: '/forgetPre',
            component: _import('forgetpassword/forgetPassPre'),
            children: [
              {
                path: '/forgetPre',
                name: 'forgetPre',
                meta: {
                  title: '个人信息验证'
                },
                component: _import('forgetpassword/forgetPre'),
              },
              // 忘记密码确认页
              {
                path: '/forgetPassConf',
                name: 'forgetPassConf',
                meta: {
                  title: '设置新密码'
                },
                component: _import('forgetpassword/forgetPassConf')


              },

              // 忘记密码结果页
              {
                path: '/forgetPassRes',
                name: 'forgetPassRes',
                meta: {
                  title: '重置结果'
                },
                component: _import('forgetpassword/forgetPassRes')
              },
            ]
          },
        ]
      },
      // 系统 前端日志
      {
        path: 'blank',
        name: 'blank',
        meta: {
          title: '过渡页面',
          auth: false,
          close: true
        },
        component: _import('system/blank')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        meta: {
          auth: false
        },
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        meta: {
          auth: false
        },
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  },
  ...frameInRoutes,
  // ...financialMarket,
  // ...member
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: _import('system/login')
  // },
  // 用户登录
  {
    path: '/userLogin',
    name: 'userLogin',
    component: _import('login/userLogin')
  },
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
