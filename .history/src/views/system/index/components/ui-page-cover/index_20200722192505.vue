<template>
  <!-- <div class="ui-page-cover">
    <div class="ui-page-cover__logo">
      <slot />
    </div>
    <p class="ui-page-cover__title">{{ $t('views.system.index.cover.title') }} {{$version}}</p>
    <p class="ui-page-cover__sub-title">{{ $t('views.system.index.cover.sub-title') }}</p>
    <p
      class="ui-page-cover__build-time"
    >{{ $t('views.system.index.cover.build-time') }} {{$buildTime}}</p>
    <slot name="footer" />
  </div> -->
   <div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
.ui-page-cover {
  @extend %full;
  @extend %unable-select;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .ui-page-cover__logo {
    img {
      width: 200px;
    }
  }
  .ui-page-cover__title {
    margin: 0px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: $color-text-main;
  }
  .ui-page-cover__sub-title {
    margin: 0px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 14px;
    color: $color-text-normal;
  }
  .ui-page-cover__build-time {
    margin: 0px;
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 12px;
    color: $color-text-placehoder;
  }
}
</style>
