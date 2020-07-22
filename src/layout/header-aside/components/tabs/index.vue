<template>
  <div class="ui-multiple-page-control-group" flex>
    <div class="ui-multiple-page-control-content" flex-box="1">
      <div class="ui-multiple-page-control-content-inner">
        <ui-contextmenu :visible.sync="contextmenuFlag" :x="contentmenuX" :y="contentmenuY">
          <ui-contextmenu-list
            :menulist="tagName === '/index' ? contextmenuListIndex : contextmenuList"
            @rowClick="contextmenuClick"
          />
        </ui-contextmenu>
        <ui-tabs
          class="ui-multiple-page-control"
          :value="current"
          type="card"
          :closable="true"
          @tab-click="handleClick"
          @edit="handleTabsEdit"
          @contextmenu.native="handleContextmenu"
        >
          <ui-tab-pane
            v-for="page in opened"
            :key="page.fullPath"
            :label="page.meta.title || $t('layout.header-aside.tabs.label-default')"
            :name="page.fullPath"
          />
        </ui-tabs>
      </div>
    </div>
    <div class="ui-multiple-page-control-btn" flex-box="0">
      <ui-dropdown
        size="default"
        split-button
        @click="closeAll"
        @command="command => handleControlItemClick(command)"
      >
        <ui-icon-fa name="times-circle" />
        <ui-dropdown-menu slot="dropdown">
          <ui-dropdown-item command="left">
            <ui-icon-fa name="arrow-left" class="ui-mr-10" />
            {{ $t('layout.header-aside.tabs.close-left') }}
          </ui-dropdown-item>
          <ui-dropdown-item command="right">
            <ui-icon-fa name="arrow-right" class="ui-mr-10" />
            {{ $t('layout.header-aside.tabs.close-right') }}
          </ui-dropdown-item>
          <ui-dropdown-item command="other">
            <ui-icon-fa name="times" class="ui-mr-10" />
            {{ $t('layout.header-aside.tabs.close-other') }}
          </ui-dropdown-item>
          <ui-dropdown-item command="all">
            <ui-icon-fa name="times-circle" class="ui-mr-10" />
            {{ $t('layout.header-aside.tabs.close-all') }}
          </ui-dropdown-item>
        </ui-dropdown-menu>
      </ui-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    UiContextmenu: () => import('../contextmenu'),
    UiContextmenuList: () => import('../contextmenu/components/contentmenuList')
  },
  data() {
    return {
      contextmenuFlag: false,
      contentmenuX: 0,
      contentmenuY: 0,
      tagName: '/index'
    }
  },
  computed: {
    ...mapState('vxadmin/page', ['opened', 'current']),
    contextmenuListIndex() {
      return [
        {
          icon: 'times-circle',
          title: this.$t('layout.header-aside.tabs.close-all'),
          value: 'all'
        }
      ]
    },
    contextmenuList() {
      return [
        {
          icon: 'arrow-left',
          title: this.$t('layout.header-aside.tabs.close-left'),
          value: 'left'
        },
        {
          icon: 'arrow-right',
          title: this.$t('layout.header-aside.tabs.close-right'),
          value: 'right'
        },
        {
          icon: 'times',
          title: this.$t('layout.header-aside.tabs.close-other'),
          value: 'other'
        },
        {
          icon: 'times-circle',
          title: this.$t('layout.header-aside.tabs.close-all'),
          value: 'all'
        }
      ]
    }
  },
  methods: {
    ...mapActions('vxadmin/page', [
      'close',
      'closeLeft',
      'closeRight',
      'closeOther',
      'closeAll'
    ]),
    /**
     * @description 右键菜单功能点击
     */
    handleContextmenu(event) {
      let target = event.target
      // 解决 issues/54
      let flag = false
      if (target.className.indexOf('ui-tabs__item') > -1) flag = true
      else if (target.parentNode.className.indexOf('ui-tabs__item') > -1) {
        target = target.parentNode
        flag = true
      }
      if (flag) {
        event.preventDefault()
        event.stopPropagation()
        this.contentmenuX = event.clientX
        this.contentmenuY = event.clientY
        this.tagName = target.getAttribute('aria-controls').slice(5)
        this.contextmenuFlag = true
      }
    },
    /**
     * @description 右键菜单的row-click事件
     */
    contextmenuClick(command) {
      this.handleControlItemClick(command, this.tagName)
    },
    /**
     * @description 接收点击关闭控制上选项的事件
     */
    handleControlItemClick(command, tagName = null) {
      if (tagName) {
        this.contextmenuFlag = false
      }
      const params = {
        pageSelect: tagName
      }
      switch (command) {
        case 'left':
          this.closeLeft(params)
          break
        case 'right':
          this.closeRight(params)
          break
        case 'other':
          this.closeOther(params)
          break
        case 'all':
          this.closeAll()
          break
        default:
          this.$message.error(this.$t('public.message.error.handle.invalid'))
          break
      }
    },
    /**
     * @description 接收点击 tab 标签的事件
     */
    handleClick(tab, event) {
      // 找到点击的页面在 tag 列表里是哪个
      const page = this.opened.find(page => page.fullPath === tab.name)
      const { name, params, query } = page
      if (page) {
        this.$router.push({ name, params, query })
      }
    },
    /**
     * @description 点击 tab 上的删除按钮触发这里 首页的删除按钮已经隐藏 因此这里不用判断是 index
     */
    handleTabsEdit(tagName, action) {
      if (action === 'remove') {
        this.close({
          tagName
        })
      }
    }
  }
}
</script>
