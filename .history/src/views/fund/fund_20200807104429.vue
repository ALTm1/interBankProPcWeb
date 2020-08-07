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
          <span slot="title">产品超市</span>
        </ui-menu-item>
        <ui-menu-item index="2" @click="myFund">
          <span slot="title">我的基金</span>
        </ui-menu-item>
        <ui-menu-item index="3" @click="transcation">
          <span slot="title">交易明细查询</span>
        </ui-menu-item>
        <ui-menu-item index="4" @click="openaccount">
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
   margin-bottom: 12px;
}
.header-wrap span{
  line-height: 30px;
}
.fund-wrap{
    display: -webkit-box;
}
.fund-header{
  background-color: #fff;
    width: 20%;
    /* width: 86px; */
}
.fund-content{
    width: 80%;
}
.info-menu{
    text-align: center;
}
</style>