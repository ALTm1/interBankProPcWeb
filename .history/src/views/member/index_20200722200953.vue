<!--
 * @Author: your name
 * @Date: 2020-07-20 15:53:35
 * @LastEditTime: 2020-07-22 16:56:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JNRCB-PC\src\views\member\index.vue
--> 

<template>
  <div class="member">
    <ui-container class="container-demo demo-con" style="height: 100%">
      <ui-col :span="4">
        <ui-aside width="100%" style="height:100%" v-if="!showFriendManage">
          <ui-menu
            style="height: 100%"
            class="ui-menu-vertical-demo"
            text-color="#fff"
            active-text-color="#ffd04b"
            default-active="1-1"
            @open="openMenu"
            @close="closeMenu"
            @select="selectMenu"
          >
            <ui-submenu index="1">
              <template slot="title">
                <i class="ui-icon-menu"></i>
                <span>我的资产</span>
              </template>
              <ui-menu-item-group>
                <ui-menu-item index="1-1">已发布资产</ui-menu-item>
                <ui-menu-item index="1-2">已关注资产</ui-menu-item>
                <ui-menu-item index="1-3">订阅资产查询</ui-menu-item>
                <ui-menu-item index="1-4">订阅偏好设置</ui-menu-item>
              </ui-menu-item-group>
            </ui-submenu>
            <ui-menu-item index="2">
              <i class="ui-icon-menu"></i>
              <span slot="title">我的意向</span>
            </ui-menu-item>
            <ui-menu-item index="3">
              <i class="ui-icon-menu"></i>
              <span slot="title">待确认意向</span>
            </ui-menu-item>
            <ui-menu-item index="4">
              <i class="ui-icon-menu"></i>
              <span slot="title">授信管理</span>
            </ui-menu-item>
            <ui-submenu index="5">
              <template slot="title">
                <i class="ui-icon-menu"></i>
                <span>好友管理</span>
              </template>
              <ui-menu-item-group>
                <ui-menu-item index="5-1">我的好友</ui-menu-item>
                <ui-menu-item index="5-2">同业通讯录</ui-menu-item>
              </ui-menu-item-group>
            </ui-submenu>
            <ui-menu-item index="6">
              <i class="ui-icon-menu"></i>
              <span slot="title">对账查询</span>
            </ui-menu-item>
            <ui-menu-item index="7">
              <i class="ui-icon-menu"></i>
              <span slot="title">机构认证</span>
            </ui-menu-item>
          </ui-menu>
        </ui-aside>
        <ui-aside width="100%" v-else>
          <ui-menu default-active="1">
            <ui-menu-item index="1">
              <i class="ui-icon-menu"></i>
              <span slot="title">我的好友</span>
            </ui-menu-item>
            <ui-menu-item index="2">
              <i class="ui-icon-menu"></i>
              <span slot="title">同业通讯录</span>
            </ui-menu-item>
          </ui-menu>
        </ui-aside>
      </ui-col>
      <ui-col :span="20" class="content-wrap">
        <ui-main>
          <!-- 主体内容 -->
          <router-view></router-view>
        </ui-main>
      </ui-col>
    </ui-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFriendManage: false
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      // if (to.meta.sideMenu && to.meta.sideMenu == '好友管理') {
      //   vm.showFriendManage = true
      // } else {
      //   vm.showFriendManage = false
      // }
    })
  },
  methods: {
    openMenu(key, keyPath) {
      console.log(key, keyPath)
    },
    closeMenu(key, keyPath) {
      console.log(key, keyPath)
    },
    selectMenu(key, keyPath) {
      console.log(key, keyPath)
      if (key == '1-1') {
        this.$router.push({
          path: '/member/publishedQry'
        })
      } else if (key == '1-2') {
        this.$router.push({
          path: '/member/attentionQry'
        })
      } else if (key == '1-3') {
        this.$router.push({
          path: '/member/subscribeQry'
        })
      } else if (key == '1-4') {
        this.$router.push({
          path: '/member/subscribePreferSet'
        })
      } else if (key == '2') {
        this.$router.push({
          path: '/member/myIntention'
        })
      } else if (key == '3') {
        this.$router.push({
          path: '/member/intentionDetail'
        })
      } else if (key == '4') {
        this.$router.push({
          path: '/member/creditManagement'
        })
      } else if (key == '5-1') {
        this.$router.push({
          path: '/member/friendList'
        })
      } else if (key == '5-2') {
        this.$router.push({
          path: '/member/addressBookList'
        })
      } else if (key == '6') {
        this.$router.push({
          path: '/member/checkingQuery'
        })
      } else if (key == '7') {
        this.$router.push({
          path: '/member/organQry'
        })
      }
    }
  }
}
</script>

<style lang="css" scoped>
.member /deep/ .ui-aside {
  overflow-x: hidden;
  min-height: 100vh;
  /* background-color: #545c64; */
}
.member /deep/ .ui-menu {
  /* background-color: #545c64; */
}

.member /deep/ .ui-menu-item:hover,
.member /deep/ .ui-menu-item:focus,
.member /deep/ .ui-submenu__title:hover,
.member /deep/ .ui-submenu__title:focus {
  background: rgb(75, 79, 80);
}
.member .content-wrap {
  overflow-y: auto;
}
</style>