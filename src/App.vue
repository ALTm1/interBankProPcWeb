
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
    '$i18n.locale': 'i18nHandle',
  },
  created() {
    this.i18nHandle(this.$i18n.locale)
  },
  methods: {
    i18nHandle(val, oldVal) {
      util.cookies.set('lang', val)
      document.querySelector('html').setAttribute('lang', val)
    },
  },
}
</script>

<style lang="scss">
@import '~@/assets/style/public-class.scss';
</style>
<style lang="scss">
.demo-block h3 {
  margin: 55px 0 20px;
}

button {
  outline: none;
  cursor: pointer;
}
</style>
