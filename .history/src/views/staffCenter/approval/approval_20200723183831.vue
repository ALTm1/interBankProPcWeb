<template>
    <div>
        <!-- 面包屑 -->
        <div class="approval-wrap">
          <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">员工中心</ui-breadcrumb-item>
        <ui-breadcrumb-item>审批管理</ui-breadcrumb-item>
      </ui-breadcrumb>
      <!-- <ui-breadcrumb separator-class="el-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: 'news' }">员工中心</ui-breadcrumb-item>
        <ui-breadcrumb-item>审批管理</ui-breadcrumb-item>
      </ui-breadcrumb> -->
    </div>
    <div>
        <router-view/>
    </div>
    </div>
</template>
<script>
export default {
    name:'approval'
}
</script>
<style scoped>
.approval-wrap{
  margin: 30px;
}
</style>