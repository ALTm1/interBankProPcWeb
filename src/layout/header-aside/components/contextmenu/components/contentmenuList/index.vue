<template>
  <div class="ui-contentmenu-list" @click="rowClick">
    <div
      v-for="item in menulist"
      :key="item.value"
      :data-value="item.value"
      class="ui-contentmenu-item"
      flex="cross:center main:center"
    >
      <ui-icon-fa v-if="item.icon" :name="item.icon" />
      <div class="ui-contentmenu-item-title" flex-box="1">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-contextmenu-list',
  props: {
    menulist: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    rowClick(event) {
      let target = event.target
      while (!target.dataset.value) {
        target = target.parentNode
      }
      this.$emit('rowClick', target.dataset.value)
    }
  }
}
</script>

<style lang="scss">
.ui-contentmenu-list {
  .ui-contentmenu-item {
    padding: 8px 20px 8px 15px;
    margin: 0;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    &:hover {
      background: #ecf5ff;
      color: #66b1ff;
    }
    .ui-contentmenu-item-title {
      margin-left: 10px;
    }
  }
}
</style>
