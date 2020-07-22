<!--
 * @Author: your name
 * @Date: 2020-07-21 18:58:26
 * @LastEditTime: 2020-07-22 15:41:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jn-pc\src\views\member\intentiontobeconfirmed\intentionRes.vue
--> 
<template>
  <div class="initention-res">
    <!-- 标题 -->
    <ui-breadcrumb separator-class="ui-icon-arrow-right">
      <ui-breadcrumb-item class="ui-icon-add-location">会员中心</ui-breadcrumb-item>
      <ui-breadcrumb-item>待确认意向</ui-breadcrumb-item>
    </ui-breadcrumb>
    <!-- 结果 -->
    <div class="result">
      <div class="result-img"></div>
      <p>处理成功</p>
    </div>
    <div class="status-tip">您的待确认意向处理成功成功，请等待审核</div>
    <div style="text-align:center;margin-top:40px">
      <ui-button type="primary" round @click="submitForm('form')">完成</ui-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'intentionRes',
  created() {},
  // 组件激活
  activated() {
    // 是否重新加载数据
    if (this.$route.meta.reloadData) {
      this.$nextTick(() => {
        this.$refs.form.resetFields()
      })
    }
  },
  methods: {
    submitForm(arg) {}
  }
}
</script>
<style lang="scss" scoped>
.initention-res {
  .result {
    width: 15%;
    overflow: hidden;
    margin: 60px auto 0;
  }
  .result-img,
  .result p {
    float: left;
  }
  .result-img {
    width: 80px;
    height: 80px;
    margin-right: 10%;
    background: #f0f;
    display: inline-block;
  }
  .status-tip {
    margin-top: 40px;
    text-align: center;
  }
  .ui-form-item__content {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .padtop20 {
    padding-top: 20px;
  }
  .ui-button.is-round {
    padding: 12px 180px;
  }
}
</style>
