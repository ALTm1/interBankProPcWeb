<template>
  <div class="menu-list">
    <ui-menu
    text-color="#333333"
      class="menu-item"
      mode="horizontal"
      @select="handleSelect"
    >
      <ui-menu-item index="1" @click="home">首页</ui-menu-item>
      <ui-submenu index="2" style="height:50px;font-size:16px;">
        <template slot="title">行业动态</template>
        <ui-menu-item index="2-1" @click="news">资讯</ui-menu-item>
        <ui-menu-item index="2-2" @click="meeting">会议</ui-menu-item>
        <ui-menu-item index="2-3" @click="training">培训</ui-menu-item>
        <ui-menu-item index="2-4" @click="mechanism">机构动态</ui-menu-item>
      </ui-submenu>
      <ui-menu-item index="3">金融市场</ui-menu-item>
      <ui-submenu index="4">
        <template slot="title">会员中心</template>
        <ui-submenu index="4-1">
          <template slot="title">我的资产</template>
          <ui-menu-item index="4-1-1"  @click="myAsset">已发布资产</ui-menu-item>
          <ui-menu-item index="4-1-2" @click="asset">已关注资产</ui-menu-item>
          <ui-menu-item index="4-1-3">订阅资产查询</ui-menu-item>
          <ui-menu-item index="4-1-4">订阅偏好设置</ui-menu-item>
        </ui-submenu>
        <ui-menu-item index="4-2">我的意向</ui-menu-item>
        <ui-menu-item index="4-3">待确认意向</ui-menu-item>
        <ui-menu-item index="4-4">机构动态</ui-menu-item>
        <ui-menu-item index="4-4">授信管理</ui-menu-item>
        <ui-menu-item index="4-4">好友管理</ui-menu-item>
         <ui-menu-item index="4-4">对账查询</ui-menu-item>
          <ui-menu-item index="4-4">机构认证</ui-menu-item>
      </ui-submenu>
      <ui-menu-item index="5">基金通</ui-menu-item>
       <ui-submenu index="6">
        <template slot="title">联盟通</template>
        <ui-menu-item index="6-1">产品中心</ui-menu-item>
        <ui-menu-item index="6-2">会员中心</ui-menu-item>
      </ui-submenu>
       <ui-submenu index="7">
        <template slot="title">个人设置</template>
        <ui-menu-item index="7-1" @click="person">个人信息修改</ui-menu-item>
        <ui-menu-item index="7-2">登录密码修改</ui-menu-item>
        <ui-menu-item index="7-2">注销</ui-menu-item>
      </ui-submenu>
       <ui-submenu index="8">
        <template slot="title">员工中心</template>
        <ui-menu-item index="8-1" @click="product">团购产品管理</ui-menu-item>
        <ui-menu-item index="8-2">参团意向列表</ui-menu-item>
        <ui-menu-item index="8-3">对账文件下载</ui-menu-item>
         <ui-menu-item index="8-4">审批菜单</ui-menu-item>
      </ui-submenu>
      <ui-menu-item index="9">关于平台</ui-menu-item>
       <ui-menu-item index="10" @click="infomation">消息中心</ui-menu-item>
      
    </ui-menu>
    <div class="line"></div>
  
  </div>
</template>
<script>
export default {
  name: "menuTree",
  components: {},
  data() {
    return {
      
    };
  },
  methods: {
    myAsset(){
      this.$router.push('/member/publishedQry')
      
    },
    asset(){
      this.$router.push('/member/attentionQry')
    },
    
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    home(){
      this.$router.push('/index/home')
    },
    // 消息中心
    infomation(){
       this.$router.push('/index/information')
    },
    // 行业动态的资讯
    news(){
      this.$router.push('/index/industry/realnews')
    },
    // 行业动态的资讯里的会议
    meeting(){
      this.$router.push('/index/industry/meeting')
    },
    // 行业动态的资讯里的培训
    training(){
      this.$router.push('/index/industry/training')
    },
    mechanism(){
      this.$router.push('/index/industry/mechanism')
    },
    // 个人信息修改页面
    person(){
      this.$router.push('/index/person')
    },
    // 团购产品管理
    product(){
      this.$router.push('/index/product/productlist')
      
    }
  }
};
</script>
<style>
.ui-menu--horizontal>.ui-submenu .ui-submenu__title{
    font-size:16px!important;
   line-height: 50px!important;
    height: 50px!important;
}
.ui-icon-arrow-down:before{
    content: '';  
    display: none;
}
.theme-vx .ui-menu-item i, .theme-vx .ui-submenu__title i{
    width: 0!important;
     display: none!important;
}
.ui-menu--horizontal>.ui-submenu{
    text-align: center!important;
}
.ui-menu--horizontal>.ui-menu-item{
    font-size: 16px;
    line-height: 50px;
}
.ui-submenu .ui-submenu__title .ui-menu-item{
     font-size:16px;
font-weight:400;
color:rgba(51,51,51,1);
}
.menu-item{
    text-align: center;
    height: 50px;
   line-height: 50px;
}
</style>