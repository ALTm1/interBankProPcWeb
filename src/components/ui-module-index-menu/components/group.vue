<template>
  <div class="ui-module-index-menu-group" :class="groupClassName" v-if="!isTitle">
    <!-- 有子菜单 -->
    <template v-if="menu.children">
      <p class="ui-module-index-menu-group--title" :class="titleClassName">{{menu.title}}</p>
      <template v-for="(item, index) in menu.children">
        <ui-module-index-menu-group
          v-if="item.children"
          :key="`group-${index}`"
          :menu="item"
          :level="level + 1"
        />
        <ui-module-index-menu-item v-else :key="`button-${index}`" :menu="item" />
      </template>
    </template>
    <!-- 没有子菜单 -->
    <template v-else>
      <p class="ui-module-index-menu-group--title" :class="titleClassName">{{menu.title}}</p>
      <ui-module-index-menu-item :menu="menu" />
    </template>
  </div>
</template>

<script>
import uiModuleIndexMenuItem from './item'
export default {
  name: 'ui-module-index-menu-group',
  components: {
    uiModuleIndexMenuItem
  },
  props: {
    menu: {
      default: () => ({})
    },
    level: {
      default: 1
    }
  },
  computed: {
    groupClassName() {
      return `ui-module-index-menu-group--${this.level}`
    },
    titleClassName() {
      return `ui-module-index-menu-group--title-${this.level}`
    },
    isTitle() {
      // 标题中含有 首页 文字
      if ((this.menu.title || '').indexOf('首页') > 0) {
        return true
      }
      // 图标为 home
      if (this.menu.icon === 'home') {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss">
.ui-module-index-menu-group {
  margin-bottom: 10px;
  padding-left: 10px;
  margin-left: 10px;
  border-left: 2px solid #0077ff;
  &.ui-module-index-menu-group--1 {
    padding-left: 0px;
    margin-left: 0px;
    border-left: none;
    margin-bottom: 10px;
  }
  p {
    margin: 0px;
    padding: 0px;
  }
  .ui-module-index-menu-group--title {
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 10px;
    &.ui-module-index-menu-group--title-1 {
      font-size: 18px;
      line-height: 18px;
      font-weight: bold;
    }
  }
}
</style>
