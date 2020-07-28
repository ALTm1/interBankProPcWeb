<template>
  <div class="news-wrap">
    <div class="info-menu">
      <ui-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <ui-menu-item index="1" @click="toMap">
          <i class="el-icon-menu"></i>
          <span slot="title">地图</span>
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
    <div class="news-content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toNews(){
      this.$router.push('news')
    },
    toMap(){
      this.$router.push('map')
    }
  }
};
</script>
<style scoped>
.news-wrap{
    display: -webkit-box;
}
.info-menu{
    width: 20%;
}
.news-content{
    width: 80%;
}
</style>