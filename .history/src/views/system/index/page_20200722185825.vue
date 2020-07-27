<template>
  <ui-container-full class="page">
    <ui-page-cover>
      <ui-icon-svg class="logo" name="vx-admin" />
      <template slot="footer">
        <div class="btn-group">
          <span
            class="btn-group__btn"
            @click="$open($t('views.system.index.page.link.href.doc'))"
          >{{ $t('views.system.index.page.link.text.doc') }}</span> |
          <span
            class="btn-group__btn"
            @click="$open('http://vx.csii.com.cn/v3new/index.html#/main/home')"
          >{{ $t('views.system.index.page.link.text.start-kit') }}</span>
        </div>
      </template>
    </ui-page-cover>
  </ui-container-full>
</template>

<script>
import UiPageCover from './components/ui-page-cover'
export default {
  components: {
    UiPageCover
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page {
  .logo {
    width: 120px;
  }
  .btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    line-height: 12px;
    margin-top: 0px;
    margin-bottom: 20px;
    .btn-group__btn {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
      &.btn-group__btn--link {
        color: $color-primary;
      }
    }
  }
}
</style>
<style lang="scss">
.ui-layout-header-aside-group
  .ui-layout-header-aside-content
  .ui-theme-container
  .ui-theme-container-main
  .ui-theme-container-main-body
  .page.container-component
  .ui-container-full-full {
  right: 20px;
  left: 20px;
  border-radius: 5px;
}
</style>
