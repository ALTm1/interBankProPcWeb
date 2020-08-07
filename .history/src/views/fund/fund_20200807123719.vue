<template>
  <div>
    <div class="header-wrap">
        <!-- 面包屑 -->
        <ui-breadcrumb separator-class="ui-icon-arrow-right">
          <ui-breadcrumb-item class="ui-icon-add-location" :to="{ path: 'fundproduct' }">基金通</ui-breadcrumb-item>
          <ui-breadcrumb-item>产品超市</ui-breadcrumb-item>
        </ui-breadcrumb>
      </div>
      <div class="fund-wrap">
        <div class="fund-header">
      <!-- 菜单 -->
       <div class="info-menu">
      <ui-menu
        default-active="1"
        class="ui-menu-vertical-demo"
      >
        <ui-menu-item index="1" @click="toPro">
          <img src="~@/assets/image/icon1.png" alt="">
          <span slot="title">产品超市</span>
        </ui-menu-item>
        <ui-menu-item index="2" @click="myFund">
          <img src="~@/assets/image/icon2.png" alt="">
          <span slot="title">我的基金</span>
        </ui-menu-item>
        <ui-menu-item index="3" @click="transcation">
          <img src="~@/assets/image/icon3.png" alt="">
          <span slot="title">交易明细查询</span>
        </ui-menu-item>
        <ui-menu-item index="4" @click="openaccount">
          <img src="~@/assets/image/icon1.png" alt="">
          <span slot="title">我的开户信息</span>
        </ui-menu-item>
      </ui-menu>
    </div>
    </div>
    <div class="fund-content">
      <router-view />
    </div>
      </div>
 
  </div>
</template>
<script>
export default {
  name: "fund",
  methods:{
      toPro(){
          this.$router.push('fundproduct')
      },
      myFund(){
          this.$router.push('myfund')      
      },
      transcation(){
        this.$router.push('transcation')
      },
      openaccount(){
        this.$router.push('openaccount')
        
      }
  }
};
</script>
<style scoped>
.header-wrap{
   height:39px;
   line-height: 30px;
   background-color: #fff;
   padding-left: 17px;
   margin: 10px 0 12px 0;
}
.header-wrap span{
  line-height: 38px;
}
.fund-wrap{
    display: -webkit-box;
}
.fund-header{
  background-color: #fff;
    width: 12%;
    margin-right: 23px;
    /* width: 86px; */
}
.fund-header li{
  display: inline-block;
  margin-top: 10px;
}
.fund-header span{
  display: block;
}
.fund-header img{
  width: 38px;
}
.fund-content{
    width: 86%;
}
.info-menu{
    text-align: center;
}
</style>