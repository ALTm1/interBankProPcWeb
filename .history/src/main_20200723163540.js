/*
 * @Author: your name
 * @Date: 2020-07-17 15:31:46
 * @LastEditTime: 2020-07-20 15:37:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JNRCB-PC\src\main.js
 */

// Vue
import Vue from 'vue'
import i18n from './i18n'
import App from './App'
// 核心插件
import vxadmin from '@/plugin/vxadmin'
import axios from '@/plugin/axios'

// store
import store from '@/store/index'

// [ 可选组件 ] 右键菜单
// import contentmenu from 'v-contextmenu'
// import 'v-contextmenu/dist/index.css'

// 菜单和路由设置
import router from './router'
import { frameInRoutes } from '@/router/routes'
import '@/libs/mixins'
import { deleteClass, setClass } from '@csii/vx-util'

// 地图
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 核心插件
Vue.use(vxadmin)
// Vue.use(contentmenu)

Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created() {
    // 处理路由 得到每一级的路由设置
    this.$store.commit('vxadmin/page/init', frameInRoutes)

    // change by lss
    this.$store.dispatch('vxadmin/menu/loadMenu').then(menu => {
      if (menu) {
        // 设置顶栏菜单
        this.$store.commit('vxadmin/menu/headerSet', menu)
        // 初始化菜单搜索功能
        this.$store.commit('vxadmin/search/init', menu)
      }
    })
  },
  mounted() {
    // 展示系统信息
    this.$store.commit('vxadmin/releases/versionShow')
    // 用户登录后从数据库加载一系列的设置
    this.$store.dispatch('vxadmin/account/load')
    // 初始化全屏监听
    this.$store.dispatch('vxadmin/fullscreen/listen')
  },
  watch: {
    // 检测路由变化切换侧边栏内容
    '$route.matched': {
      handler(matched) {
        if (matched.length > 0) {
          // change by lss
          const menuAside = this.$store.state.vxadmin.menu.header
          let path = matched[0].path
          // 如果是过渡页面则不刷新侧边栏 add by lss
          if (matched[matched.length - 1].path === '/blank') {
            return false
          }
          const _side = menuAside.filter(menu => menu.path === path)
          this.$store.commit('vxadmin/menu/asideSet', _side.length > 0 ? _side[0].children : [])
          this.$nextTick(() => {
            // 设置当前激活路由所对应的一级菜单高亮 add by lss
            Array.from(document.getElementsByClassName('demo-menu-js')).forEach((ele) => {
              ele.setAttribute('class', deleteClass(ele, 'is-active'))
              if (ele.id == path.replace(/\//, '').replace(/\//g, '-')) {
                setClass(ele, 'is-active')
              }
            })
          })
        }
      },
      immediate: true
    }
  }
}).$mount('#app')
