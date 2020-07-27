<template>
  <div>
    <div>
      <!-- 顶栏 -->
      <div class="tab-menu">
        <div class="menu-left">
           <img src="~@/assets/image/tab.png" alt />
        <menuTree></menuTree>
        </div>
       
        <span class="login-wrap">
          <li @click="login">登录</li>
          <p>｜</p>
          <li @click="registerPre">注册</li>
        </span>
      </div>
      
    </div>
    <!-- 下面 主体 -->
    <div class="home-wrap">
         <div>
          <router-view />
        </div>
      </div> 
  </div>
  <!-- <div
    class="ui-layout-header-aside-group"
    :style="styleLayoutMainGroup"
    :class="{grayMode: grayActive}"
  >
    半透明遮罩
    <div class="ui-layout-header-aside-mask"></div>
    主体内容
    <div class="ui-layout-header-aside-content" flex="dir:top">
      顶栏
      <div
        class="ui-theme-header"
        :style="{
          opacity: this.searchActive ? 0.5 : 1
        }"
        flex-box="0"
        flex
      >
        <div
          class="logo-group"
          :style="{width: asideCollapse ? asideWidthCollapse : asideWidth}"
          flex-box="0"
        >
          <img
            v-if="asideCollapse"
            :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/icon-only.png`"
            :onerror="$defaultImg"
          />
          <img
            v-else
            :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/all.png`"
            :onerror="$defaultImg"
          />
        </div>
        <div class="toggle-aside-btn" @click="handleToggleAside" flex-box="0">
          <ui-icon-fa name="bars" />
        </div>
        <ui-menu-header flex-box="1" />
        顶栏右侧
        <div class="ui-header-right" flex-box="0">
          如果你只想在开发环境显示这个按钮请添加 v-if="$env === 'development'"
          <ui-header-search @click="handleSearchClick" />
          <ui-header-log />
          <ui-header-fullscreen />
          <ui-header-theme />
          <ui-header-size />
          <ui-header-locales />
          <ui-header-color />
          <ui-header-user />
        </div>
      </div>
      下面 主体
      <div class="ui-theme-container" flex-box="1" flex>
        主体 侧边栏
        <div
          flex-box="0"
          ref="aside"
          class="ui-theme-container-aside"
          :style="{
            width: asideCollapse ? asideWidthCollapse : asideWidth,
            opacity: this.searchActive ? 0.5 : 1
          }"
          v-if="$route.path!=='/index'"
        >
          <ui-menu-side />
        </div>
        主体
        <div class="ui-theme-container-main" flex-box="1" flex>
          搜索
          <transition name="fade-scale">
            <div v-if="searchActive" class="ui-theme-container-main-layer" flex>
              <ui-panel-search ref="panelSearch" @close="searchPanelClose" />
            </div>
          </transition>
          内容
          <transition name="fade-scale">
            <div
              v-if="!searchActive && $route.path!=='/index'"
              class="ui-theme-container-main-layer"
              flex="dir:top"
            >
             
              <div class="ui-theme-container-main-header" flex-box="0">
                <ui-tabs />
              </div>
              页面
              <div class="ui-theme-container-main-body" flex-box="1">
                <transition :name="transitionActive ? 'fade-transverse' : ''">
                  <keep-alive :include="keepAlive">
                    <router-view />
                  </keep-alive>
                </transition>
              </div>
            </div>
            <div
              v-if="!searchActive  && $route.path==='/index'"
              class="ui-theme-container-main-layer"
              flex="dir:top"
            >
              页面
              <div class="ui-theme-container-main-body" flex-box="1">
                <transition :name="transitionActive ? 'fade-transverse' : ''">
                  <keep-alive :include="keepAlive">
                    <router-view />
                  </keep-alive>
                </transition>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import uiMenuSide from "./components/menu-side";
import uiMenuHeader from "./components/menu-header";
import uiTabs from "./components/tabs";
import uiHeaderFullscreen from "./components/header-fullscreen";
import uiHeaderLocales from "./components/header-locales";
import uiHeaderSearch from "./components/header-search";
import uiHeaderSize from "./components/header-size";
import uiHeaderTheme from "./components/header-theme";
import uiHeaderUser from "./components/header-user";
import uiHeaderLog from "./components/header-log";
import uiHeaderColor from "./components/header-color";
import { mapState, mapGetters, mapActions } from "vuex";
import mixinSearch from "./mixins/search";
import menuTree from "./components/menu-tree/menu";
export default {
  name: "ui-layout-header-aside",
  mixins: [mixinSearch],
  components: {
    uiMenuSide,
    uiMenuHeader,
    uiTabs,
    uiHeaderFullscreen,
    uiHeaderLocales,
    uiHeaderSearch,
    uiHeaderSize,
    uiHeaderTheme,
    uiHeaderUser,
    uiHeaderLog,
    uiHeaderColor,
    menuTree,
  },
  data() {
    return {
      // [侧边栏宽度] 正常状态
      asideWidth: "200px",
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: "65px"
    };
  },
  computed: {
    ...mapState("vxadmin", {
      keepAlive: state => state.page.keepAlive,
      grayActive: state => state.gray.active,
      transitionActive: state => state.transition.active,
      asideCollapse: state => state.menu.asideCollapse
    }),
    ...mapGetters("vxadmin", {
      themeActiveSetting: "theme/activeSetting"
    }),
    /**
     * @description 最外层容器的背景图片样式
     */
    styleLayoutMainGroup() {
      /* eslint-disable indent */
      return {
        ...(this.themeActiveSetting.backgroundImage
          ? {
              backgroundImage: `url('${this.$baseUrl}${this.themeActiveSetting.backgroundImage}')`
            }
          : {})
      };
    }
  },
  methods: {
    ...mapActions("vxadmin/menu", ["asideCollapseToggle"]),
    /**
     * 接收点击切换侧边栏的按钮
     */
    handleToggleAside() {
      this.asideCollapseToggle();
    },
    login(){
      this.$router.push('/login')
    },
    registerPre(){
      this.$router.push('/registerPre')
    }
  }
};
</script>

<style lang="scss">
// 注册主题
@import "~@/assets/style/theme/register.scss";
</style>
<style lang="scss">
.tab-menu {
  background-color: #fff;
  // display: -webkit-box;
  img {
    width: 140px;
    height: 30px;
    margin: 10px 0;
  }
  span {
    height: 50px;
    line-height: 50px;
    display: -webkit-box;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
  li {
    font-size: 16px;
  }
  p {
    color: #cccccc;
    display: inline;
    margin: 0 30px;
  }
}
.menu-badge {
  position: relative;
  &::after {
    content: attr(data-badge);
    position: absolute;
    top: -50%;
    right: 0;
    transform: translateX(80%) translateY(-4px);
    color: #f00;
    line-height: 1em;
    font-style: italic;
    z-index: 1;
  }
}
.footer-wrap {
  height: 50px;
  width: 100%;
  background: #a70b22;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
}
.home-wrap {
  width: 100%;
  overflow: hidden;
}
.login-wrap{
  float: right;
  li{
    cursor: pointer;
  }
}
.menu-left{
  float: left;
  .menu-list{
    float: right;
  }
}
</style>
