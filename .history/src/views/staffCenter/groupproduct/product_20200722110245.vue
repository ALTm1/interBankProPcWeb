<template>
  <div>
    <!-- 面包屑 -->
    <div>
      <ui-breadcrumb separator-class="el-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: 'news' }">员工中心</ui-breadcrumb-item>
        <ui-breadcrumb-item>团购产品管理</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <div>
        <router-view/>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>