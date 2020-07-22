import { mapState } from 'vuex'
import menuMixin from '../mixin/menu'
import { elMenuItem, elSubmenu } from '../libs/util.menu'
import BScroll from 'better-scroll'

export default {
  name: 'ui-layout-header-aside-menu-side',
  mixins: [
    menuMixin
  ],
  render (createElement) {
    return createElement('div', { attrs: { class: 'ui-layout-header-aside-menu-side' } }, [
      createElement('ui-menu', {
        props: { collapse: this.asideCollapse, uniqueOpened: true, defaultActive: this.active },
        ref: 'menu',
        on: { select: this.handleMenuSelect }
      }, this.aside.map(menu => (menu.children === undefined ? elMenuItem : elSubmenu).call(this, createElement, menu))),
      ...this.aside.length === 0 && !this.asideCollapse ? [
        createElement('div', { attrs: { class: 'ui-layout-header-aside-menu-empty', flex: 'dir:top main:center cross:center' } }, [
          createElement('ui-icon-fa', { props: { name: 'inbox' } }),
          createElement('span', {}, this.$t('layout.header-aside.menu-side.empty'))
        ])
      ] : []
    ])
  },
  data () {
    return {
      active: '',
      asideHeight: 300,
      BS: null
    }
  },
  computed: {
    ...mapState('vxadmin/menu', [
      'aside',
      'asideCollapse'
    ])
  },
  watch: {
    // 折叠和展开菜单的时候销毁 better scroll
    asideCollapse (val) {
      this.scrollDestroy()
      setTimeout(() => {
        this.scrollInit()
      }, 500)
    },
    /**
     * 监听路由 控制侧边栏激活状态
     * [fix] 路由跳转到非菜单路由时菜单状态丢失bug
     * 时间：2019-10-25 16:30:42
     * @author jinbin
     */
    '$route': {
      handler ({ path, meta }) {
        if (meta.auth) {
          this.active = path
        }
        this.$nextTick(() => {
          if (this.aside.length > 0 && this.$refs.menu && meta.auth) {
            this.$refs.menu.activeIndex = path
          }
        })
      },
      immediate: true
    }
  },
  mounted () {
    this.scrollInit()
  },
  beforeDestroy () {
    this.scrollDestroy()
  },
  methods: {
    scrollInit () {
      this.BS = new BScroll(this.$el, {
        mouseWheel: true,
        click: true
        // 如果你愿意可以打开显示滚动条
        // scrollbar: {
        //   fade: true,
        //   interactive: false
        // }
      })
    },
    scrollDestroy () {
      // issues/75
      try {
        this.BS.destroy()
      } catch (e) {
        delete this.BS
        this.BS = null
      }
    }
  }
}
