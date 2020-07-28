<template>
    <div>
        <!-- 面包屑 -->
        <div>
      <ui-breadcrumb separator-class="el-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: 'news' }">员工中心</ui-breadcrumb-item>
        <ui-breadcrumb-item>对账文件下载</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    </div>
</template>
<script>
export default {
    name:'approval'
}
</script>
<style scoped>

</style>