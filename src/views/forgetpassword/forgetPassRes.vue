<!--
 * @Author: your name
 * @Date: 2020-07-21 10:08:35
 * @LastEditTime: 2020-07-22 15:38:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jn-pc\src\views\forgetpassword\forgetPassRes.vue
--> 
<template>
  <ui-container-full class="forget-pass-res">
    <!-- 标题 -->
    <ui-breadcrumb separator-class="ui-icon-arrow-right">
      <ui-breadcrumb-item class="ui-icon-add-location">忘记密码</ui-breadcrumb-item>
      <ui-breadcrumb-item>重置结果</ui-breadcrumb-item>
    </ui-breadcrumb>
    <!-- 步骤条 -->
    <div class="forget-pass-step">
      <ui-steps :space="300" :active="2" finish-status="success" align-center>
        <ui-step title="个人信息录入"></ui-step>
        <ui-step title="设置新密码"></ui-step>
        <ui-step title="注册结果"></ui-step>
      </ui-steps>
    </div>
    <!-- 结果 -->
    <div style="text-align:center;margin: 80px 0">注册成功</div>
    <div style="text-align:center;">您的登陆密码已设置成功，请使用新密码登录</div>
    <div style="text-align:center">
      <ui-button type="primary" round @click="submitForm('form')">立即登录</ui-button>
    </div>
  </ui-container-full>
</template>
<script>
export default {
  name: 'forgetPassRes',
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
.forget-pass-res {
  .ui-breadcrumb {
    width: 50%;
    margin: 0 auto;
  }
  .forget-pass-step {
    width: 60%;
    margin: 40px auto;
  }

  .ui-steps {
    margin-left: 9%;
  }
  .ui-form {
    width: 40% !important;
    margin: 0 auto !important;
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
