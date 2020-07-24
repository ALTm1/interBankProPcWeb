import business from './modules/business'
import layoutHeaderAside from '@/layout/header-aside'

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
        meta: {
          auth: false,
          close: true
        },
        component: _import('system/index')
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
  ...financialMarket,
  ...member,
  ...unionlap
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  },
  // 用户登录
  {
    path: '/userLogin',
    name: 'userLogin',
    component: _import('login/userLogin')
  },
  // 注册录入页
  {
    path: '/registerPre',
    name: 'registerPre',
    component: _import('register/registerPre')
  },
  // 注册确认页
  {
    path: '/registerConf',
    name: 'registerConf',
    component: _import('register/registerConf')
  },
  // 注册结果页
  {
    path: '/registerRes',
    name: 'registerRes',
    component: _import('register/registerRes')
  },
  // 忘记密码录入页
  {
    path: '/forgetPassPre',
    name: 'forgetPassPre',
    component: _import('forgetpassword/forgetPassPre')
  },
  // 忘记密码确认页
  {
    path: '/forgetPassConf',
    name: 'forgetPassConf',
    component: _import('forgetpassword/forgetPassConf')
  },
  // 忘记密码结果页
  {
    path: '/forgetPassRes',
    name: 'forgetPassRes',
    component: _import('forgetpassword/forgetPassRes')
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
