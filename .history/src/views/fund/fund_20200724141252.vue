<template>
  <div class="fund-wrap">
    <div class="fund-header">
      <div class="header-wrap">
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
        class="ui-menu-vertical-demo"
     
       
      >
        <ui-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">产品超市</span>
        </ui-menu-item>
        <ui-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">我的基金</span>
        </ui-menu-item>
        <ui-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">交易明细查询</span>
        </ui-menu-item>
        <ui-menu-item index="4">
          <i class="el-icon-document"></i>
          <span slot="title">我的开户信息</span>
        </ui-menu-item>
      </ui-menu>
    </div>
    </div>
    <div class="fund-content">
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
.header-wrap{
    padding: 30px;
}
.fund-wrap{
    display: -webkit-box;
}
.fund-header{
    width: 20%;
}
.fund-content{
    width: 80%;
}
</style>