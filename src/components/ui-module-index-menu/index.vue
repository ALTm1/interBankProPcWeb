<template>
  <transition name="fade-transverse">
    <div v-if="show" class="ui-module-index-menu">
      <ui-module-index-menu-group v-for="(item, index) in menu.children" :key="index" :menu="item" />
    </div>
  </transition>
</template>

<script>
import uiModuleIndexMenuGroup from './components/group'
export default {
  components: {
    uiModuleIndexMenuGroup
  },
  props: {
    menu: {
      default: () => ({
        children: []
      })
    }
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 300)
  }
}
</script>

<style lang="scss">
.ui-module-index-menu {
  @extend %unable-select;
  margin-top: 20px;
}
</style>
