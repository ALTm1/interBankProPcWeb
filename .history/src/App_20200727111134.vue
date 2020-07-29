<!--
 * @Author: your name
 * @Date: 2020-07-21 10:08:35
 * @LastEditTime: 2020-07-22 14:27:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jn-pc\src\App.vue
--> 
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import util from '@/libs/utils/index.js'
export default {
  name: 'app',
  watch: {
    '$i18n.locale': 'i18nHandle'
  },
  created() {
    this.i18nHandle(this.$i18n.locale)
  },
  methods: {
    i18nHandle(val, oldVal) {
      util.cookies.set('lang', val)
      document.querySelector('html').setAttribute('lang', val)
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/public-class.scss';
</style>
<style lang="scss">
.demo-block h3 {
  margin: 55px 0 20px;
}
button{
  outline: none;
  cursor: pointer;
}
</style>
