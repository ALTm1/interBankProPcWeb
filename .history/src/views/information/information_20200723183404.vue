<template>
  <div>
    <!-- 面包屑导航 -->
    <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">消息中心</ui-breadcrumb-item>
        <!-- <ui-breadcrumb-item>机构认证</ui-breadcrumb-item> -->
      </ui-breadcrumb>
    <div class="info-wrap">
      <!-- 左侧菜单栏 -->
      <div class="info-menu">
        <ui-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <ui-menu-item index="1" @click="toNews">
            <i class="el-icon-menu"></i>
            <span slot="title">舆情信息</span>
          </ui-menu-item>
          <ui-menu-item index="2" @click="transcation">
            <i class="el-icon-menu"></i>
            <span slot="title">交易信息</span>
          </ui-menu-item>
          <ui-menu-item index="3" @click="meeting">
            <i class="el-icon-document"></i>
            <span slot="title">会议相关</span>
          </ui-menu-item>
        </ui-menu>
      </div>
      <!-- 右侧是内容栏 -->
      <div class="info-content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  methods: {
    toNews() {
      this.$router.push("news");
    },
    transcation() {
      this.$router.push("transcation");
    },
    meeting() {
      this.$router.push("meeting");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.info-wrap {
  width: 100%;
  display: -webkit-box;
}
.info-menu {
  width: 25%;
}
.info-content {
  width: 70%;
}
</style>