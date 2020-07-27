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
       <div class="info-menu">
      <ui-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <ui-menu-item index="1" @click="toMap">
          <i class="el-icon-menu"></i>
          <span slot="title">产品超市</span>
        </ui-menu-item>
        <ui-menu-item index="2" @click="toNews">
          <i class="el-icon-menu"></i>
          <span slot="title">舆情信息</span>
        </ui-menu-item>
        <ui-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">标签2</span>
        </ui-menu-item>
        <ui-menu-item index="4">
          <i class="el-icon-document"></i>
          <span slot="title">标签3</span>
        </ui-menu-item>
        <ui-menu-item index="5">
          <i class="el-icon-document"></i>
          <span slot="title">标签4</span>
        </ui-menu-item>
      </ui-menu>
    </div>
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