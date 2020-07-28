<template>
  <div>
    <div class="fund-header">
      <div>
        <!-- 面包屑 -->
        <ui-breadcrumb separator-class="ui-icon-arrow-right">
          <ui-breadcrumb-item class="ui-icon-add-location">基金通</ui-breadcrumb-item>
          <ui-breadcrumb-item>产品超市</ui-breadcrumb-item>
        </ui-breadcrumb>
      </div>
      <!-- 菜单 -->
      <div></div>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "fund"
};
</script>
<style scoped>
</style>