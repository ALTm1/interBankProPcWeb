<template>
  <div class="menu-list">
    <ui-menu text-color="#333333" class="menu-item" mode="horizontal" @select="handleSelect">
      <ui-menu-item index="1" @click="home">首页</ui-menu-item>
      <ui-submenu index="2" style="height:50px;font-size:16px;">
        <template slot="title">行业动态</template>
        <ui-menu-item index="2-1" @click="news">资讯</ui-menu-item>
        <ui-menu-item index="2-2" @click="meeting">会议</ui-menu-item>
        <ui-menu-item index="2-3" @click="training">培训</ui-menu-item>
        <ui-menu-item index="2-4" @click="mechanism">机构动态</ui-menu-item>
      </ui-submenu>
      <ui-submenu index="3">
        <template slot="title">金融市场</template>
        <ui-menu-item index="3-1" @click="proIndex">产品中心</ui-menu-item>
        <ui-menu-item index="3-2" @click="proTrade">产品交易</ui-menu-item>
        <ui-menu-item index="3-3" @click="proRelease">产品发布</ui-menu-item>
      </ui-submenu>

      <ui-submenu index="4">
        <template slot="title">会员中心</template>
        <ui-submenu index="4-1">
          <template slot="title">我的资产</template>
          <ui-menu-item index="4-1-1" @click="myAsset">已发布资产</ui-menu-item>
          <ui-menu-item index="4-1-2" @click="asset">已关注资产</ui-menu-item>
          <ui-menu-item index="4-1-3" @click="subscribeQry">订阅资产查询</ui-menu-item>
          <ui-menu-item index="4-1-4" @click="subscribePreferSet">订阅偏好设置</ui-menu-item>
        </ui-submenu>
        <ui-menu-item index="4-2" @click="myIntention">我的意向</ui-menu-item>
        <ui-menu-item index="4-3" @click="intentionDetail">待确认意向</ui-menu-item>
        <ui-menu-item index="4-4" @click="creditManagement">授信管理</ui-menu-item>
        <ui-submenu index="4-4">
          <template slot="title">好友管理</template>
          <ui-menu-item index="4-4-1" @click="friendList">我的好友</ui-menu-item>
          <ui-menu-item index="4-4-2" @click="addressBookList">同业通讯录</ui-menu-item>
        </ui-submenu>
        <ui-menu-item index="4-4" @click="checkingQuery">对账查询</ui-menu-item>
        <ui-menu-item index="4-4" @click="organQry">机构认证</ui-menu-item>
      </ui-submenu>
      <ui-menu-item index="5" @click="fund">基金通</ui-menu-item>
      <ui-submenu index="6">
        <template slot="title">联盟圈</template>
        <ui-menu-item index="6-1">产品中心</ui-menu-item>
        <ui-menu-item index="6-2">会员中心</ui-menu-item>
      </ui-submenu>
      <ui-submenu index="7">
        <template slot="title">个人设置</template>
        <ui-menu-item index="7-1" @click="person">个人信息修改</ui-menu-item>
        <ui-menu-item index="7-2" @click="forgetPassConf">登录密码修改</ui-menu-item>
        <ui-menu-item index="7-2">注销</ui-menu-item>
      </ui-submenu>
      <ui-submenu index="8">
        <template slot="title">员工中心</template>
        <ui-menu-item index="8-1" @click="product">团购产品管理</ui-menu-item>
        <ui-menu-item index="8-2" @click="leagueList">参团意向列表</ui-menu-item>
        <ui-menu-item index="8-3" @click="file">对账文件下载</ui-menu-item>
        <ui-menu-item index="8-4" @click="approval">审批菜单</ui-menu-item>
      </ui-submenu>
      <ui-menu-item index="9">关于平台</ui-menu-item>
      <ui-menu-item index="10" @click="infomation">消息中心</ui-menu-item>
    </ui-menu>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  name: 'menuTree',
  components: {},
  data() {
    return {}
  },
  methods: {
    myAsset() {
      this.$router.push('/member/publishedQry')
    },
    asset() {
      this.$router.push('/member/attentionQry')
    },
    subscribeQry() {
      this.$router.push('/member/subscribeQry')
    },
    subscribePreferSet() {
      this.$router.push('/member/subscribePreferSet')
    },
    myIntention() {
      this.$router.push('/member/myIntention')
    },
    intentionDetail() {
      this.$router.push('/member/intentionQry')
    },
    creditManagement() {
      this.$router.push('/member/creditManagement')
    },
    friendList() {
      this.$router.push('/member/friendList')
    },
    addressBookList() {
      this.$router.push('/member/addressBookList')
    },
    checkingQuery() {
      this.$router.push('/member/checkingQuery')
    },
    organQry() {
      this.$router.push('/member/organQry')
    },
    ProRelease() {
      this.$router.push('/index/financialmarket/proQry')
      this.$router.push('/member/intentionDetail')
    },
    creditManagement() {
      this.$router.push('/member/creditManagement')
    },
    friendList() {
      this.$router.push('/member/friendList')
    },
    addressBookList() {
      this.$router.push('/member/addressBookList')
    },
    checkingQuery() {
      this.$router.push('/member/checkingQuery')
    },
    organQry() {
      this.$router.push('/member/organQry')
    },
    proIndex() {
      this.$router.push('/financialMarket/productIndex/proQry')
    },
    proTrade() {
      this.$router.push('/financialMarket/productTrade/proTrade')
    },
    proRelease() {
      this.$router.push('/financialMarket/productRelease/proRelease')
    },
    forgetPassConf() {
      // 登录密码修改s
      this.$router.push('/userLogin')
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    home() {
      this.$router.push('/index/home')
    },
    // 消息中心
    infomation() {
      this.$router.push('/index/information')
    },
    // 行业动态的资讯
    news() {
      this.$router.push('/index/industry/realnews')
    },
    // 行业动态的资讯里的会议
    meeting() {
      this.$router.push('/index/industry/meeting')
    },
    // 行业动态的资讯里的培训
    training() {
      this.$router.push('/index/industry/training')
    },
    mechanism() {
      this.$router.push('/index/industry/mechanism')
    },
    // 个人信息修改页面
    person() {
      this.$router.push('/index/person')
    },
    // 团购产品管理
    product() {
      this.$router.push('/index/product/productlist')
    },
    file() {
      this.$router.push('/index/file')
    },
    leagueList() {
      this.$router.push('/index/league')
    },
    approval() {
      this.$router.push('/index/approval')
    },
    fund() {
      this.$router.push('/index/fund')
    },
  },
}
</script>
<style>
.menu-list{
  height: 41px;
}
.ui-menu--horizontal>.ui-submenu .ui-submenu__title{
    font-size:13px!important;
   line-height: 41px!important;
    height: 41px!important;
}
.ui-icon-arrow-down:before {
  content: '';
  display: none;
}
.theme-vx .ui-menu-item i, .theme-vx .ui-submenu__title i{
    width: 0!important;
    display: none!important;
}
.ui-menu--horizontal > .ui-submenu {
  text-align: center !important;
}
.ui-menu--horizontal>.ui-menu-item{
    font-size: 13px;
    line-height: 41px;
}
.ui-submenu .ui-submenu__title .ui-menu-item{
     font-size:13px;
font-weight:400;
color:rgba(51,51,51,1);
}
.menu-item{
    text-align: center;
    height: 41px;
   line-height: 41px;
}

</style>