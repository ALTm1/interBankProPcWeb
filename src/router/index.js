import Vue from 'vue'
import VueRouter from 'vue-router'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import store from '@/store/index'

import util from '@/libs/utils/index.js'

// 路由数据
import routes from './routes'

Vue.use(VueRouter)
// 解决重复点击菜单报错 Uncaught (in promise) NavigationDuplicated{_name: "NavigationDuplicated", name: "NavigationDuplicated"}
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch((err) => err)
}

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach(async (to, from, next) => {
  // 确认已经加载多标签页数据 issues/201
  await store.dispatch('vxadmin/page/isLoaded')
  // 确认已经加载组件尺寸设置 issues/198
  await store.dispatch('vxadmin/size/isLoaded')
  // 进度条
  NProgress.start()
  // 关闭搜索面板
  store.commit('vxadmin/search/set', false)
  // 验证当前路由所有的匹配中是否需要有登录验证的
  if (to.matched.some(r => r.meta.auth)) {
    // 这里暂时将cookie里是否存有token作为验证是否登录的条件
    // 请根据自身业务需要修改
    const token = util.cookies.get('token')

    if (token && token !== 'undefined') {
      // add by lss auth为false表示没有在菜单中配置也可以跳转的路由
      if (!to.meta.auth) {
        next()
      } else {
        // 登录验证通过，遍历菜单，判断路由是否在菜单中
        store.dispatch('vxadmin/menu/loadMenu').then(menu => {
          let notInMenu = true

          if (!menu) {
            // 没有登录的时候跳转到登录界面
            // 携带上登陆成功之后需要跳转的页面完整路径
            next({
              name: 'login',
              query: {
                redirect: to.fullPath
              }
            })
            NProgress.done()
          } else {
            util.traversalTree(menu, (item) => {
              /**
               * 修改无法通过路由传参（query方式）
               * 将 if(item.value === to.name || to.fullPath === '/log' || to.fullPath === '/index' || to.fullPath === item.path)
               * 改为
               * let path = item.path && item.path.split('?')[0]
               * if (item.value === to.name || to.path === path)
               * 时间 2019年10月22日
               * change by lss
               */
              let path = item.path && item.path.split('?')[0]
              if (item.value === to.name || to.path === path) {
                notInMenu = false
                next()
                return true
              }
            })
            if (notInMenu) {
              next({ name: '404' })
            }
          }
        })
      }
    } else {
      // 没有登录的时候跳转到登录界面
      // 携带上登陆成功之后需要跳转的页面完整路径
      next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      })
      // issues/138
      NProgress.done()
    }
  } else {
    // 不需要身份校验 直接通过
    next()
  }
})

router.afterEach(to => {
  // 进度条
  NProgress.done()

  // 不打开新页签，在当前页签展示 add by lss
  if (!to.meta.close) {
    // 多页控制 打开新的页面
    store.dispatch('vxadmin/page/open', to)
  }

  // 更改标题
  util.title(to.meta.title)
})

export default router
