<template>
  <ui-container-full class="bank-inner-res">
    <img src="@img/logo.png" />
    <p>行内转账交易提交成功，待审核人员审核！</p>
    <ui-row class="text-center padtop20">
      <ui-button type="primary" @click="goBack()">继续转账</ui-button>
    </ui-row>
  </ui-container-full>
</template>

<script>
export default {
  name: 'InnerTransferRes',
  created() {
    const params = this.$route.params
    if (!(params && params.info)) {
      // 刷新页面跳转到录入页面
      this.goBack()
    }
  },
  methods: {
    goBack() {
      // 刷新页面跳转到录入页面
      this.goto({ name: 'demo-business-bankInner' })
    }
  }
}
</script>
<style lang="scss">
.bank-inner-res {
  text-align: center;
  .text-center {
    text-align: center;
  }
  .padtop20 {
    padding-top: 20px;
  }
}
</style>
