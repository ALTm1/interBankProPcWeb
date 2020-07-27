<template>
  <div>
    <!-- 面包屑导航 -->
    <div class="news-title">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">消息中心</ui-breadcrumb-item>
        <!-- <ui-breadcrumb-item>机构认证</ui-breadcrumb-item> -->
      </ui-breadcrumb>
    </div>
    
    <div class="info-wrap">
      <!-- 左侧菜单栏 -->
      <div class="info-menu">
        <ui-menu
          default-active="1"
          class="ui-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <ui-menu-item index="1" @click="toNews">
           <img src="../../assets/image/icon1.png" alt="">
            <span slot="title">舆情信息</span>
          </ui-menu-item>
          <ui-menu-item index="2" @click="transcation">
             <img src="../../assets/image/icon2.png" alt="">
            <span slot="title">交易信息</span>
          </ui-menu-item>
          <ui-menu-item index="3" @click="meeting">
            <img src="../../assets/image/icon3.png" alt="">
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
  text-align: center;
  width: 18%;
}
.info-menu ul li img{
  width: 20px;
  height: 20px;
  
}
.info-content {
  width: 70%;
}
.news-title{
  margin: 30px;
}
</style>